import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Built-in java.math.BigDecimal */
  BigDecimal: any;
  /** Built-in scalar representing an instant in time */
  Instant: any;
  /** Built-in scalar representing a local date */
  LocalDate: any;
  /** Long type */
  Long: any;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
  /** UUID String */
  UUID: any;
};



export type AddonEntity = {
  __typename?: 'AddonEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Addon's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Addon's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Addon's title */
  title?: Maybe<Scalars['String']>;
  /** Addon's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AddonSetDestinationRequirementEntity = {
  __typename?: 'AddonSetDestinationRequirementEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Addon rule's temperature */
  temp?: Maybe<Scalars['Int']>;
  /** Addon rule's comparison */
  comparison?: Maybe<Comparison>;
  /** Addon rule's addon set */
  addonSet?: Maybe<AddonSetEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AddonSetEntity = {
  __typename?: 'AddonSetEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Addon set's addons */
  addons?: Maybe<Array<Maybe<AddonEntity>>>;
  /** Addon set's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Addon set's priority */
  priority?: Maybe<Scalars['Long']>;
  /** Addon set's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AddonSetSourceRequirementEntity = {
  __typename?: 'AddonSetSourceRequirementEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Addon rule's temperature */
  temp?: Maybe<Scalars['Int']>;
  /** Addon rule's comparison */
  comparison?: Maybe<Comparison>;
  /** Addon rule's addon set */
  addonSet?: Maybe<AddonSetEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  /** Address' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Address' last name */
  lastName?: Maybe<Scalars['String']>;
  /** Address' city name */
  city?: Maybe<Scalars['String']>;
  /** Address' Magento Id */
  magentoId?: Maybe<Scalars['Long']>;
  /** Address' latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Address' postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Address' validation source */
  addressValidationSource?: Maybe<AddressValidationSource>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Address' first name */
  firstName?: Maybe<Scalars['String']>;
  /** Address' residential status */
  residential?: Maybe<Scalars['Boolean']>;
  /** Address' company */
  company?: Maybe<Scalars['String']>;
  /** Address' state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Address' last line */
  line2?: Maybe<Scalars['String']>;
  /** Address' first line */
  line1?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Address' longitude */
  longitude?: Maybe<Scalars['Float']>;
};

export enum AddressValidationSource {
  Unverified = 'Unverified',
  FedEx = 'FedEx',
  Ups = 'UPS',
  SmartyStreets = 'SmartyStreets'
}

export type AmazonProfileEntity = {
  __typename?: 'AmazonProfileEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Amazon profile's ASIN */
  asin?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Amazon profile's Seller SKU */
  sellerSku?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AmazonSalesOrderEntity = {
  __typename?: 'AmazonSalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Sales order's shipments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Amazon created at */
  amazonCreatedAt?: Maybe<Scalars['Instant']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Amazon updated at */
  amazonUpdatedAt?: Maybe<Scalars['Instant']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type AnimalEntity = {
  __typename?: 'AnimalEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Animal's parent */
  parent?: Maybe<AnimalEntity>;
  /** Animal's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Animal's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Animal's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Animal's children */
  children?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Animal's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Animal's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};


export type BinEntity = {
  __typename?: 'BinEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Bin's human-readable ID */
  binId?: Maybe<Scalars['String']>;
  /** Bin's zone membership */
  zone?: Maybe<ZoneEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Brand's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Brand's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Brand's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
};

export enum Carrier {
  Generic = 'GENERIC',
  Dhl = 'DHL',
  Fedex = 'FEDEX',
  Ups = 'UPS',
  Usps = 'USPS'
}

export type CartEntity = {
  __typename?: 'CartEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cart's item groups */
  cartItemGroups?: Maybe<Array<Maybe<CartItemGroupEntity>>>;
  /** Cart's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Cart's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Cart's item count */
  cartItemsCount?: Maybe<Scalars['Long']>;
  /** Cart's phone */
  phone?: Maybe<Scalars['String']>;
  /** Cart's subtotal */
  subtotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Cart's batch item count */
  cartBatchItemsCount?: Maybe<Scalars['Long']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Cart's items */
  cartItems?: Maybe<Array<Maybe<CartItemEntity>>>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
};

export type CartItemEntity = {
  __typename?: 'CartItemEntity';
  /** Cart item's overridden shipping needs type */
  overriddenShippingNeedsType?: Maybe<ShippingNeedsType>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Cart item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item's group */
  cartItemGroup?: Maybe<CartItemGroupEntity>;
  /** Cart item's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Cart item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CartItemGroupEntity = {
  __typename?: 'CartItemGroupEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Cart item group's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item group's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's kit product */
  kitProduct?: Maybe<KitProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  /** Category's parent */
  parent?: Maybe<CategoryEntity>;
  /** Category's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Category's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Category's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Category's published revision */
  publishedRevision?: Maybe<CategoryRevisionEntity>;
  /** Category's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Category's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Category's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Category's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Category's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Category's children */
  children?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Category's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Category's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Category's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CategoryResults = {
  __typename?: 'CategoryResults';
  /** Result's category */
  category?: Maybe<CategoryEntity>;
  /** Result's products */
  products?: Maybe<GraphQlPage_ProductEntity>;
};

export type CategoryRevisionEntity = {
  __typename?: 'CategoryRevisionEntity';
  /** Category revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type ClientTokenDetail = {
  __typename?: 'ClientTokenDetail';
  /** Client token */
  clientToken?: Maybe<Scalars['String']>;
};

export enum Comparison {
  LessThan = 'LESS_THAN',
  GreaterThan = 'GREATER_THAN'
}

export type Dashboard = {
  __typename?: 'Dashboard';
  /** Dashboard's on-hold count */
  onHoldCount?: Maybe<Scalars['Int']>;
  /** Dashboard's pending count */
  pendingCount?: Maybe<Scalars['Int']>;
  /** Dashboard's timezone */
  timezone?: Maybe<Scalars['String']>;
  /** Dashboard's next open date */
  nextOpenDate?: Maybe<Scalars['String']>;
  /** Dashboard's today */
  today?: Maybe<Scalars['String']>;
  /** Dashboard's stats, this week */
  thisWeek?: Maybe<Stats>;
  /** Dashboard's late count */
  lateCount?: Maybe<Scalars['Int']>;
  /** Dashboard's warehouse */
  warehouse?: Maybe<Scalars['String']>;
  /** Dashboard's stats, last week */
  lastWeek?: Maybe<Stats>;
  /** Dashboard's needs scheduling count */
  needsSchedulingCount?: Maybe<Scalars['Int']>;
  /** Dashboard's summaries */
  summaries?: Maybe<Array<Maybe<Summary>>>;
};

export type DepartmentEntity = {
  __typename?: 'DepartmentEntity';
  /** Department's parent */
  parent?: Maybe<DepartmentEntity>;
  /** Department's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Department's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Department's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Department's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Department's children */
  children?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Department's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Department's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type DestinationRestrictionEntity = {
  __typename?: 'DestinationRestrictionEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Destination restriction's domestic only */
  domesticOnly?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Destination restriction's prohibited states */
  prohibitedStates?: Maybe<Array<Maybe<State>>>;
  /** Destination restriction's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum DomesticServiceType {
  SameDay = 'SameDay',
  OvernightEarly = 'OvernightEarly',
  OvernightMorning = 'OvernightMorning',
  OvernightEvening = 'OvernightEvening',
  TwoDay = 'TwoDay',
  ThreeDay = 'ThreeDay',
  Ground = 'Ground',
  PostOfficeLastMile = 'PostOfficeLastMile'
}

export type GraphQlLikeQueryFilterInput = {
  /** Field pattern. */
  pattern?: Maybe<Scalars['String']>;
  /** Abbreviation for 'pattern'. */
  p?: Maybe<Scalars['String']>;
};

export type GraphQlPage_BrandEntity = {
  __typename?: 'GraphQLPage_BrandEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<BrandEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_CategoryEntity = {
  __typename?: 'GraphQLPage_CategoryEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_DepartmentEntity = {
  __typename?: 'GraphQLPage_DepartmentEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ProductEntity = {
  __typename?: 'GraphQLPage_ProductEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SalesOrderEntity = {
  __typename?: 'GraphQLPage_SalesOrderEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SalesOrderEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ShipmentEntity = {
  __typename?: 'GraphQLPage_ShipmentEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SimpleProductEntity = {
  __typename?: 'GraphQLPage_SimpleProductEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SimpleProductEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SupplierEntity = {
  __typename?: 'GraphQLPage_SupplierEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SupplierEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_TradeShowEntity = {
  __typename?: 'GraphQLPage_TradeShowEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<TradeShowEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_UserEntity = {
  __typename?: 'GraphQLPage_UserEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<UserEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPageableInput = {
  /** Sort conditions for the current view. */
  sort?: Maybe<Array<Maybe<GraphQlSortInput>>>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The number of the page to display. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlSingleValueFilter_BooleanInput = {
  /** Field value. */
  value?: Maybe<Scalars['Boolean']>;
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Abbreviation for 'value'. */
  v?: Maybe<Scalars['Boolean']>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
};

export type GraphQlSingleValueFilter_ShipmentStatusInput = {
  /** Abbreviation for 'value'. */
  v?: Maybe<ShipmentStatus>;
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
  /** Field value. */
  value?: Maybe<ShipmentStatus>;
};

export type GraphQlSingleValueFilter_StringInput = {
  /** Abbreviation for 'value'. */
  v?: Maybe<Scalars['String']>;
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Field value. */
  value?: Maybe<Scalars['String']>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
};

export type GraphQlSortInput = {
  /** Abbreviation for 'field'. */
  f?: Maybe<Scalars['String']>;
  /** Abbreviation for 'direction'. */
  d?: Maybe<SortDirection>;
  /** Direction of sorting (default: asc). */
  direction?: Maybe<SortDirection>;
  /** Name of the field to sort by. */
  field?: Maybe<Scalars['String']>;
};


export type InventoryDetails = {
  __typename?: 'InventoryDetails';
  /** Result's warehouse quantity available */
  warehouseQuantityAvailable?: Maybe<Scalars['Long']>;
  /** Result's product */
  product?: Maybe<SimpleProductEntity>;
  /** Result's warehouse quantity on shelf */
  warehouseQuantityOnShelf?: Maybe<Scalars['Long']>;
  /** Result's warehouse weekly consumption rate */
  warehouseWeeklyConsumptionRate?: Maybe<Scalars['Float']>;
  /** Result's warehouse weekly consumption variance */
  warehouseWeeklyConsumptionVariance?: Maybe<Scalars['Float']>;
  /** Result's warehouse run out days, 97% confidence */
  warehouseRunOutDays97?: Maybe<Scalars['Float']>;
  /** Result's warehouse quantity unshipped */
  warehouseQuantityUnshipped?: Maybe<Scalars['Long']>;
  /** Result's warehouse run out days, 85% confidence */
  warehouseRunOutDays85?: Maybe<Scalars['Float']>;
};

export type InventoryQuantityCacheEntity = {
  __typename?: 'InventoryQuantityCacheEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Cache's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  /** Cache's quantity on shelf */
  quantityOnShelf?: Maybe<Scalars['Long']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cache's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Cache's timestamp */
  timestamp?: Maybe<Scalars['Instant']>;
};

export type InventoryResult = {
  __typename?: 'InventoryResult';
  /** Result's global total quantity */
  globalQuantityTotal?: Maybe<Scalars['Long']>;
  /** Result's product */
  product?: Maybe<SimpleProductEntity>;
  /** Result's global available quantity */
  globalQuantityAvailable?: Maybe<Scalars['Long']>;
  /** Result's global unshipped quantity */
  globalQuantityUnshipped?: Maybe<Scalars['Long']>;
};

export type InventoryStatsCacheEntity = {
  __typename?: 'InventoryStatsCacheEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Cache's weekly consumption variance */
  weeklyConsumptionVariance?: Maybe<Scalars['Float']>;
  /** Cache's weekly consumption rate */
  weeklyConsumptionRate?: Maybe<Scalars['Float']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cache's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Cache's timestamp */
  timestamp?: Maybe<Scalars['Instant']>;
};

export type KitItemEntity = {
  __typename?: 'KitItemEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Kit item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Kit item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type KitProductEntity = {
  __typename?: 'KitProductEntity';
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Kit's items */
  kitItems?: Maybe<Array<Maybe<KitItemEntity>>>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
};

export type LiveArrivalGuaranteeEntity = {
  __typename?: 'LiveArrivalGuaranteeEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Live arrival rule's max temp */
  maxTemp?: Maybe<Scalars['Int']>;
  /** Live arrival rule's transit time type */
  transitTimeType?: Maybe<TransitTimeType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Live arrival rule's min temp */
  minTemp?: Maybe<Scalars['Int']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum LiveArrivalGuaranteeState {
  NotApplicable = 'NotApplicable',
  NotGuaranteed = 'NotGuaranteed',
  UnableToDetermine = 'UnableToDetermine',
  Guaranteed = 'Guaranteed'
}



export type MagentoSalesOrderEntity = {
  __typename?: 'MagentoSalesOrderEntity';
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Magento order status */
  magentoStatus?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Magento shipping */
  magentoShipping?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Magento created at */
  magentoCreatedAt?: Maybe<Scalars['Instant']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Magento updated at */
  magentoUpdatedAt?: Maybe<Scalars['Instant']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  /** Media's sequence */
  sequence?: Maybe<Scalars['Int']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Media's product */
  product?: Maybe<ProductEntity>;
  /** Media's type */
  mediaType?: Maybe<MediaType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Media's url */
  url?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum MediaType {
  Image = 'Image',
  YouTubeVideo = 'YouTubeVideo',
  VimeoVideo = 'VimeoVideo',
  Panorama = 'Panorama'
}

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new tradeshow */
  tradeShowCreateShow?: Maybe<TradeShowEntity>;
  /** Sends the tradeshow report */
  tradeShowSendReport?: Maybe<Scalars['Boolean']>;
  /** Triggers a re-sync of products with Price2Spy */
  maintenancePrice2SpyUpdateProducts?: Maybe<Scalars['Boolean']>;
  /** Reroute a shipment */
  shipmentReroute?: Maybe<ShipmentEntity>;
  /** Completes checkout and processes payment. */
  cartCheckout?: Maybe<SalesOrderEntity>;
  /** Adds a printer to an existing workstation */
  autoprintAddPrinter?: Maybe<PrinterEntity>;
  /** Adds warehouse to a simple product */
  simpleProductAddWarehouse?: Maybe<SimpleProductEntity>;
  /** Acknowledges a shipment's print job has been cancelled */
  autoprintCancelAcknowledgeForPrinter: Scalars['Boolean'];
  /** Refreshes a sales order (with Amazon) by entity id */
  amazonSalesOrderRefresh?: Maybe<AmazonSalesOrderEntity>;
  /** Acknowledges a shipment's print job has downloaded */
  autoprintDownloadAcknowledgeForPrinter: Scalars['Boolean'];
  /** Refreshes a sales order (with Magento) by entity id */
  magentoSalesOrderRefresh?: Maybe<MagentoSalesOrderEntity>;
  /** Clears the shipping address */
  cartClearShippingAddress?: Maybe<CartEntity>;
  /** Triggers an update to all inventory caches */
  maintenanceUpdateInventoryCaches?: Maybe<Scalars['Boolean']>;
  /** Refreshes a sales order (with Magento) by entity id */
  magentoSalesOrderRefreshAsync: Scalars['Boolean'];
  /** Validates the address, updates it if necessary */
  shipmentValidateAddress?: Maybe<ShipmentEntity>;
  /** Gets status if customer is already signed up */
  marketingStatus: Scalars['Boolean'];
  /** Acknowledges a shipment's print job has printed */
  autoprintPrintAcknowledgeForPrinter: Scalars['Boolean'];
  /** Updates bin on a simple product */
  simpleProductSetBin?: Maybe<SimpleProductEntity>;
  /** Adds user to marketing list */
  marketingSubscribe: Scalars['Boolean'];
  /** Calculates a sales tax rate based on zip code */
  salesTaxRate?: Maybe<TaxDetail>;
  /** Registers a new user, with raw password */
  userRegister?: Maybe<UserEntity>;
  /** Generates a shipment dashboard */
  shipmentDashboard?: Maybe<Dashboard>;
  /** Sets the shipment's hold status */
  salesOrderSetHold?: Maybe<SalesOrderEntity>;
  /** Triggers a re-sync of all orders with Magento */
  maintenanceMagentoReSyncOrders?: Maybe<Scalars['Boolean']>;
  /** Removes all quantity of selected simple product from user's cart */
  cartRemoveAllSimpleProduct?: Maybe<CartEntity>;
  /** Triggers a re-sync of all categories with Magento */
  maintenanceMagentoSyncAllCategories?: Maybe<Scalars['Boolean']>;
  /** Verifies an existing address */
  addressVerify?: Maybe<AddressEntity>;
  /** Gets rates for a shipment */
  shipmentRate?: Maybe<Array<Maybe<RateQuote>>>;
  /** Refreshes a simple product (with Magento) by entity id */
  simpleProductRefresh?: Maybe<SimpleProductEntity>;
  /** Refreshes a new user with Magento */
  userRefresh?: Maybe<UserEntity>;
  /** Creates a new category */
  categoryCreate?: Maybe<CategoryEntity>;
  /** Refreshes a simple product (with Magento) by sku */
  simpleProductRefreshBySku?: Maybe<SimpleProductEntity>;
  /** Changes quantity of selected kit product in user's cart */
  cartChangeQuantityKitProduct?: Maybe<CartEntity>;
  /** Gets inventory details for a simple product */
  inventoryGetDetails?: Maybe<InventoryDetails>;
  /** Triggers a re-index of hibernate cache */
  maintenanceCacheFlushAll?: Maybe<Scalars['Boolean']>;
  /** Adds zone to a simple product */
  simpleProductAddZone?: Maybe<SimpleProductEntity>;
  /** Creates a new POS terminal */
  tradeShowCreateTerminal?: Maybe<PosTerminalEntity>;
  /** Ships a multi-piece shipment */
  shipmentShipMultiPiece?: Maybe<ShipmentEntity>;
  /** Enrolls a workstation for use with AutoPrint */
  autoprintEnrollWorkstation?: Maybe<WorkstationEntity>;
  /** Updates a shipment's address */
  shipmentUpdateAddress?: Maybe<ShipmentEntity>;
  /** Gets the next shipment to print at this workstation's printer */
  autoprintGetNextForPrinter?: Maybe<Array<Maybe<PrintJob>>>;
  /** Refreshes a sales order (with Walmart) by purchase order id */
  walmartSalesOrderRefresh?: Maybe<WalmartSalesOrderEntity>;
  /** Sets the billing address to one of the user's addresses */
  cartSetBillingAddressById?: Maybe<CartEntity>;
  /** Triggers a re-sync of all products with Magento */
  maintenanceMagentoSyncAllProducts?: Maybe<Scalars['Boolean']>;
  /** Triggers sync of transactions with Poynt */
  maintenancePoyntSyncTransactions?: Maybe<Scalars['Boolean']>;
  /** Sets active flag */
  categorySetActive?: Maybe<CategoryEntity>;
  /** Reroutes shipments from a queue */
  autoprintReroute: Scalars['Boolean'];
  /** Adds quantity of selected simple product to user's cart */
  cartAddSimpleProduct?: Maybe<CartEntity>;
  /** Triggers sync of products with Poynt */
  maintenancePoyntSyncProducts?: Maybe<Scalars['Boolean']>;
  /** Generates a USPS scan form */
  shipmentScanForm?: Maybe<Scalars['String']>;
  /** Adds inventory for a simple product */
  inventoryAddDetails?: Maybe<InventoryDetails>;
  /** Triggers a re-index of all items in Elastic */
  maintenanceElasticReindexAll?: Maybe<Scalars['Boolean']>;
  /** Sets the shipping address to one of the user's addresses */
  cartSetShippingAddressById?: Maybe<CartEntity>;
  /** Updates a user's password */
  userUpdatePassword?: Maybe<UserEntity>;
  /** Sets a department's parent */
  departmentSetParent?: Maybe<DepartmentEntity>;
  /** Summarizes the cart's totals */
  cartSummarize?: Maybe<SalesOrderEntity>;
  /** Triggers a re-sync of updated orders with Walmart */
  maintenanceWalmartSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Triggers a re-sync of products quantities available for sale */
  maintenanceInventoryUpdateQuantitiesAvailableForSale?: Maybe<Scalars['Boolean']>;
  /** Ships a shipment */
  shipmentShip?: Maybe<ShipmentEntity>;
  /** Deletes an existing address */
  addressDelete: Scalars['Boolean'];
  /** Creates a new simple product */
  simpleProductCreate?: Maybe<SimpleProductEntity>;
  /** Updates an existing address */
  addressUpdate?: Maybe<AddressEntity>;
  /** Clears the billing address */
  cartClearBillingAddress?: Maybe<CartEntity>;
  /** Creates a new user, with password hash */
  userCreate?: Maybe<UserEntity>;
  /** Gets rates for a multi-piece shipment */
  shipmentRateMultiPiece?: Maybe<Array<Maybe<RateQuote>>>;
  /** Triggers a re-sync of updated orders with Amazon */
  maintenanceAmazonSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Sets a category's parent */
  categorySetParent?: Maybe<CategoryEntity>;
  /** Validates the address, updates it if necessary */
  salesOrderValidateAddress?: Maybe<SalesOrderEntity>;
  /** Provides making stock status */
  makingStockStatus?: Maybe<Array<Maybe<InventoryDetails>>>;
  /** Adds inventory for a simple product */
  inventoryAdd?: Maybe<InventoryResult>;
  /** Creates a new address */
  addressCreate?: Maybe<AddressEntity>;
  /** Sets inventory for a simple product */
  inventorySetDetails?: Maybe<InventoryDetails>;
  /** Pushes a simple product to Poynt */
  simpleProductPush: Scalars['Boolean'];
  /** Gets printers for an existing workstation */
  autoprintListPrinters?: Maybe<Array<Maybe<PrinterEntity>>>;
  /** Triggers a re-sync of packaging orders with Magento */
  maintenanceMagentoSyncPackaging?: Maybe<Scalars['Boolean']>;
  /** Sets the shipping zip code, as a shortcut for shipping rates */
  cartSetShippingZip?: Maybe<CartEntity>;
  /** Triggers sync a transaction with Poynt */
  maintenancePoyntSyncTransaction?: Maybe<Scalars['Boolean']>;
  /** Triggers a re-sync of updated orders with Magento */
  maintenanceMagentoSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Tests a workstation for use with AutoPrint */
  autoprintTestWorkstation?: Maybe<WorkstationEntity>;
  /** Changes quantity of selected simple product in user's cart */
  cartChangeQuantitySimpleProduct?: Maybe<CartEntity>;
  /** Sets the shipping address */
  cartSetShippingAddress?: Maybe<CartEntity>;
  /** Triggers a re-sync of updated orders with Amazon */
  maintenanceAmazonReSyncOrders?: Maybe<Scalars['Boolean']>;
  /** Generates a client token for current user. */
  checkoutGetClientToken?: Maybe<ClientTokenDetail>;
  /** Removes all quantity of selected kit product from user's cart */
  cartRemoveAllKitProduct?: Maybe<CartEntity>;
  /** Removes bin from a simple product */
  simpleProductClearBin?: Maybe<SimpleProductEntity>;
  /** Sets a shipment to be reprinted */
  autoprintReprint: Scalars['Boolean'];
  /** Adds quantity of selected kit product to user's cart */
  cartAddKitProduct?: Maybe<CartEntity>;
  /** Voids a shipment */
  shipmentVoid?: Maybe<ShipmentEntity>;
  /** Creates a new department */
  departmentCreate?: Maybe<DepartmentEntity>;
  /** Update's a user's admin status */
  userUpdateAdmin?: Maybe<UserEntity>;
  /** Sets the billing address */
  cartSetBillingAddress?: Maybe<CartEntity>;
};


/** Mutation root */
export type MutationTradeShowCreateShowArgs = {
  endDate: Scalars['LocalDate'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  startDate: Scalars['LocalDate'];
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationTradeShowSendReportArgs = {
  emails: Array<Maybe<Scalars['String']>>;
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationShipmentRerouteArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartCheckoutArgs = {
  method?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['UUID']>;
  deviceData?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAutoprintAddPrinterArgs = {
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductAddWarehouseArgs = {
  productId: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintCancelAcknowledgeForPrinterArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationAmazonSalesOrderRefreshArgs = {
  amazonId: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintDownloadAcknowledgeForPrinterArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationMagentoSalesOrderRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearShippingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationMagentoSalesOrderRefreshAsyncArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentValidateAddressArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAutoprintPrintAcknowledgeForPrinterArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductSetBinArgs = {
  bin: Scalars['String'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationMarketingSubscribeArgs = {
  email?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSalesTaxRateArgs = {
  postalCode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationUserRegisterArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentDashboardArgs = {
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationSalesOrderSetHoldArgs = {
  id: Scalars['UUID'];
  hold: Scalars['Boolean'];
};


/** Mutation root */
export type MutationCartRemoveAllSimpleProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationAddressVerifyArgs = {
  commit: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationShipmentRateArgs = {
  width?: Maybe<Scalars['BigDecimal']>;
  length?: Maybe<Scalars['BigDecimal']>;
  weight?: Maybe<Scalars['BigDecimal']>;
  packaging?: Maybe<Packaging>;
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
  height?: Maybe<Scalars['BigDecimal']>;
};


/** Mutation root */
export type MutationSimpleProductRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationUserRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationCategoryCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductRefreshBySkuArgs = {
  sku: Scalars['String'];
};


/** Mutation root */
export type MutationCartChangeQuantityKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationInventoryGetDetailsArgs = {
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductAddZoneArgs = {
  productId: Scalars['UUID'];
  zoneId: Scalars['UUID'];
};


/** Mutation root */
export type MutationTradeShowCreateTerminalArgs = {
  urn: Scalars['String'];
  assetTag: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentShipMultiPieceArgs = {
  carrier: Carrier;
  service: Service;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  reseller?: Maybe<Reseller>;
  packaging?: Maybe<Packaging>;
  id: Scalars['UUID'];
  packages: Array<Maybe<PackageSizeInput>>;
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintEnrollWorkstationArgs = {
  machineKey: Scalars['String'];
  name: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentUpdateAddressArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential: Scalars['Boolean'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  id: Scalars['UUID'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintGetNextForPrinterArgs = {
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
};


/** Mutation root */
export type MutationWalmartSalesOrderRefreshArgs = {
  purchaseOrderId: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetBillingAddressByIdArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};


/** Mutation root */
export type MutationMaintenancePoyntSyncTransactionsArgs = {
  updatedBefore: Scalars['Instant'];
  updatedAfter: Scalars['Instant'];
};


/** Mutation root */
export type MutationCategorySetActiveArgs = {
  active: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartAddSimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationShipmentScanFormArgs = {
  date: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryAddDetailsArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetShippingAddressByIdArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};


/** Mutation root */
export type MutationUserUpdatePasswordArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationDepartmentSetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartSummarizeArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationShipmentShipArgs = {
  carrier: Carrier;
  service: Service;
  width?: Maybe<Scalars['BigDecimal']>;
  length?: Maybe<Scalars['BigDecimal']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  weight?: Maybe<Scalars['BigDecimal']>;
  packaging?: Maybe<Packaging>;
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
  height?: Maybe<Scalars['BigDecimal']>;
};


/** Mutation root */
export type MutationAddressDeleteArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductCreateArgs = {
  price: Scalars['BigDecimal'];
  title: Scalars['String'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationAddressUpdateArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential: Scalars['Boolean'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  id: Scalars['UUID'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearBillingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationUserCreateArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentRateMultiPieceArgs = {
  packaging?: Maybe<Packaging>;
  id: Scalars['UUID'];
  packages: Array<Maybe<PackageSizeInput>>;
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCategorySetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSalesOrderValidateAddressArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationMakingStockStatusArgs = {
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryAddArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddressCreateArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential: Scalars['Boolean'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationInventorySetDetailsArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductPushArgs = {
  price?: Maybe<Scalars['BigDecimal']>;
  name?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
  shortCode?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAutoprintListPrintersArgs = {
  machineKey: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetShippingZipArgs = {
  zip: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationMaintenancePoyntSyncTransactionArgs = {
  orderNumber?: Maybe<Scalars['String']>;
  transactionId: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintTestWorkstationArgs = {
  machineKey: Scalars['String'];
};


/** Mutation root */
export type MutationCartChangeQuantitySimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartSetShippingAddressArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential?: Maybe<Scalars['Boolean']>;
  city: Scalars['String'];
  postalCode: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationCartRemoveAllKitProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationSimpleProductClearBinArgs = {
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintReprintArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartAddKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationShipmentVoidArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationDepartmentCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationUserUpdateAdminArgs = {
  admin: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartSetBillingAddressArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};

export type PackageSizeInput = {
  length?: Maybe<Scalars['BigDecimal']>;
  weight: Scalars['BigDecimal'];
  height?: Maybe<Scalars['BigDecimal']>;
  width?: Maybe<Scalars['BigDecimal']>;
};

export enum Packaging {
  CardboardBox = 'CARDBOARD_BOX',
  PolyBag_12X15 = 'POLY_BAG_12X15',
  FlatRateEnvelope = 'FLAT_RATE_ENVELOPE',
  RegionalBoxA = 'REGIONAL_BOX_A',
  RegionalBoxB = 'REGIONAL_BOX_B'
}

export type PaymentEntity = {
  __typename?: 'PaymentEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Payment's amount */
  amount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Payment's placed timestamp */
  placedAt?: Maybe<Scalars['Instant']>;
  /** Payment's sales order */
  salesOrder?: Maybe<SalesOrderEntity>;
  /** Payment's transaction id */
  transactionId?: Maybe<Scalars['String']>;
  /** Payment's status */
  paymentStatus?: Maybe<PaymentStatus>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum PaymentStatus {
  AuthorizationExpired = 'AUTHORIZATION_EXPIRED',
  Authorized = 'AUTHORIZED',
  Authorizing = 'AUTHORIZING',
  SettlementPending = 'SETTLEMENT_PENDING',
  SettlementDeclined = 'SETTLEMENT_DECLINED',
  Failed = 'FAILED',
  GatewayRejected = 'GATEWAY_REJECTED',
  ProcessorDeclined = 'PROCESSOR_DECLINED',
  Settled = 'SETTLED',
  Settling = 'SETTLING',
  SubmittedForSettlement = 'SUBMITTED_FOR_SETTLEMENT',
  Voided = 'VOIDED'
}

export type PdfContents = {
  __typename?: 'PdfContents';
  /** PDF's filename */
  fileName?: Maybe<Scalars['String']>;
  /** PDF's data */
  data?: Maybe<Scalars['String']>;
  /** PDF's HTML content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type PosTerminalEntity = {
  __typename?: 'PosTerminalEntity';
  /** POS terminal's urn */
  urn?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** POS terminal's asset tag */
  assetTag?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type PrintJob = {
  __typename?: 'PrintJob';
  /** Print job's tray */
  tray?: Maybe<Scalars['String']>;
  /** Print job's name */
  name?: Maybe<Scalars['String']>;
  /** Print job's rotation */
  rotate?: Maybe<Scalars['Boolean']>;
  /** Print job's data */
  dataBase64?: Maybe<Scalars['String']>;
  /** Print job's printer */
  printer?: Maybe<Scalars['String']>;
};

export type PrinterEntity = {
  __typename?: 'PrinterEntity';
  /** Printer's rotation */
  rotate?: Maybe<Scalars['Boolean']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Printer's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
};

export type ProductRevisionEntity = {
  __typename?: 'ProductRevisionEntity';
  /** Product revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  /** Provides user info a user */
  userInfo?: Maybe<UserEntity>;
  /** Creates transient shipments for sales order items, then rolls back */
  salesOrderComputeBestShipping?: Maybe<SalesOrderEntity>;
  /** Retrieves a shipment */
  shipmentFind?: Maybe<ShipmentEntity>;
  /** Locates a simple product by bin */
  simpleProductFindByBin?: Maybe<SimpleProductEntity>;
  /** Generate a PDF for the sales order */
  salesOrderGeneratePdf?: Maybe<PdfContents>;
  /** Lists brands */
  brandList?: Maybe<GraphQlPage_BrandEntity>;
  /** Locates the root department */
  departmentRoot?: Maybe<DepartmentEntity>;
  /** Lists departments */
  departmentList?: Maybe<GraphQlPage_DepartmentEntity>;
  /** Provides user info by email */
  userFindByEmail?: Maybe<UserEntity>;
  /** Search categories */
  categorySearch?: Maybe<GraphQlPage_CategoryEntity>;
  /** Lists address for current user */
  addressList?: Maybe<Array<Maybe<AddressEntity>>>;
  /** Locates a product by slug */
  productBySlug?: Maybe<ProductEntity>;
  /** Lists categories */
  categoryList?: Maybe<GraphQlPage_CategoryEntity>;
  /** Provides warehouse info */
  warehouseFindByName?: Maybe<WarehouseEntity>;
  /** Locates a simple product by id */
  simpleProductInfo?: Maybe<SimpleProductEntity>;
  /** Lists suppliers */
  supplierList?: Maybe<GraphQlPage_SupplierEntity>;
  /** Searches for a shipment */
  shipmentSearch?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Retrieves a shipment */
  shipmentInfo?: Maybe<ShipmentEntity>;
  /** Search products */
  productSearch?: Maybe<SearchResults>;
  /** Provides warehouse info */
  warehouseList?: Maybe<Array<Maybe<WarehouseEntity>>>;
  /** Locates a category by slug */
  categoryBySlug?: Maybe<CategoryResults>;
  /** Locates a simple product by UPC */
  simpleProductFindByUpc?: Maybe<SimpleProductEntity>;
  /** Locates the root category */
  categoryRoot?: Maybe<CategoryEntity>;
  /** Lists sales orders */
  salesOrderList?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Lists simple products */
  simpleProductList?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Provides user info for current user */
  userSelf?: Maybe<UserEntity>;
  /** Locates a department by slug */
  departmentBySlug?: Maybe<DepartmentEntity>;
  /** Locates a simple product by SKU */
  simpleProductFindBySku?: Maybe<SimpleProductEntity>;
  /** Filters simple products */
  simpleProductFilter?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Locates a product by id */
  productInfo?: Maybe<ProductEntity>;
  /** Provides cart info for current user */
  cartInfo?: Maybe<CartEntity>;
  /** Retrieves a sales order */
  salesOrderInfo?: Maybe<SalesOrderEntity>;
  /** Filters users */
  userFilter?: Maybe<GraphQlPage_UserEntity>;
  /** Filter shipments */
  shipmentFilter?: Maybe<GraphQlPage_ShipmentEntity>;
  /** Filters sales orders */
  salesOrderFilter?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Lists products */
  productList?: Maybe<GraphQlPage_ProductEntity>;
  /** Filters tradeshows */
  tradeShowFilter?: Maybe<GraphQlPage_TradeShowEntity>;
};


/** Query root */
export type QueryUserInfoArgs = {
  id?: Maybe<Scalars['UUID']>;
};


/** Query root */
export type QuerySalesOrderComputeBestShippingArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryShipmentFindArgs = {
  shipmentNumber: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindByBinArgs = {
  binId: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Query root */
export type QueryBrandListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryDepartmentListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryUserFindByEmailArgs = {
  email: Scalars['String'];
};


/** Query root */
export type QueryCategorySearchArgs = {
  query: Scalars['String'];
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryProductBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QueryCategoryListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryWarehouseFindByNameArgs = {
  name: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySupplierListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryShipmentSearchArgs = {
  query: Scalars['String'];
};


/** Query root */
export type QueryShipmentInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryProductSearchArgs = {
  query?: Maybe<Scalars['String']>;
  animal?: Maybe<Scalars['String']>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
};


/** Query root */
export type QueryCategoryBySlugArgs = {
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  slug: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindByUpcArgs = {
  upc: Scalars['String'];
};


/** Query root */
export type QuerySalesOrderListArgs = {
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
};


/** Query root */
export type QuerySimpleProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryDepartmentBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindBySkuArgs = {
  sku: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFilterArgs = {
  supplier?: Maybe<Scalars['String']>;
  active?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  sku?: Maybe<GraphQlLikeQueryFilterInput>;
  title?: Maybe<GraphQlLikeQueryFilterInput>;
  brand?: Maybe<Scalars['String']>;
};


/** Query root */
export type QueryProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryCartInfoArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Query root */
export type QuerySalesOrderInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryUserFilterArgs = {
  lastName?: Maybe<GraphQlLikeQueryFilterInput>;
  firstName?: Maybe<GraphQlLikeQueryFilterInput>;
  admin?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  email?: Maybe<GraphQlLikeQueryFilterInput>;
};


/** Query root */
export type QueryShipmentFilterArgs = {
  lastName?: Maybe<GraphQlLikeQueryFilterInput>;
  firstName?: Maybe<GraphQlLikeQueryFilterInput>;
  late?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  warehouse?: Maybe<GraphQlSingleValueFilter_StringInput>;
  shipmentNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  shipmentStatus?: Maybe<GraphQlSingleValueFilter_ShipmentStatusInput>;
};


/** Query root */
export type QuerySalesOrderFilterArgs = {
  orderType?: Maybe<GraphQlSingleValueFilter_StringInput>;
  billingLastName?: Maybe<GraphQlLikeQueryFilterInput>;
  orderNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  alternateOrderNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  billingFirstName?: Maybe<GraphQlLikeQueryFilterInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  email?: Maybe<GraphQlLikeQueryFilterInput>;
};


/** Query root */
export type QueryProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryTradeShowFilterArgs = {
  name?: Maybe<GraphQlLikeQueryFilterInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
};

export enum QueryCondition {
  Eq = 'eq',
  Ne = 'ne',
  Gt = 'gt',
  Ge = 'ge',
  Lt = 'lt',
  Le = 'le',
  IsNull = 'isNull',
  NotNull = 'notNull'
}

export type RateQuote = {
  __typename?: 'RateQuote';
  /** Rate quote's carrier */
  carrier?: Maybe<Carrier>;
  /** Rate quote's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Rate quote's service */
  service?: Maybe<Service>;
  /** Rate quote's postage reseller */
  reseller?: Maybe<Reseller>;
  /** Rate quote's options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Rate quote's domestic service type */
  domesticServiceType?: Maybe<DomesticServiceType>;
  /** Rate quote's packaging */
  packaging?: Maybe<Packaging>;
  /** Rate quote's delivery date */
  deliveryDate?: Maybe<Scalars['String']>;
  /** Rate quote's ship date */
  shipDate?: Maybe<Scalars['String']>;
};

export enum Reseller {
  Generic = 'GENERIC',
  Dhl = 'DHL',
  Fedex = 'FEDEX',
  Ups = 'UPS',
  Stamps = 'STAMPS',
  Amazon = 'AMAZON'
}

export type SalesOrderCommentsEntity = {
  __typename?: 'SalesOrderCommentsEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Comment's name */
  name?: Maybe<Scalars['String']>;
  /** Comment's comment */
  comment?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Comment's time */
  time?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Comment's sales order */
  salesOrder?: Maybe<SalesOrderEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type SalesOrderEntity = {
  __typename?: 'SalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Sales order's shipments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order is from a marketplace */
  marketplace?: Maybe<Scalars['Boolean']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type SalesOrderItemEntity = {
  __typename?: 'SalesOrderItemEntity';
  /** Order item's unit weight */
  unitWeight?: Maybe<Scalars['BigDecimal']>;
  /** Order item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Order item's discount */
  discountAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order item's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order item's line cost */
  lineAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's overridden carrier preference */
  overriddenCarrierPreference?: Maybe<Carrier>;
  /** Order item's overridden shipping needs */
  overriddenShippingNeedsType?: Maybe<ShippingNeedsType>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Order item's expected delivery */
  expectedDelivery?: Maybe<Scalars['LocalDate']>;
  /** Order item's name */
  name?: Maybe<Scalars['String']>;
  /** Order item's unit cost */
  unitAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's shipping amount */
  shippingAmount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order item's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Order item's tax amount */
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's group */
  salesOrderItemGroup?: Maybe<SalesOrderItemGroupEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Order item's live arrival guarantee */
  liveArrivalGuaranteeState?: Maybe<LiveArrivalGuaranteeState>;
  /** Order item's overridden service type */
  overriddenDomesticServiceType?: Maybe<DomesticServiceType>;
};

export type SalesOrderItemGroupEntity = {
  __typename?: 'SalesOrderItemGroupEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum SalesOrderStatus {
  PendingPayment = 'PendingPayment',
  PendingReleaseOfHold = 'PendingReleaseOfHold',
  Unshipped = 'Unshipped',
  PartiallyShipped = 'PartiallyShipped',
  Shipped = 'Shipped',
  Cancelled = 'Cancelled'
}

export enum SalesOrderType {
  General = 'General',
  Employee = 'Employee',
  Wholesale = 'Wholesale',
  TaxExempt = 'TaxExempt',
  Net30 = 'Net30'
}

export enum SalesTaxRules {
  Taxable = 'TAXABLE',
  NotTaxable = 'NOT_TAXABLE'
}

export type SearchResults = {
  __typename?: 'SearchResults';
  /** Result's animal */
  animal?: Maybe<AnimalEntity>;
  /** Result's category */
  category?: Maybe<CategoryEntity>;
  /** Result's brand */
  brand?: Maybe<BrandEntity>;
  /** Result's products */
  products?: Maybe<GraphQlPage_ProductEntity>;
};

export enum Service {
  GenericGround = 'GENERIC_GROUND',
  GenericTwoDay = 'GENERIC_TWO_DAY',
  GenericOvernight = 'GENERIC_OVERNIGHT',
  FedexGround = 'FEDEX_GROUND',
  FedexHomeDelivery = 'FEDEX_HOME_DELIVERY',
  FedexExpressSaver = 'FEDEX_EXPRESS_SAVER',
  FedexTwoDay = 'FEDEX_TWO_DAY',
  FedexStandardOvernight = 'FEDEX_STANDARD_OVERNIGHT',
  FedexPriorityOvernight = 'FEDEX_PRIORITY_OVERNIGHT',
  FedexFirstOvernight = 'FEDEX_FIRST_OVERNIGHT',
  FedexSmartPost = 'FEDEX_SMART_POST',
  FedexInternationalGround = 'FEDEX_INTERNATIONAL_GROUND',
  FedexInternationalEconomy = 'FEDEX_INTERNATIONAL_ECONOMY',
  UpsGround = 'UPS_GROUND',
  UpsSecondDayAir = 'UPS_SECOND_DAY_AIR',
  UpsThreeDaySelect = 'UPS_THREE_DAY_SELECT',
  UpsNextDayAir = 'UPS_NEXT_DAY_AIR',
  UpsNextDayAirSaver = 'UPS_NEXT_DAY_AIR_SAVER',
  UpsSurePost = 'UPS_SURE_POST',
  UpsWorldwideExpress = 'UPS_WORLDWIDE_EXPRESS',
  UpsWorldwideExpressPlus = 'UPS_WORLDWIDE_EXPRESS_PLUS',
  UpsWorldwideExpedited = 'UPS_WORLDWIDE_EXPEDITED',
  UspsFirstClassMail = 'USPS_FIRST_CLASS_MAIL',
  UspsParcelSelect = 'USPS_PARCEL_SELECT',
  UspsPriorityMail = 'USPS_PRIORITY_MAIL',
  UspsPriorityMailExpress = 'USPS_PRIORITY_MAIL_EXPRESS',
  UspsPriorityMailInternational = 'USPS_PRIORITY_MAIL_INTERNATIONAL'
}

export type ShipmentAddonEntity = {
  __typename?: 'ShipmentAddonEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Shipment addon's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Shipment addon's shipment */
  shipment?: Maybe<ShipmentEntity>;
  /** Shipment addon's addon */
  addon?: Maybe<AddonEntity>;
  /** Shipment addon's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment addon's sku */
  sku?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ShipmentEntity = {
  __typename?: 'ShipmentEntity';
  /** Shipment's country */
  country?: Maybe<Scalars['String']>;
  /** Shipment's estimated height */
  estimatedHeight?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Shipment's download start */
  downloadStart?: Maybe<Scalars['Instant']>;
  /** Shipment's actual height */
  actualHeight?: Maybe<Scalars['BigDecimal']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Shipment's shipper */
  shippedBy?: Maybe<Scalars['String']>;
  /** Shipment's options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Shipment's carrier preference */
  carrierPreference?: Maybe<Carrier>;
  /** Shipment's state */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment's placed at time */
  placedAt?: Maybe<Scalars['Instant']>;
  /** Shipment's line 2 */
  line2?: Maybe<Scalars['String']>;
  /** Shipment's line 1 */
  line1?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Shipment's estimated length */
  estimatedLength?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's actual length */
  actualLength?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's actual width */
  actualWidth?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Shipment's estimated delivery date */
  estimatedDeliveryDate?: Maybe<Scalars['LocalDate']>;
  /** Shipment's sales order */
  salesOrder?: Maybe<SalesOrderEntity>;
  /** Shipment's first name */
  firstName?: Maybe<Scalars['String']>;
  /** Shipment's estimated width */
  estimatedWidth?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's label ZPL contents */
  zplContents?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Shipment's estimated ship date */
  estimatedShipDate?: Maybe<Scalars['LocalDate']>;
  /** Shipment's printed end */
  printedEnd?: Maybe<Scalars['Instant']>;
  /** Shipment's last name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipment's city */
  city?: Maybe<Scalars['String']>;
  /** Shipment's items */
  shipmentItems?: Maybe<Array<Maybe<ShipmentItemEntity>>>;
  /** Shipment's address validation source */
  addressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipment's actual weight */
  actualWeight?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's departing warehouse */
  departingWarehouse?: Maybe<WarehouseEntity>;
  /** Shipment's addons */
  shipmentAddons?: Maybe<Array<Maybe<ShipmentAddonEntity>>>;
  /** Shipment's printed start */
  printedStart?: Maybe<Scalars['Instant']>;
  /** Shipment's company */
  company?: Maybe<Scalars['String']>;
  /** Shipment's shipment number */
  shipmentNumber?: Maybe<Scalars['String']>;
  /** Shipment's content hash */
  contentsMd5?: Maybe<Scalars['String']>;
  /** Shipment's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Shipment's reprint status */
  reprint?: Maybe<Scalars['Boolean']>;
  /** Shipment's tracking number */
  trackingNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Shipment's origin warehouse */
  originWarehouse?: Maybe<WarehouseEntity>;
  /** Shipment's postage reseller */
  reseller?: Maybe<Reseller>;
  /** Shipment's packaging */
  packaging?: Maybe<Packaging>;
  /** Shipment's carrier */
  carrier?: Maybe<Carrier>;
  /** Shipment's residential flag */
  residential?: Maybe<Scalars['Boolean']>;
  /** Shipment's estimated weight */
  estimatedWeight?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's tracking number (deprecated) */
  trackingNo?: Maybe<Scalars['String']>;
  /** Shipment's service */
  service?: Maybe<Service>;
  /** Shipment's shipped at time */
  shippedAt?: Maybe<Scalars['Instant']>;
  /** Shipment's label ZPL content (deprecated) */
  zplContent?: Maybe<Scalars['String']>;
  /** Shipment's status */
  shipmentStatus?: Maybe<ShipmentStatus>;
};

export type ShipmentItemEntity = {
  __typename?: 'ShipmentItemEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Shipment item's sales order item */
  salesOrderItem?: Maybe<SalesOrderItemEntity>;
  /** Shipment item's shipment */
  shipment?: Maybe<ShipmentEntity>;
  /** Shipment item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Shipment item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment item's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Shipment item's live arrival guarantee */
  liveArrivalGuaranteeState?: Maybe<LiveArrivalGuaranteeState>;
};

export enum ShipmentStatus {
  Pending = 'Pending',
  NeedsScheduling = 'NeedsScheduling',
  Unshipped = 'Unshipped',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  External = 'External'
}

export enum ShippingNeedsType {
  ItemNotShipped = 'ItemNotShipped',
  StoreShowPickupOnly = 'StoreShowPickupOnly',
  ScheduleWithCustomer = 'ScheduleWithCustomer',
  CourierDelivery = 'CourierDelivery'
}

export type ShippingRuleSetEntity = {
  __typename?: 'ShippingRuleSetEntity';
  /** Shipping rule set's live arrival guarantees */
  liveArrivalGuarantees?: Maybe<Array<Maybe<LiveArrivalGuaranteeEntity>>>;
  /** Shipping rule set's live destination restriction */
  destinationRestriction?: Maybe<DestinationRestrictionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Shipping rule set's transit time restriction */
  transitTimeRestriction?: Maybe<TransitTimeRestrictionEntity>;
  /** Shipping rule set's ships alone restriction */
  shipsAloneRestriction?: Maybe<ShipsAloneRestrictionEntity>;
  /** Shipping rule set's name */
  name?: Maybe<Scalars['String']>;
  /** Shipping rule set's addon source requirements */
  addonSetSourceRequirements?: Maybe<Array<Maybe<AddonSetSourceRequirementEntity>>>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule set's slug */
  slug?: Maybe<Scalars['String']>;
  /** Shipping rule set's addon destination requirements */
  addonSetDestinationRequirements?: Maybe<Array<Maybe<AddonSetDestinationRequirementEntity>>>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ShipsAloneRestrictionEntity = {
  __typename?: 'ShipsAloneRestrictionEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type SimpleProductEntity = {
  __typename?: 'SimpleProductEntity';
  /** Simple product's ships alone */
  shipsAlone?: Maybe<Scalars['Boolean']>;
  /** Simple product's Magento vendor */
  magentoVendor?: Maybe<Vendor>;
  /** Simple product's sales tax rules */
  salesTaxRules?: Maybe<SalesTaxRules>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Simple product's shipping restrictions */
  shippingRestrictions?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  /** Simple product's MAP price */
  mapPrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Simple product's supplier */
  supplier?: Maybe<SupplierEntity>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Simple product's special price */
  specialPrice?: Maybe<Scalars['BigDecimal']>;
  /** Simple product's brand */
  brand?: Maybe<BrandEntity>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Simple product's Amazon profile */
  amazonProfile?: Maybe<AmazonProfileEntity>;
  /** Simple product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Simple product's bins */
  bins?: Maybe<Array<Maybe<BinEntity>>>;
  /** Simple product's inventory quantity caches */
  inventoryQuantityCaches?: Maybe<Array<Maybe<InventoryQuantityCacheEntity>>>;
  /** Simple product's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Simple product's warehouses */
  warehouses?: Maybe<Array<Maybe<WarehouseEntity>>>;
  /** Simple product's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Simple product's inventory stats caches */
  inventoryStatsCaches?: Maybe<Array<Maybe<InventoryStatsCacheEntity>>>;
  /** Simple product's zones */
  zones?: Maybe<Array<Maybe<ZoneEntity>>>;
  /** Simple product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's explicit department */
  explicitDepartment?: Maybe<DepartmentEntity>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Simple product's not ships alone */
  notShipsAlone?: Maybe<Scalars['Boolean']>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum State {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  De = 'DE',
  Fl = 'FL',
  Ga = 'GA',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  Va = 'VA',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY',
  Dc = 'DC',
  As = 'AS',
  Gu = 'GU',
  Mp = 'MP',
  Pr = 'PR',
  Um = 'UM',
  Vi = 'VI',
  Aa = 'AA',
  Ae = 'AE',
  Ap = 'AP'
}

export type Stats = {
  __typename?: 'Stats';
  /** Stat's unshipped count */
  unshipped?: Maybe<Scalars['Int']>;
  /** Stat's on-hold count */
  onHold?: Maybe<Scalars['Int']>;
  /** Stat's end date */
  endDate?: Maybe<Scalars['String']>;
  /** Stat's shipped late */
  shippedLate?: Maybe<Scalars['Int']>;
  /** Stat's shipped on-time */
  shippedOnTime?: Maybe<Scalars['Int']>;
  /** Stat's start date */
  startDate?: Maybe<Scalars['String']>;
};

export type Summary = {
  __typename?: 'Summary';
  /** Summary's date */
  date?: Maybe<Scalars['String']>;
  /** Summary's unshipped count */
  unshipped?: Maybe<Scalars['Int']>;
  /** Summary's shipped count */
  shipped?: Maybe<Scalars['Int']>;
  /** Summary's on-hold count */
  onHold?: Maybe<Scalars['Int']>;
};

export type SupplierEntity = {
  __typename?: 'SupplierEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Supplier's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Supplier's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Supplier's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
};

export type TaxDetail = {
  __typename?: 'TaxDetail';
  /** Tax detail's state */
  state?: Maybe<Scalars['String']>;
  /** Tax detail's shipping taxed */
  shippingTaxed?: Maybe<Scalars['Boolean']>;
  /** Tax detail's rate */
  rate?: Maybe<Scalars['Float']>;
};

export type TradeShowEntity = {
  __typename?: 'TradeShowEntity';
  /** Trade show's ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Trade show's city name */
  city?: Maybe<Scalars['String']>;
  /** Trade show's end date */
  endDate?: Maybe<Scalars['LocalDate']>;
  /** Trade show's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Trade show's sales tax rate */
  taxRate?: Maybe<Scalars['BigDecimal']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Trade show's name */
  name?: Maybe<Scalars['String']>;
  /** Trade show's state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Trade show's last line */
  line2?: Maybe<Scalars['String']>;
  /** Trade show's start date */
  startDate?: Maybe<Scalars['LocalDate']>;
  /** Trade show's first line */
  line1?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type TransitTimeRestrictionEntity = {
  __typename?: 'TransitTimeRestrictionEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Transit time rule's transit time type */
  transitTimeType?: Maybe<TransitTimeType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum TransitTimeType {
  OneDayService = 'OneDayService',
  TwoDayService = 'TwoDayService',
  ThreeDayService = 'ThreeDayService',
  GroundService = 'GroundService'
}



export type UserEntity = {
  __typename?: 'UserEntity';
  /** User's last name */
  lastName?: Maybe<Scalars['String']>;
  /** User's addresses */
  addresses?: Maybe<Array<Maybe<AddressEntity>>>;
  /** User's email is confirmed */
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  /** User's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** User is an admin */
  admin?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** User's first name */
  firstName?: Maybe<Scalars['String']>;
  /** User's type */
  userType?: Maybe<UserType>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** User's email address */
  email?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum UserType {
  General = 'General',
  Employee = 'Employee',
  Wholesale = 'Wholesale'
}

export type VariationSetEntity = {
  __typename?: 'VariationSetEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Variation set's products */
  products?: Maybe<Array<Maybe<ProductEntity>>>;
};

export enum Vendor {
  DryGoods = 'DryGoods',
  LiveInsects = 'LiveInsects',
  Frogs = 'Frogs',
  Arachnid = 'Arachnid',
  CricketFarm = 'CricketFarm',
  GiftCards = 'GiftCards',
  FreeShipping = 'FreeShipping'
}

export type WalmartSalesOrderEntity = {
  __typename?: 'WalmartSalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Sales order's shipments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Walmart customer number */
  customerOrderId?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type WarehouseEntity = {
  __typename?: 'WarehouseEntity';
  /** Warehouse' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Warehouse's city name */
  city?: Maybe<Scalars['String']>;
  /** Warehouse's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Warehouse's latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Warehouse's name */
  name?: Maybe<Scalars['String']>;
  /** Warehouse's type */
  warehouseType?: Maybe<WarehouseType>;
  /** Warehouse's state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Warehouse's last line */
  line2?: Maybe<Scalars['String']>;
  /** Warehouse's first line */
  line1?: Maybe<Scalars['String']>;
  /** Warehouse's longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum WarehouseType {
  DropShipper = 'DropShipper',
  WebFulfillment = 'WebFulfillment',
  TradeshowFulfillment = 'TradeshowFulfillment',
  Production = 'Production',
  OverstockStorage = 'OverstockStorage'
}

export type WorkstationEntity = {
  __typename?: 'WorkstationEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Workstation's key */
  machineKey?: Maybe<Scalars['String']>;
  /** Workstation's printers */
  printers?: Maybe<Array<Maybe<PrinterEntity>>>;
  /** Workstation's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Workstation's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ZoneEntity = {
  __typename?: 'ZoneEntity';
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Zone's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Zone's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Zone's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AutoprintAddPrinterMutationVariables = Exact<{
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
}>;


export type AutoprintAddPrinterMutation = (
  { __typename?: 'Mutation' }
  & { autoprintAddPrinter?: Maybe<(
    { __typename?: 'PrinterEntity' }
    & Pick<PrinterEntity, 'id' | 'name'>
  )> }
);

export type AutoprintCancelAcknowledgeForPrinterMutationVariables = Exact<{
  shipment: Scalars['UUID'];
}>;


export type AutoprintCancelAcknowledgeForPrinterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'autoprintCancelAcknowledgeForPrinter'>
);

export type AutoprintDownloadAcknowledgeForPrinterMutationVariables = Exact<{
  shipment: Scalars['UUID'];
}>;


export type AutoprintDownloadAcknowledgeForPrinterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'autoprintDownloadAcknowledgeForPrinter'>
);

export type AutoprintEnrollWorkstationMutationVariables = Exact<{
  warehouse: Scalars['String'];
  name: Scalars['String'];
  machineKey: Scalars['String'];
}>;


export type AutoprintEnrollWorkstationMutation = (
  { __typename?: 'Mutation' }
  & { autoprintEnrollWorkstation?: Maybe<(
    { __typename?: 'WorkstationEntity' }
    & Pick<WorkstationEntity, 'name' | 'machineKey'>
    & { warehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'name'>
    )> }
  )> }
);

export type AutoprintGetNextForPrinterMutationVariables = Exact<{
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
}>;


export type AutoprintGetNextForPrinterMutation = (
  { __typename?: 'Mutation' }
  & { autoprintGetNextForPrinter?: Maybe<Array<Maybe<(
    { __typename?: 'PrintJob' }
    & Pick<PrintJob, 'name' | 'printer' | 'tray' | 'rotate' | 'dataBase64'>
  )>>> }
);

export type AutoprintListPrintersMutationVariables = Exact<{
  machineKey: Scalars['String'];
}>;


export type AutoprintListPrintersMutation = (
  { __typename?: 'Mutation' }
  & { autoprintListPrinters?: Maybe<Array<Maybe<(
    { __typename?: 'PrinterEntity' }
    & Pick<PrinterEntity, 'id' | 'name'>
  )>>> }
);

export type AutoprintPrintAcknowledgeForPrinterMutationVariables = Exact<{
  shipment: Scalars['UUID'];
}>;


export type AutoprintPrintAcknowledgeForPrinterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'autoprintPrintAcknowledgeForPrinter'>
);

export type AutoprintTestWorkstationMutationVariables = Exact<{
  machineKey: Scalars['String'];
}>;


export type AutoprintTestWorkstationMutation = (
  { __typename?: 'Mutation' }
  & { autoprintTestWorkstation?: Maybe<(
    { __typename?: 'WorkstationEntity' }
    & Pick<WorkstationEntity, 'name' | 'machineKey'>
    & { warehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'name'>
    )> }
  )> }
);

export type InventoryAddDetailsMutationVariables = Exact<{
  warehouse: Scalars['String'];
  id: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type InventoryAddDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventoryAddDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type InventoryGetDetailsMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
}>;


export type InventoryGetDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventoryGetDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type InventorySetDetailsMutationVariables = Exact<{
  warehouse: Scalars['String'];
  id: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type InventorySetDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventorySetDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type MakingStockStatusMutationVariables = Exact<{
  warehouse: Scalars['String'];
}>;


export type MakingStockStatusMutation = (
  { __typename?: 'Mutation' }
  & { makingStockStatus?: Maybe<Array<Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'title' | 'sku'>
      & { medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>> }
    )> }
  )>>> }
);

export type ShipmentFilterQueryVariables = Exact<{
  shipmentNumber: Scalars['String'];
  pageable: GraphQlPageableInput;
}>;


export type ShipmentFilterQuery = (
  { __typename?: 'Query' }
  & { shipmentFilter?: Maybe<(
    { __typename?: 'GraphQLPage_ShipmentEntity' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentEntity' }
      & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'trackingNo'>
      & { salesOrder?: Maybe<(
        { __typename?: 'SalesOrderEntity' }
        & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
      )>, shipmentItems?: Maybe<Array<Maybe<(
        { __typename?: 'ShipmentItemEntity' }
        & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
        & { salesOrderItem?: Maybe<(
          { __typename?: 'SalesOrderItemEntity' }
          & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type ShipmentFindQueryVariables = Exact<{
  shipmentNumber: Scalars['String'];
}>;


export type ShipmentFindQuery = (
  { __typename?: 'Query' }
  & { shipmentFind?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentInfoQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShipmentInfoQuery = (
  { __typename?: 'Query' }
  & { shipmentInfo?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentRateMultiPieceMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
  packaging?: Maybe<Packaging>;
  packages: Array<Maybe<PackageSizeInput>> | Maybe<PackageSizeInput>;
}>;


export type ShipmentRateMultiPieceMutation = (
  { __typename?: 'Mutation' }
  & { shipmentRateMultiPiece?: Maybe<Array<Maybe<(
    { __typename?: 'RateQuote' }
    & Pick<RateQuote, 'domesticServiceType' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'cost' | 'shipDate' | 'deliveryDate'>
  )>>> }
);

export type ShipmentSearchQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type ShipmentSearchQuery = (
  { __typename?: 'Query' }
  & { shipmentSearch?: Maybe<Array<Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'printedStart' | 'printedEnd' | 'shippedAt' | 'trackingNo' | 'firstName' | 'lastName'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber'>
    )>, originWarehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>, departingWarehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>> }
  )>>> }
);

export type ShipmentShipMultiPieceMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
  reseller: Reseller;
  carrier: Carrier;
  service: Service;
  packaging: Packaging;
  options: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  packages: Array<Maybe<PackageSizeInput>> | Maybe<PackageSizeInput>;
}>;


export type ShipmentShipMultiPieceMutation = (
  { __typename?: 'Mutation' }
  & { shipmentShipMultiPiece?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentUpdateAddressMutationVariables = Exact<{
  id: Scalars['UUID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  postalCode: Scalars['String'];
  country: Scalars['String'];
  residential: Scalars['Boolean'];
}>;


export type ShipmentUpdateAddressMutation = (
  { __typename?: 'Mutation' }
  & { shipmentUpdateAddress?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentValidateAddressMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShipmentValidateAddressMutation = (
  { __typename?: 'Mutation' }
  & { shipmentValidateAddress?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentVoidMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShipmentVoidMutation = (
  { __typename?: 'Mutation' }
  & { shipmentVoid?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type SimpleProductClearBinMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
}>;


export type SimpleProductClearBinMutation = (
  { __typename?: 'Mutation' }
  & { simpleProductClearBin?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductFilterQueryVariables = Exact<{
  pageable: GraphQlPageableInput;
  title?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
}>;


export type SimpleProductFilterQuery = (
  { __typename?: 'Query' }
  & { simpleProductFilter?: Maybe<(
    { __typename?: 'GraphQLPage_SimpleProductEntity' }
    & Pick<GraphQlPage_SimpleProductEntity, 'count' | 'page' | 'pageSize'>
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'title' | 'active' | 'price' | 'shippingNeeds'>
      & { explicitDepartment?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'DepartmentEntity' }
          & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
        )> }
      )>, brand?: Maybe<(
        { __typename?: 'BrandEntity' }
        & Pick<BrandEntity, 'id' | 'slug' | 'name'>
      )>, supplier?: Maybe<(
        { __typename?: 'SupplierEntity' }
        & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
      )>, medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>>, explicitCategories?: Maybe<Array<Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
          & { parent?: Maybe<(
            { __typename?: 'CategoryEntity' }
            & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
          )> }
        )> }
      )>>>, shippingRuleSet?: Maybe<(
        { __typename?: 'ShippingRuleSetEntity' }
        & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
      )> }
    )>>> }
  )> }
);

export type SimpleProductFindByBinQueryVariables = Exact<{
  warehouse: Scalars['String'];
  binId: Scalars['String'];
}>;


export type SimpleProductFindByBinQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindByBin?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductFindBySkuQueryVariables = Exact<{
  sku: Scalars['String'];
}>;


export type SimpleProductFindBySkuQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindBySku?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductFindByUpcQueryVariables = Exact<{
  upc: Scalars['String'];
}>;


export type SimpleProductFindByUpcQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindByUpc?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductInfoQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type SimpleProductInfoQuery = (
  { __typename?: 'Query' }
  & { simpleProductInfo?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductSetBinMutationVariables = Exact<{
  id: Scalars['UUID'];
  bin: Scalars['String'];
  warehouse: Scalars['String'];
}>;


export type SimpleProductSetBinMutation = (
  { __typename?: 'Mutation' }
  & { simpleProductSetBin?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type UserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoQuery = (
  { __typename?: 'Query' }
  & { userInfo?: Maybe<(
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'email' | 'firstName' | 'lastName' | 'admin' | 'emailConfirmed'>
  )> }
);

export type WarehouseListQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehouseListQuery = (
  { __typename?: 'Query' }
  & { warehouseList?: Maybe<Array<Maybe<(
    { __typename?: 'WarehouseEntity' }
    & Pick<WarehouseEntity, 'id' | 'name' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'latitude' | 'longitude'>
  )>>> }
);

export const AutoprintAddPrinterDocument = gql`
    mutation autoprintAddPrinter($machineKey: String!, $printerName: String!) {
  autoprintAddPrinter(machineKey: $machineKey, printerName: $printerName) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintAddPrinterGQL extends Apollo.Mutation<AutoprintAddPrinterMutation, AutoprintAddPrinterMutationVariables> {
    document = AutoprintAddPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintCancelAcknowledgeForPrinterDocument = gql`
    mutation autoprintCancelAcknowledgeForPrinter($shipment: UUID!) {
  autoprintCancelAcknowledgeForPrinter(shipment: $shipment)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintCancelAcknowledgeForPrinterGQL extends Apollo.Mutation<AutoprintCancelAcknowledgeForPrinterMutation, AutoprintCancelAcknowledgeForPrinterMutationVariables> {
    document = AutoprintCancelAcknowledgeForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintDownloadAcknowledgeForPrinterDocument = gql`
    mutation autoprintDownloadAcknowledgeForPrinter($shipment: UUID!) {
  autoprintDownloadAcknowledgeForPrinter(shipment: $shipment)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintDownloadAcknowledgeForPrinterGQL extends Apollo.Mutation<AutoprintDownloadAcknowledgeForPrinterMutation, AutoprintDownloadAcknowledgeForPrinterMutationVariables> {
    document = AutoprintDownloadAcknowledgeForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintEnrollWorkstationDocument = gql`
    mutation autoprintEnrollWorkstation($warehouse: String!, $name: String!, $machineKey: String!) {
  autoprintEnrollWorkstation(
    warehouse: $warehouse
    name: $name
    machineKey: $machineKey
  ) {
    name
    machineKey
    warehouse {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintEnrollWorkstationGQL extends Apollo.Mutation<AutoprintEnrollWorkstationMutation, AutoprintEnrollWorkstationMutationVariables> {
    document = AutoprintEnrollWorkstationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintGetNextForPrinterDocument = gql`
    mutation autoprintGetNextForPrinter($machineKey: String!, $printerName: String!) {
  autoprintGetNextForPrinter(machineKey: $machineKey, printerName: $printerName) {
    name
    printer
    tray
    rotate
    dataBase64
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintGetNextForPrinterGQL extends Apollo.Mutation<AutoprintGetNextForPrinterMutation, AutoprintGetNextForPrinterMutationVariables> {
    document = AutoprintGetNextForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintListPrintersDocument = gql`
    mutation autoprintListPrinters($machineKey: String!) {
  autoprintListPrinters(machineKey: $machineKey) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintListPrintersGQL extends Apollo.Mutation<AutoprintListPrintersMutation, AutoprintListPrintersMutationVariables> {
    document = AutoprintListPrintersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintPrintAcknowledgeForPrinterDocument = gql`
    mutation autoprintPrintAcknowledgeForPrinter($shipment: UUID!) {
  autoprintPrintAcknowledgeForPrinter(shipment: $shipment)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintPrintAcknowledgeForPrinterGQL extends Apollo.Mutation<AutoprintPrintAcknowledgeForPrinterMutation, AutoprintPrintAcknowledgeForPrinterMutationVariables> {
    document = AutoprintPrintAcknowledgeForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintTestWorkstationDocument = gql`
    mutation autoprintTestWorkstation($machineKey: String!) {
  autoprintTestWorkstation(machineKey: $machineKey) {
    name
    machineKey
    warehouse {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintTestWorkstationGQL extends Apollo.Mutation<AutoprintTestWorkstationMutation, AutoprintTestWorkstationMutationVariables> {
    document = AutoprintTestWorkstationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InventoryAddDetailsDocument = gql`
    mutation inventoryAddDetails($warehouse: String!, $id: UUID!, $quantity: Long!) {
  inventoryAddDetails(warehouse: $warehouse, id: $id, quantity: $quantity) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryAddDetailsGQL extends Apollo.Mutation<InventoryAddDetailsMutation, InventoryAddDetailsMutationVariables> {
    document = InventoryAddDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InventoryGetDetailsDocument = gql`
    mutation inventoryGetDetails($id: UUID!, $warehouse: String!) {
  inventoryGetDetails(warehouse: $warehouse, id: $id) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryGetDetailsGQL extends Apollo.Mutation<InventoryGetDetailsMutation, InventoryGetDetailsMutationVariables> {
    document = InventoryGetDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InventorySetDetailsDocument = gql`
    mutation inventorySetDetails($warehouse: String!, $id: UUID!, $quantity: Long!) {
  inventorySetDetails(warehouse: $warehouse, id: $id, quantity: $quantity) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventorySetDetailsGQL extends Apollo.Mutation<InventorySetDetailsMutation, InventorySetDetailsMutationVariables> {
    document = InventorySetDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MakingStockStatusDocument = gql`
    mutation makingStockStatus($warehouse: String!) {
  makingStockStatus(warehouse: $warehouse) {
    product {
      id
      title
      sku
      medias {
        id
        mediaType
        url
      }
    }
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MakingStockStatusGQL extends Apollo.Mutation<MakingStockStatusMutation, MakingStockStatusMutationVariables> {
    document = MakingStockStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentFilterDocument = gql`
    query shipmentFilter($shipmentNumber: String!, $pageable: GraphQLPageableInput!) {
  shipmentFilter(shipmentNumber: {pattern: $shipmentNumber}, page: $pageable) {
    data {
      id
      cls
      shipmentNumber
      shipmentStatus
      shippingNeeds
      reseller
      carrier
      service
      packaging
      options
      estimatedWeight
      actualWeight
      estimatedLength
      estimatedWidth
      estimatedHeight
      actualLength
      actualWidth
      actualHeight
      estimatedShipDate
      estimatedDeliveryDate
      shippedAt
      trackingNo
      salesOrder {
        id
        cls
        orderNumber
        alternateOrderNumber
        placedTime
        email
        status
      }
      shipmentItems {
        id
        cls
        quantity
        salesOrderItem {
          id
          cls
          sku
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentFilterGQL extends Apollo.Query<ShipmentFilterQuery, ShipmentFilterQueryVariables> {
    document = ShipmentFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentFindDocument = gql`
    query shipmentFind($shipmentNumber: String!) {
  shipmentFind(shipmentNumber: $shipmentNumber) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentFindGQL extends Apollo.Query<ShipmentFindQuery, ShipmentFindQueryVariables> {
    document = ShipmentFindDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentInfoDocument = gql`
    query shipmentInfo($id: UUID!) {
  shipmentInfo(id: $id) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentInfoGQL extends Apollo.Query<ShipmentInfoQuery, ShipmentInfoQueryVariables> {
    document = ShipmentInfoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentRateMultiPieceDocument = gql`
    mutation shipmentRateMultiPiece($id: UUID!, $warehouse: String!, $packaging: Packaging, $packages: [PackageSizeInput]!) {
  shipmentRateMultiPiece(
    id: $id
    warehouse: $warehouse
    packaging: $packaging
    packages: $packages
  ) {
    domesticServiceType
    reseller
    carrier
    service
    packaging
    options
    cost
    shipDate
    deliveryDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentRateMultiPieceGQL extends Apollo.Mutation<ShipmentRateMultiPieceMutation, ShipmentRateMultiPieceMutationVariables> {
    document = ShipmentRateMultiPieceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentSearchDocument = gql`
    query shipmentSearch($query: String!) {
  shipmentSearch(query: $query) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    estimatedShipDate
    estimatedDeliveryDate
    printedStart
    printedEnd
    shippedAt
    trackingNo
    firstName
    lastName
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
    }
    originWarehouse {
      id
      name
    }
    departingWarehouse {
      id
      name
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentSearchGQL extends Apollo.Query<ShipmentSearchQuery, ShipmentSearchQueryVariables> {
    document = ShipmentSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentShipMultiPieceDocument = gql`
    mutation shipmentShipMultiPiece($id: UUID!, $warehouse: String!, $reseller: Reseller!, $carrier: Carrier!, $service: Service!, $packaging: Packaging!, $options: [String]!, $packages: [PackageSizeInput]!) {
  shipmentShipMultiPiece(
    id: $id
    warehouse: $warehouse
    reseller: $reseller
    carrier: $carrier
    service: $service
    packaging: $packaging
    options: $options
    packages: $packages
  ) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentShipMultiPieceGQL extends Apollo.Mutation<ShipmentShipMultiPieceMutation, ShipmentShipMultiPieceMutationVariables> {
    document = ShipmentShipMultiPieceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentUpdateAddressDocument = gql`
    mutation shipmentUpdateAddress($id: UUID!, $firstName: String!, $lastName: String!, $company: String, $line1: String!, $line2: String, $city: String!, $state: String!, $postalCode: String!, $country: String!, $residential: Boolean!) {
  shipmentUpdateAddress(
    id: $id
    firstName: $firstName
    lastName: $lastName
    company: $company
    line1: $line1
    line2: $line2
    city: $city
    state: $state
    postalCode: $postalCode
    country: $country
    residential: $residential
  ) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentUpdateAddressGQL extends Apollo.Mutation<ShipmentUpdateAddressMutation, ShipmentUpdateAddressMutationVariables> {
    document = ShipmentUpdateAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentValidateAddressDocument = gql`
    mutation shipmentValidateAddress($id: UUID!) {
  shipmentValidateAddress(id: $id) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentValidateAddressGQL extends Apollo.Mutation<ShipmentValidateAddressMutation, ShipmentValidateAddressMutationVariables> {
    document = ShipmentValidateAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentVoidDocument = gql`
    mutation shipmentVoid($id: UUID!) {
  shipmentVoid(id: $id) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentVoidGQL extends Apollo.Mutation<ShipmentVoidMutation, ShipmentVoidMutationVariables> {
    document = ShipmentVoidDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductClearBinDocument = gql`
    mutation simpleProductClearBin($id: UUID!, $warehouse: String!) {
  simpleProductClearBin(id: $id, warehouse: $warehouse) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductClearBinGQL extends Apollo.Mutation<SimpleProductClearBinMutation, SimpleProductClearBinMutationVariables> {
    document = SimpleProductClearBinDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductFilterDocument = gql`
    query simpleProductFilter($pageable: GraphQLPageableInput!, $title: String, $sku: String, $active: Boolean, $brand: String, $supplier: String, $department: String, $category: String) {
  simpleProductFilter(
    title: {pattern: $title}
    sku: {pattern: $sku}
    active: {value: $active}
    brand: $brand
    supplier: $supplier
    department: $department
    category: $category
    page: $pageable
    sort: {field: "sku", direction: ASC}
  ) {
    data {
      id
      slug
      sku
      title
      active
      explicitDepartment {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
      brand {
        id
        slug
        name
      }
      supplier {
        id
        slug
        name
      }
      price
      shippingNeeds
      medias {
        id
        mediaType
        url
      }
      explicitCategories {
        id
        slug
        name
        parent {
          id
          slug
          name
          parent {
            id
            slug
            name
          }
        }
      }
      shippingRuleSet {
        id
        slug
        name
      }
    }
    count
    page
    pageSize
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFilterGQL extends Apollo.Query<SimpleProductFilterQuery, SimpleProductFilterQueryVariables> {
    document = SimpleProductFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductFindByBinDocument = gql`
    query simpleProductFindByBin($warehouse: String!, $binId: String!) {
  simpleProductFindByBin(warehouse: $warehouse, binId: $binId) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFindByBinGQL extends Apollo.Query<SimpleProductFindByBinQuery, SimpleProductFindByBinQueryVariables> {
    document = SimpleProductFindByBinDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductFindBySkuDocument = gql`
    query simpleProductFindBySku($sku: String!) {
  simpleProductFindBySku(sku: $sku) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFindBySkuGQL extends Apollo.Query<SimpleProductFindBySkuQuery, SimpleProductFindBySkuQueryVariables> {
    document = SimpleProductFindBySkuDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductFindByUpcDocument = gql`
    query simpleProductFindByUpc($upc: String!) {
  simpleProductFindByUpc(upc: $upc) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFindByUpcGQL extends Apollo.Query<SimpleProductFindByUpcQuery, SimpleProductFindByUpcQueryVariables> {
    document = SimpleProductFindByUpcDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductInfoDocument = gql`
    query simpleProductInfo($id: UUID!) {
  simpleProductInfo(id: $id) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductInfoGQL extends Apollo.Query<SimpleProductInfoQuery, SimpleProductInfoQueryVariables> {
    document = SimpleProductInfoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductSetBinDocument = gql`
    mutation simpleProductSetBin($id: UUID!, $bin: String!, $warehouse: String!) {
  simpleProductSetBin(id: $id, bin: $bin, warehouse: $warehouse) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    shippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductSetBinGQL extends Apollo.Mutation<SimpleProductSetBinMutation, SimpleProductSetBinMutationVariables> {
    document = SimpleProductSetBinDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserInfoDocument = gql`
    query userInfo {
  userInfo {
    email
    firstName
    lastName
    admin
    emailConfirmed
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserInfoGQL extends Apollo.Query<UserInfoQuery, UserInfoQueryVariables> {
    document = UserInfoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WarehouseListDocument = gql`
    query warehouseList {
  warehouseList {
    id
    name
    line1
    line2
    city
    state
    postalCode
    country
    latitude
    longitude
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WarehouseListGQL extends Apollo.Query<WarehouseListQuery, WarehouseListQueryVariables> {
    document = WarehouseListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }