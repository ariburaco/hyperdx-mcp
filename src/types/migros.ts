// This file contains type definitions for the Migros Hemen API responses.
// Some complex objects are still typed as 'any' and can be further defined.

// Common API Error Type
export interface MigrosApiError {
  successful: false;
  error?: string;
  message?: string;
}

// Product-related Types
export interface MigrosProductImage {
  order: number;
  urls: {
    PRODUCT_LIST: string;
    [key: string]: string;
  };
}

export interface MigrosProductBrand {
  id: number;
  name: string;
  prettyName: string;
}

export interface MigrosStoreProductInfo {
  id: number;
  name: string;
  prettyName: string;
  brand: MigrosProductBrand;
  shownPrice: number;
  unit: string;
  maxAmount: number;
  storeId: number;
  sku: string;
  images: MigrosProductImage[];
  unitPrice: number;
  discountRate: number;
  isAvailable: boolean;
}

export interface MigrosSearchInfo {
  hitCount: number;
  pageCount: number;
  storeProductInfos: MigrosStoreProductInfo[];
}

// Search API Types
export interface MigrosSearchResponse {
  successful: true;
  data: {
    searchInfo: MigrosSearchInfo;
    pageInfo: any; // Define more strictly if needed
  };
}

// Add to Basket API Types
export interface MigrosBasketItem {
  productId: number;
  amount: number;
  unit: string;
  storeId: number;
}

export interface MigrosAddToBasketRequest {
  items: MigrosBasketItem[];
  applyCrmDiscounts?: boolean;
  applySpecialDiscounts?: boolean;
  applyDeepDiscounts?: boolean;
  includeDeliveryFee?: boolean;
  applyFoodProductDiscounts?: boolean;
}

export interface MigrosCartItemInfo {
  item: MigrosBasketItem;
  product: MigrosStoreProductInfo;
  shownAmount: number;
  singleShownPrice: number;
  totalPrice: number;
  [key: string]: any; // Other properties omitted for brevity
}

export interface MigrosCartInfo {
  totalPrice: number;
  totalProductPrice: number;
  revenue: number;
  priceLeftForCheckout: number;
  minimumRequiredRevenue: number;
  itemInfos: MigrosCartItemInfo[];
  [key: string]: any; // Other properties omitted for brevity
}

export interface MigrosAddToBasketResponse {
  successful: true;
  data: MigrosCartInfo;
}

// Categories API Types
export interface MigrosCategoryData {
  id: number;
  name: string;
  prettyName: string;
  depth: number;
  parentId: number;
  topLevel: boolean;
  specialCategory: boolean;
  iconUrl?: string;
  images: MigrosProductImage[];
}

export interface MigrosCategoryNode {
  data: MigrosCategoryData;
  children: MigrosCategoryNode[];
}

export interface MigrosCategoriesResponse {
  successful: boolean;
  data: MigrosCategoryNode[];
  violations?: any[];
}

export interface MigrosCategorySearchParams {
  categoryId: number;
  prettyName: string;
  sayfa?: number;
  sirala?: string;
  reid?: string;
}

export interface MigrosCategorySearchResponse {
  successful: boolean;
  data: MigrosSearchInfo;
}

// User API Types
export interface MigrosUser {
  masterId: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  crmId: number;
  loyaltyCard: string;
  anonymous: boolean;
  id: number;
}

export interface MigrosStateInfo {
  cartMode: string;
  showEmailVerificationReminder: boolean;
  showLocationPermissionRequest: boolean;
  showAgreementAcceptReminder: boolean;
}

export interface MigrosAgreementInfo {
  membershipAgreementEnforcementAction: string;
  privacyAgreementEnforcementAction: string;
  token: string;
}

export interface MigrosUserResponse {
  user: MigrosUser;
  stateInfo: MigrosStateInfo;
  agreementInfo: MigrosAgreementInfo;
}

export interface MigrosUserSuccessResponse extends MigrosUserResponse {
  successful: true;
}

// Adjust Basket API Types
export interface MigrosAdjustBasketItem {
  productId: number;
  quantity: number;
  unit: string;
  storeId: number;
}

export interface MigrosAdjustBasketRequest {
  items: MigrosAdjustBasketItem[];
}

export interface MigrosAdjustBasketResponse {
  successful: boolean;
  data: {
    cartInfo: MigrosCartInfo;
    remainingRevenueRecommendations: any[];
    cartCampaignSuggestions: any[];
  };
}

// Get Basket API Types
export interface MigrosGetBasketResponse {
  successful: boolean;
  data: {
    cartInfo: MigrosCartInfo;
  };
}

// Get Current Location API Types
export interface MigrosSelectedDeliveryAddressInfo {
  id: number;
  addressName: string;
  latitude: number;
  longitude: number;
  fullAddress: string;
  storeId: number;
  storeDeliveryModel: string;
  minimumCartAmount: number;
  deliveryFee: number;
  deliveryFeeTiersRange: string;
}

export interface MigrosCurrentLocationResponse {
  serviceAreaObjectType: string;
  serviceAreaObjectId: number;
  fullServiceAreaObjectName: string;
  storeDeliveryModel: string;
  addressId: number;
  selectedDeliveryAddressInfo: MigrosSelectedDeliveryAddressInfo;
}
