import { Hono } from 'hono';
import { createMcpHandler } from 'mcp-handler';
import { createModuleLogger } from './utils/logger';

import { EmptyParamsSchema } from './mcp/schemas';
import { createSuccessResult, createErrorResult } from './utils/toolResult';
import {
  SearchProductsSchema,
  AddToBasketSchema,
  SetCookiesSchema,
  GetCookiesSchema,
  ClearCookiesSchema,
  GenerateReidSchema,
  GetCategoriesSchema,
  SearchByCategorySchema,
  GetUserSchema,
  AdjustBasketSchema,
  GetBasketSchema,
  GetCurrentLocationSchema,
  type SearchProductsParams,
  type AddToBasketParams,
  type SetCookiesParams,
  type SearchByCategoryParams,
  type AdjustBasketParams,
} from './mcp/migrosSchemas';
import { MigrosApiClient } from './services/MigrosApiClient';
import { LocalSessionManager } from './services/LocalSessionManager';
import { MigrosCurrentLocationResponse } from './types/migros';

const logger = createModuleLogger('MCPHandlerServer');

// Initialize session manager
const sessionManager = new LocalSessionManager();

// Initialize Migros API client
const migrosClient = new MigrosApiClient(sessionManager);

// Create the Hono app
const app = new Hono();

// Create MCP handler
const handler = createMcpHandler(
  (server) => {
    // Test tool
    server.tool('test', 'Test the tool', EmptyParamsSchema.shape, async () => {
      return createSuccessResult('Successfully tested the tool');
    });

    // Migros: Search Products
    server.tool(
      'migros.searchProducts',
      'Search for products in Migros Hemen marketplace',
      SearchProductsSchema.shape,
      async (params: SearchProductsParams) => {
        try {
          const result = await migrosClient.searchProducts(
            params.query,
            params.reid
          );

          if (!result.successful) {
            return createErrorResult(
              'error' in result
                ? result.error || 'Search failed'
                : 'Search failed'
            );
          }

          const searchInfo = result.data.searchInfo;
          const products = searchInfo.storeProductInfos.map((product) => ({
            id: product.id,
            name: product.name,
            prettyName: product.prettyName,
            brand: product.brand.name,
            price: product.shownPrice,
            unit: product.unit,
            maxAmount: product.maxAmount,
            storeId: product.storeId,
            sku: product.sku,
            image: product.images[0]?.urls?.PRODUCT_LIST,
            unitPrice: product.unitPrice,
            discountRate: product.discountRate,
          }));

          return createSuccessResult(
            `Found ${searchInfo.hitCount} products for "${params.query}"`,
            {
              query: params.query,
              hitCount: searchInfo.hitCount,
              pageCount: searchInfo.pageCount,
              products: products.slice(0, 10), // Limit to first 10 for readability
              totalProducts: products.length,
            }
          );
        } catch (error) {
          logger.error('Search products error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Unknown search error'
          );
        }
      }
    );

    // Migros: Add to Basket
    server.tool(
      'migros.addToBasket',
      'Add products to basket (requires cookies to be set first)',
      AddToBasketSchema.shape,
      async (params: AddToBasketParams) => {
        try {
          const hasCookies = await migrosClient.hasCookies();
          if (!hasCookies) {
            return createErrorResult(
              'No cookies available. Please set cookies first using migros.setCookies'
            );
          }

          const result = await migrosClient.addToBasket(
            params.items,
            params.productPrettyName,
            params.reid,
            {
              applyCrmDiscounts: params.applyCrmDiscounts,
              applySpecialDiscounts: params.applySpecialDiscounts,
              applyDeepDiscounts: params.applyDeepDiscounts,
              includeDeliveryFee: params.includeDeliveryFee,
              applyFoodProductDiscounts: params.applyFoodProductDiscounts,
            }
          );

          if (!result.successful) {
            logger.error('Add to basket client error', { result });
            return createErrorResult(
              'Add to basket failed',
              'error' in result ? result.error : 'Unknown client error',
              { result }
            );
          }

          const basketData = result.data;
          const addedItems = basketData.itemInfos.map((itemInfo) => ({
            productName: itemInfo.product?.name || 'Unknown',
            amount: itemInfo.shownAmount,
            singlePrice: itemInfo.singleShownPrice,
            totalPrice: itemInfo.totalPrice,
            productId: itemInfo.item.productId,
          }));

          return createSuccessResult(
            `Successfully added ${addedItems.length} item(s) to basket`,
            {
              itemsAdded: addedItems.length,
              totalPrice: basketData.totalPrice,
              totalProductPrice: basketData.totalProductPrice,
              revenue: basketData.revenue,
              priceLeftForCheckout: basketData.priceLeftForCheckout,
              minimumRequiredRevenue: basketData.minimumRequiredRevenue,
              addedItems,
            }
          );
        } catch (error) {
          logger.error('Add to basket error', { error });
          return createErrorResult(
            error instanceof Error
              ? error.message
              : 'Unknown add to basket error'
          );
        }
      }
    );

    // Migros: Set Cookies
    server.tool(
      'migros.setCookies',
      'Set authentication cookies for Migros API requests',
      SetCookiesSchema.shape,
      async (params: SetCookiesParams) => {
        try {
          await migrosClient.setCookies(params.cookies);
          return createSuccessResult('Cookies set successfully', {
            status: 'saved',
            cookieLength: params.cookies.length,
          });
        } catch (error) {
          logger.error('Set cookies error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Failed to save cookies'
          );
        }
      }
    );

    // Migros: Get Cookies
    server.tool(
      'migros.getCookies',
      'Get currently stored authentication cookies',
      GetCookiesSchema.shape,
      async () => {
        try {
          const cookies = await migrosClient.getCookies();
          if (!cookies) {
            return createSuccessResult('No cookies stored', {
              hasCookies: false,
            });
          }

          return createSuccessResult('Cookies retrieved', {
            hasCookies: true,
            cookieLength: cookies.length,
            cookies: cookies.substring(0, 100) + '...', // Show first 100 chars for security
          });
        } catch (error) {
          logger.error('Get cookies error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Failed to get cookies'
          );
        }
      }
    );

    // Migros: Clear Cookies
    server.tool(
      'migros.clearCookies',
      'Clear stored authentication cookies',
      ClearCookiesSchema.shape,
      async () => {
        try {
          await migrosClient.clearCookies();
          return createSuccessResult('Cookies cleared successfully');
        } catch (error) {
          logger.error('Clear cookies error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Failed to clear cookies'
          );
        }
      }
    );

    // Migros: Generate Reid
    server.tool(
      'migros.generateReid',
      'Generate a random referrer event ID for API tracking',
      GenerateReidSchema.shape,
      async () => {
        try {
          const reid = migrosClient.generateReid();
          return createSuccessResult('Generated new reid', { reid });
        } catch (error) {
          logger.error('Generate reid error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Failed to generate reid'
          );
        }
      }
    );

    // Migros: Adjust Basket
    server.tool(
      'migros.adjustBasket',
      'Adjust quantities or remove items from the basket (requires cookies)',
      AdjustBasketSchema.shape,
      async (params: AdjustBasketParams) => {
        try {
          const hasCookies = await migrosClient.hasCookies();
          if (!hasCookies) {
            return createErrorResult(
              'No cookies available. Please set cookies first using migros.setCookies'
            );
          }

          const result = await migrosClient.adjustBasket(
            params.items,
            params.reid
          );

          if (!result.successful) {
            return createErrorResult(
              'error' in result
                ? result.error || 'Adjust basket failed'
                : 'Adjust basket failed'
            );
          }

          return createSuccessResult('Basket updated successfully', {
            totalPrice: result.data.cartInfo.totalPrice,
            itemCount: result.data.cartInfo.itemInfos.length,
          });
        } catch (error) {
          logger.error('Adjust basket error', { error });
          return createErrorResult(
            error instanceof Error
              ? error.message
              : 'Unknown adjust basket error'
          );
        }
      }
    );

    // Migros: Get Basket
    server.tool(
      'migros.getBasket',
      'Get the current contents of the basket (requires cookies)',
      GetBasketSchema.shape,
      async () => {
        try {
          const hasCookies = await migrosClient.hasCookies();
          if (!hasCookies) {
            return createErrorResult(
              'No cookies available. Please set cookies first using migros.setCookies'
            );
          }

          const result = await migrosClient.getBasket();

          if (!result.successful) {
            return createErrorResult(
              'error' in result
                ? result.error || 'Get basket failed'
                : 'Get basket failed'
            );
          }

          const items = result.data.cartInfo.itemInfos.map((itemInfo: any) => ({
            productId: itemInfo.item.productId,
            storeId: itemInfo.item.storeId,
            productName: itemInfo.product.name,
            quantity: itemInfo.item.amount,
            unit: itemInfo.item.unit,
            price: itemInfo.totalPrice,
          }));

          return createSuccessResult('Successfully retrieved basket contents', {
            totalPrice: result.data.cartInfo.totalPrice,
            itemCount: result.data.cartInfo.itemInfos.length,
            items: items,
          });
        } catch (error) {
          logger.error('Get basket error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Unknown get basket error'
          );
        }
      }
    );

    // Migros: Get User
    server.tool(
      'migros.getUser',
      'Get user information (requires cookies to be set first)',
      GetUserSchema.shape,
      async () => {
        try {
          const hasCookies = await migrosClient.hasCookies();
          if (!hasCookies) {
            return createErrorResult(
              'No cookies available. Please set cookies first using migros.setCookies'
            );
          }

          const result = await migrosClient.getUser();

          if (!result.successful || !('user' in result)) {
            return createErrorResult(
              'error' in result
                ? result.error || 'Get user failed'
                : 'Get user failed'
            );
          }

          const user = result.user;
          return createSuccessResult(
            `Successfully retrieved user: ${user.firstName} ${user.lastName}`,
            {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phoneNumber: user.phoneNumber,
              loyaltyCard: user.loyaltyCard,
            }
          );
        } catch (error) {
          logger.error('Get user error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Unknown get user error'
          );
        }
      }
    );

    // Migros: Get Current Location
    server.tool(
      'migros.getCurrentLocation',
      'Get the current selected delivery location and address (requires cookies)',
      GetCurrentLocationSchema.shape,
      async () => {
        try {
          const hasCookies = await migrosClient.hasCookies();
          if (!hasCookies) {
            return createErrorResult(
              'No cookies available. Please set cookies first using migros.setCookies'
            );
          }

          const result = await migrosClient.getCurrentLocation();

          // Type guard to check for the error response structure
          if ('successful' in result && !result.successful) {
            return createErrorResult(
              result.error || 'Get current location failed'
            );
          }

          const locationData = result as MigrosCurrentLocationResponse;

          // If the guard fails, 'result' is known to be MigrosCurrentLocationResponse
          return createSuccessResult(
            `Successfully retrieved current location`,
            {
              addressName: locationData.selectedDeliveryAddressInfo.addressName,
              fullAddress: locationData.selectedDeliveryAddressInfo.fullAddress,
              area: locationData.fullServiceAreaObjectName,
              storeId: locationData.selectedDeliveryAddressInfo.storeId,
            }
          );
        } catch (error) {
          logger.error('Get current location error', { error });
          return createErrorResult(
            error instanceof Error
              ? error.message
              : 'Unknown get current location error'
          );
        }
      }
    );

    // Migros: Get Categories
    server.tool(
      'migros.getCategories',
      'Get all available product categories in hierarchical structure',
      GetCategoriesSchema.shape,
      async () => {
        try {
          const result = await migrosClient.getCategories();

          if (!result.successful) {
            return createErrorResult(
              'error' in result
                ? result.error || 'Categories fetch failed'
                : 'Categories fetch failed'
            );
          }

          const categories = result.data.map((categoryNode) => {
            const categoryData = categoryNode.data;
            const childrenData = categoryNode.children || [];

            return {
              id: categoryData.id,
              name: categoryData.name,
              prettyName: categoryData.prettyName,
              depth: categoryData.depth,
              parentId: categoryData.parentId,
              topLevel: categoryData.topLevel,
              specialCategory: categoryData.specialCategory,
              hasChildren: childrenData.length > 0,
              childrenCount: childrenData.length,
              children: childrenData.slice(0, 5).map((child) => ({
                id: child.data.id,
                name: child.data.name,
                prettyName: child.data.prettyName,
              })),
            };
          });

          return createSuccessResult(
            `Found ${categories.length} top-level categories`,
            {
              totalCategories: categories.length,
              categories: categories.slice(0, 20),
            }
          );
        } catch (error) {
          logger.error('Get categories error', { error });
          return createErrorResult(
            error instanceof Error ? error.message : 'Unknown categories error'
          );
        }
      }
    );

    // Migros: Search by Category
    server.tool(
      'migros.searchByCategory',
      'Search products within a specific category with pagination support',
      SearchByCategorySchema.shape,
      async (params: SearchByCategoryParams) => {
        try {
          const result = await migrosClient.searchByCategory(params);

          if (!result.successful) {
            return createErrorResult(
              'error' in result
                ? result.error || 'Category search failed'
                : 'Category search failed'
            );
          }

          const searchData = result.data;

          const products = searchData.storeProductInfos.map((product) => ({
            id: product.id,
            name: product.name,
            brand: product.brand.name,
            price: product.shownPrice,
            unit: product.unit,
            maxAmount: product.maxAmount,
            storeId: product.storeId,
            sku: product.sku,
            image: product.images[0]?.urls?.PRODUCT_LIST,
            unitPrice: product.unitPrice,
            discountRate: product.discountRate,
          }));

          return createSuccessResult(
            `Found ${searchData.hitCount} products in category`,
            {
              pagination: {
                currentPage: params.sayfa || 1,
                totalPages: searchData.pageCount,
                totalItems: searchData.hitCount,
              },
              hitCount: searchData.hitCount,
              products: products.slice(0, 10), // Limit to first 10 for readability
              totalProducts: products.length,
              searchParams: {
                categoryId: params.categoryId,
                page: params.sayfa || 1,
                sort: params.sirala,
              },
            }
          );
        } catch (error) {
          logger.error('Search by category error', { error });
          return createErrorResult(
            error instanceof Error
              ? error.message
              : 'Unknown category search error'
          );
        }
      }
    );
  },
  {
    capabilities: {},
  },
  {
    basePath: '/',
    maxDuration: 10 * 60,
    verboseLogs: true,
  }
);

// Mount MCP handler
app.all('/mcp/*', async (c) => {
  return await handler(c.req.raw);
});

// Health check endpoint
app.get('/health', async (c) => {
  try {
    const uptime = process.uptime();

    const healthData = {
      status: 'healthy',
      service: 'Migros Hemen MCP Server',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(uptime),
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
      },
      node: {
        version: process.version,
        platform: process.platform,
      },
    };

    return c.json(healthData);
  } catch (error) {
    logger.error('Health check failed', { error });
    return c.json(
      {
        status: 'unhealthy',
        service: 'Migros Hemen MCP Server',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 503 }
    );
  }
});

// Welcome route
app.get('/', (c) => {
  return c.json({
    message: 'Migros Hemen MCP Server',
    version: '1.0.0',
    endpoints: {
      mcp: '/mcp',
      health: '/health',
      description: 'MCP server for Migros Hemen marketplace integration',
    },
    tools: [
      'test',
      'migros.searchProducts',
      'migros.addToBasket',
      'migros.setCookies',
      'migros.getCookies',
      'migros.clearCookies',
      'migros.generateReid',
      'migros.adjustBasket',
      'migros.getBasket',
      'migros.getUser',
      'migros.getCategories',
      'migros.searchByCategory',
    ],
  });
});

export default app;
