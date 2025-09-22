import { createModuleLogger } from '../utils/logger';
import type { LocalSessionManager } from './LocalSessionManager';
import type {
  MigrosSearchResponse,
  MigrosAddToBasketRequest,
  MigrosAddToBasketResponse,
  MigrosApiError,
  MigrosBasketItem,
  MigrosCategoriesResponse,
  MigrosCategorySearchResponse,
  MigrosCategorySearchParams,
  MigrosUserResponse,
  MigrosAdjustBasketRequest,
  MigrosAdjustBasketResponse,
  MigrosGetBasketResponse,
  MigrosUserSuccessResponse,
  MigrosCurrentLocationResponse,
} from '../types/migros';

const migrosLogger = createModuleLogger('MigrosApiClient');

export class MigrosApiClient {
  private readonly baseUrl = 'https://www.migros.com.tr/rest/hemen';
  private readonly sessionManager: LocalSessionManager;
  private readonly defaultHeaders = {
    'sec-ch-ua-platform': '"macOS"',
    'Accept-Language': 'tr',
    'X-FORWARDED-REST': 'true',
    'sec-ch-ua':
      '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
    'sec-ch-ua-mobile': '?0',
    'X-Device-PWA': 'true',
    'X-PWA': 'true',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
  };

  constructor(sessionManager: LocalSessionManager) {
    this.sessionManager = sessionManager;
  }

  /**
   * Search for products (public API, no cookies needed)
   */
  async searchProducts(
    query: string,
    reid?: string
  ): Promise<MigrosSearchResponse | MigrosApiError> {
    try {
      migrosLogger.info('Searching products', { query });

      const searchParams = new URLSearchParams({
        q: query,
        ...(reid && { reid }),
      });

      const url = `${this.baseUrl}/search/screens/products?${searchParams}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...this.defaultHeaders,
          Referer: `https://www.migros.com.tr/hemen/arama?q=${encodeURIComponent(query)}`,
        },
      });

      if (!response.ok) {
        migrosLogger.error('Search request failed', {
          status: response.status,
          statusText: response.statusText,
        });
        return {
          successful: false,
          error: `Search failed: ${response.status} ${response.statusText}`,
        };
      }

      const data: MigrosSearchResponse = await response.json();
      migrosLogger.info('Search completed successfully', {
        hitCount: data.data?.searchInfo?.hitCount,
      });

      return data;
    } catch (error) {
      migrosLogger.error('Search error', {
        error: error instanceof Error ? error.message : error,
      });
      return {
        successful: false,
        error: error instanceof Error ? error.message : 'Unknown search error',
      };
    }
  }

  /**
   * Get user info (requires cookies)
   */
  async getUser(): Promise<MigrosUserSuccessResponse | MigrosApiError> {
    try {
      migrosLogger.info('Getting user info');

      const cookies = await this.getCookies();
      if (!cookies) {
        migrosLogger.warn('No cookies available for get user operation');
        return {
          successful: false,
          error:
            'No cookies available. Please set cookies first using migros.setCookies',
        };
      }

      const url = `https://www.migros.com.tr/rest/user-bff/hemen/users`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...this.defaultHeaders,
          Accept: 'application/json', // Override default Accept header
          Referer: `https://www.migros.com.tr/hemen/sepetim`,
          Cookie: cookies,
        },
      });

      const responseText = await response.text();
      migrosLogger.debug('Get user raw response', {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
      });

      if (!response.ok) {
        migrosLogger.error('Get user request failed', {
          status: response.status,
          statusText: response.statusText,
        });
        return {
          successful: false,
          error: `Get user failed: ${response.status} ${response.statusText}`,
        };
      }

      const data: MigrosUserResponse = JSON.parse(responseText);

      migrosLogger.info('Get user completed successfully', {
        name: data.user.firstName,
      });

      return { successful: true, ...data };
    } catch (error) {
      migrosLogger.error('Get user error', {
        error: error instanceof Error ? error.message : error,
      });
      return {
        successful: false,
        error: error instanceof Error ? error.message : 'Unknown get user error',
      };
    }
  }

  /**
   * Adjust item quantities in basket (requires cookies)
   */
  async adjustBasket(
    items: MigrosAdjustBasketRequest['items'],
    reid?: string
  ): Promise<MigrosAdjustBasketResponse | MigrosApiError> {
    try {
      migrosLogger.info('Adjusting basket items', { itemCount: items.length });

      const cookies = await this.getCookies();
      if (!cookies) {
        return {
          successful: false,
          error: 'No cookies available. Please set cookies first using migros.setCookies',
        };
      }

      const searchParams = new URLSearchParams(reid ? { reid } : {});
      const url = `${this.baseUrl}/carts/screens/items/replace?${searchParams}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          ...this.defaultHeaders,
          'Content-Type': 'application/json',
          Origin: 'https://www.migros.com.tr',
          Referer: 'https://www.migros.com.tr/hemen/sepetim',
          Cookie: cookies,
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        migrosLogger.error('Adjust basket request failed', {
          status: response.status,
          statusText: response.statusText,
        });
        return {
          successful: false,
          error: `Adjust basket failed: ${response.status} ${response.statusText}`,
        };
      }

      const data: MigrosAdjustBasketResponse = await response.json();
      migrosLogger.info('Basket adjusted successfully');

      return data;
    } catch (error) {
      migrosLogger.error('Adjust basket error', {
        error: error instanceof Error ? error.message : error,
      });
      return {
        successful: false,
        error: error instanceof Error ? error.message : 'Unknown adjust basket error',
      };
    }
  }

  /**
   * Get basket info (requires cookies)
   */
  async getBasket(reid?: string): Promise<MigrosGetBasketResponse | MigrosApiError> {
    try {
      migrosLogger.info('Getting basket info');

      const cookies = await this.getCookies();
      if (!cookies) {
        return {
          successful: false,
          error: 'No cookies available. Please set cookies first using migros.setCookies',
        };
      }

      const searchParams = new URLSearchParams(reid ? { reid } : {});
      const url = `${this.baseUrl}/carts/screens/V2?${searchParams}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...this.defaultHeaders,
          Referer: 'https://www.migros.com.tr/hemen/sepetim',
          Cookie: cookies,
        },
      });

      if (!response.ok) {
        migrosLogger.error('Get basket request failed', {
          status: response.status,
          statusText: response.statusText,
        });
        return {
          successful: false,
          error: `Get basket failed: ${response.status} ${response.statusText}`,
        };
      }

      const data: MigrosGetBasketResponse = await response.json();
      migrosLogger.info('Get basket completed successfully');

      return data;
    } catch (error) {
      migrosLogger.error('Get basket error', {
        error: error instanceof Error ? error.message : error,
      });
      return {
        successful: false,
        error: error instanceof Error ? error.message : 'Unknown get basket error',
      };
    }
  }

  /**
   * Get current location info (requires cookies)
   */
  async getCurrentLocation(): Promise<MigrosCurrentLocationResponse | MigrosApiError> {
    try {
      migrosLogger.info('Getting current location info');

      const cookies = await this.getCookies();
      if (!cookies) {
        return {
          successful: false,
          error: 'No cookies available. Please set cookies first using migros.setCookies',
        };
      }

      const url = `https://www.migros.com.tr/rest/delivery-bff/hemen/locations/info/current`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...this.defaultHeaders,
          Accept: 'application/json',
          Referer: 'https://www.migros.com.tr/hemen/sepetim',
          Cookie: cookies,
        },
      });

      const responseText = await response.text();
      migrosLogger.debug('Get current location raw response', {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
      });

      if (!response.ok) {
        return {
          successful: false,
          error: `Get current location failed: ${response.status} ${response.statusText}`,
        };
      }

      // This endpoint returns the data directly, without a 'successful' wrapper
      const data: MigrosCurrentLocationResponse = JSON.parse(responseText);
      migrosLogger.info('Get current location completed successfully');

      return data;
    } catch (error) {
      migrosLogger.error('Get current location error', {
        error: error instanceof Error ? error.message : error,
      });
      return {
        successful: false,
        error:
          error instanceof Error
            ? error.message
            : 'Unknown get current location error',
      };
    }
  }

  /**
   * Add items to basket (requires cookies)
   */
  async addToBasket(
    items: MigrosBasketItem[],
    productPrettyName?: string,
    reid?: string,
    options: {
      applyCrmDiscounts?: boolean;
      applySpecialDiscounts?: boolean;
      applyDeepDiscounts?: boolean;
      includeDeliveryFee?: boolean;
      applyFoodProductDiscounts?: boolean;
    } = {}
  ): Promise<MigrosAddToBasketResponse | MigrosApiError> {
    try {
      migrosLogger.info('Adding items to basket', { itemCount: items.length });

      const cookies = await this.getCookies();
      if (!cookies) {
        migrosLogger.warn('No cookies available for basket operation');
        return {
          successful: false,
          error:
            'No cookies available. Please set cookies first using migros.setCookies',
        };
      }

      const searchParams = new URLSearchParams(reid ? { reid } : {});
      const url = `${this.baseUrl}/carts/items${searchParams.toString() ? '?' + searchParams : ''}`;

      const requestBody: MigrosAddToBasketRequest = {
        items,
        applyCrmDiscounts: options.applyCrmDiscounts ?? false,
        applySpecialDiscounts: options.applySpecialDiscounts ?? false,
        applyDeepDiscounts: options.applyDeepDiscounts ?? false,
        includeDeliveryFee: options.includeDeliveryFee ?? false,
        applyFoodProductDiscounts: options.applyFoodProductDiscounts ?? false,
      };

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          ...this.defaultHeaders,
          'Content-Type': 'application/json',
          Origin: 'https://www.migros.com.tr',
          Referer: productPrettyName
            ? `https://www.migros.com.tr/hemen/arama?q=${encodeURIComponent(productPrettyName)}`
            : 'https://www.migros.com.tr/hemen/arama',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          Cookie: cookies,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        migrosLogger.error('Add to basket request failed', {
          status: response.status,
          statusText: response.statusText,
          body: errorBody,
        });
        return {
          successful: false,
          error: `Add to basket failed: ${response.status} ${response.statusText}. Response: ${errorBody}`,
        };
      }

      const data: MigrosAddToBasketResponse = await response.json();

      // Validate that the requested items were actually added
      const requestedProductIds = new Set(items.map((item) => item.productId));
      const actuallyAddedItems = data.data.itemInfos.filter((itemInfo) =>
        requestedProductIds.has(itemInfo.item.productId)
      );

      if (actuallyAddedItems.length === 0 && items.length > 0) {
        migrosLogger.warn('Add to basket API call succeeded but no items were added.', {
          responseBody: data,
        });
        return {
          successful: false,
          error:
            'The API indicated success, but the requested items were not found in the basket response.',
        };
      }

      migrosLogger.info('Items added to basket successfully', {
        totalPrice: data.data?.totalPrice,
        itemCount: data.data?.itemInfos?.length,
      });

      return data;
    } catch (error) {
      migrosLogger.error('Add to basket error', {
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined,
      });
      return {
        successful: false,
        error:
          error instanceof Error
            ? error.message
            : 'Unknown add to basket error',
      };
    }
  }

  /**
   * Set cookies for authenticated requests
   */
  async setCookies(cookies: string): Promise<void> {
    try {
      migrosLogger.info('Setting Migros cookies');
      // Store cookies as a string in an array format that LocalSessionManager expects
      await this.sessionManager.saveCookies([cookies]);
      migrosLogger.info('Cookies saved successfully');
    } catch (error) {
      migrosLogger.error('Failed to save cookies', {
        error: error instanceof Error ? error.message : error,
      });
      throw error;
    }
  }

  /**
   * Get stored cookies
   */
  async getCookies(): Promise<string | null> {
    try {
      const cookiesArray = await this.sessionManager.getCookies();
      // Return the first cookie string from the array, or null if empty
      return cookiesArray && cookiesArray.length > 0 ? cookiesArray[0] : null;
    } catch (error) {
      migrosLogger.error('Failed to get cookies', {
        error: error instanceof Error ? error.message : error,
      });
      return null;
    }
  }

  /**
   * Clear stored cookies
   */
  async clearCookies(): Promise<void> {
    try {
      migrosLogger.info('Clearing Migros cookies');
      await this.sessionManager.clearCookies();
      migrosLogger.info('Cookies cleared successfully');
    } catch (error) {
      migrosLogger.error('Failed to clear cookies', {
        error: error instanceof Error ? error.message : error,
      });
      throw error;
    }
  }

  /**
   * Check if cookies are available
   */
  async hasCookies(): Promise<boolean> {
    const cookies = await this.getCookies();
    return cookies !== null && cookies.length > 0;
  }

  /**
   * Generate a random reid (referrer event id) for API calls
   */
  generateReid(): string {
    return (
      Date.now().toString() +
      Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, '0')
    );
  }

  /**
   * Get all categories (public API, no cookies needed)
   */
  async getCategories(): Promise<MigrosCategoriesResponse | MigrosApiError> {
    try {
      migrosLogger.info('Fetching categories');

      const url = `${this.baseUrl}/categories`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...this.defaultHeaders,
          Referer: 'https://www.migros.com.tr/hemen',
        },
      });

      if (!response.ok) {
        migrosLogger.error('Categories request failed', {
          status: response.status,
          statusText: response.statusText,
        });
        return {
          successful: false,
          error: `Categories request failed: ${response.status} ${response.statusText}`,
        };
      }

      const data: MigrosCategoriesResponse = await response.json();
      migrosLogger.info('Categories fetched successfully', {
        categoryCount: data.data?.length,
      });

      return data;
    } catch (error) {
      migrosLogger.error('Categories error', {
        error: error instanceof Error ? error.message : error,
      });
      return {
        successful: false,
        error:
          error instanceof Error ? error.message : 'Unknown categories error',
      };
    }
  }

  /**
   * Search products by category with pagination (public API, no cookies needed)
   */
  async searchByCategory(
    params: MigrosCategorySearchParams
  ): Promise<MigrosCategorySearchResponse | MigrosApiError> {
    try {
      migrosLogger.info('Searching products by category', {
        categoryId: params.categoryId,
        page: params.sayfa,
      });

      const searchParams = new URLSearchParams({
        'category-id': params.categoryId.toString(),
        ...(params.sayfa && { sayfa: params.sayfa.toString() }),
        ...(params.sirala && { sirala: params.sirala }),
        ...(params.reid && { reid: params.reid }),
      });

      const url = `${this.baseUrl}/products/search?${searchParams}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...this.defaultHeaders,
          Referer: `https://www.migros.com.tr/hemen/kategori/${params.prettyName}`,
        },
      });

      if (!response.ok) {
        migrosLogger.error('Category search request failed', {
          status: response.status,
          statusText: response.statusText,
        });
        return {
          successful: false,
          error: `Category search failed: ${response.status} ${response.statusText}`,
        };
      }

      const data: MigrosCategorySearchResponse = await response.json();
      migrosLogger.info('Category search completed successfully', {
        categoryId: params.categoryId,
        hitCount: data.data?.hitCount,
        currentPage: params.sayfa,
      });

      return data;
    } catch (error) {
      migrosLogger.error('Category search error', {
        error: error instanceof Error ? error.message : error,
      });
      return {
        successful: false,
        error:
          error instanceof Error
            ? error.message
            : 'Unknown category search error',
      };
    }
  }
}
