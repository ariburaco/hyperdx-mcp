import { z } from 'zod';

// Search Products Schema
export const SearchProductsSchema = z.object({
  query: z
    .string()
    .min(1, 'Search query is required')
    .describe('Product search query (e.g., "yumurta", "süt")'),
  reid: z
    .string()
    .optional()
    .describe('Optional referrer event ID for tracking'),
});

export type SearchProductsParams = z.infer<typeof SearchProductsSchema>;

// Basket Item Schema
export const BasketItemSchema = z.object({
  productId: z.number().describe('Product ID from search results'),
  storeId: z.number().describe('Store ID from search results'),
  unit: z.string().default('PIECE').describe('Unit type (e.g., "PIECE", "KG")'),
  amount: z.number().min(1).describe('Quantity to add to basket'),
});

// Add to Basket Schema
export const AddToBasketSchema = z.object({
  items: z
    .array(z.object(BasketItemSchema.shape))
    .nonempty('At least one item must be provided'),
  productPrettyName: z.string().optional(),
  reid: z.string().optional(),
  applyCrmDiscounts: z.boolean().optional(),
  applySpecialDiscounts: z.boolean().optional(),
  applyDeepDiscounts: z
    .boolean()
    .default(false)
    .describe('Apply any available deep discounts to the basket'),
  includeDeliveryFee: z
    .boolean()
    .default(false)
    .describe('Factor in the delivery fee in the final price calculation of the response'),
  applyFoodProductDiscounts: z
    .boolean()
    .default(false)
    .describe('Apply any available discounts specific to food products'),
});

export type AddToBasketParams = z.infer<typeof AddToBasketSchema>;

// Set Cookies Schema
export const SetCookiesSchema = z.object({
  cookies: z
    .string()
    .min(1, 'Cookies string is required')
    .describe(
      'Complete cookie string from browser (e.g., "__cf_bm=...; _cfuvid=...; SESSION=...")'
    ),
});

export type SetCookiesParams = z.infer<typeof SetCookiesSchema>;

// Get Cookies Schema (no parameters needed)
export const GetCookiesSchema = z.object({});

export type GetCookiesParams = z.infer<typeof GetCookiesSchema>;

// Clear Cookies Schema (no parameters needed)
export const ClearCookiesSchema = z.object({});

export type ClearCookiesParams = z.infer<typeof ClearCookiesSchema>;

// Generate Reid Schema (no parameters needed)
export const GenerateReidSchema = z.object({});

export type GenerateReidParams = z.infer<typeof GenerateReidSchema>;

// Get User Schema (no parameters needed)
export const GetUserSchema = z.object({});

export type GetUserParams = z.infer<typeof GetUserSchema>;

// Adjust Basket Item Schema
export const AdjustBasketItemSchema = z.object({
  productId: z.number().describe('Product ID from basket'),
  storeId: z.number().describe('Store ID from basket'),
  unit: z.string().describe('Unit type (e.g., "PIECE", "GRAM")'),
  quantity: z.number().min(0).describe('New quantity for the item (0 to remove)'),
});

// Adjust Basket Schema
export const AdjustBasketSchema = z.object({
  items: z
    .array(AdjustBasketItemSchema)
    .min(1, 'At least one item is required')
    .describe('Array of items to adjust in the basket'),
  reid: z
    .string()
    .optional()
    .describe('Optional referrer event ID for tracking'),
});

export type AdjustBasketParams = z.infer<typeof AdjustBasketSchema>;

// Get Basket Schema (no parameters needed)
export const GetBasketSchema = z.object({});

export type GetBasketParams = z.infer<typeof GetBasketSchema>;

// Get Current Location Schema (no parameters needed)
export const GetCurrentLocationSchema = z.object({});

export type GetCurrentLocationParams = z.infer<typeof GetCurrentLocationSchema>;

// Get Categories Schema (no parameters needed)
export const GetCategoriesSchema = z.object({});

export type GetCategoriesParams = z.infer<typeof GetCategoriesSchema>;

// Search by Category Schema
export const SearchByCategorySchema = z.object({
  categoryId: z
    .number()
    .positive()
    .describe('Category ID to search products in'),
  prettyName: z
    .string()
    .min(1)
    .describe('URL-friendly category name (e.g., "hazir-yemek-meze-c-11266")'),
  sayfa: z
    .number()
    .min(1)
    .default(1)
    .describe('Page number for pagination (default: 1)'),
  sirala: z
    .string()
    .optional()
    .describe('Sort order (e.g., "price_asc", "price_desc", "popularity")'),
  reid: z
    .string()
    .optional()
    .describe('Optional referrer event ID for tracking'),
});

export type SearchByCategoryParams = z.infer<typeof SearchByCategorySchema>;
