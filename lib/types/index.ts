import { z } from 'zod';

// Base Types
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role: 'customer' | 'admin';
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentCategoryId?: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
  children?: Category[];
  parent?: Category;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  sku?: string;
  price: number;
  comparePrice?: number;
  costPrice?: number;
  stockQuantity: number;
  weight?: number;
  dimensions?: Record<string, any>;
  categoryId?: string;
  brand?: string;
  fabric?: string;
  color?: string;
  pattern?: string;
  occasion?: string;
  careInstructions?: string;
  isFeatured: boolean;
  isActive: boolean;
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
  category?: Category;
  images: ProductImage[];
}

export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  altText?: string;
  sortOrder: number;
  isPrimary: boolean;
  createdAt: Date;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
  products?: Product[];
}

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
}

export interface Cart {
  id: string;
  userId?: string;
  sessionId?: string;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: string;
  userId: string;
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId?: string;
  orderNumber: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  taxAmount: number;
  shippingAmount: number;
  discountAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  shippingAddress: Address;
  billingAddress: Address;
  notes?: string;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
  productSnapshot?: Record<string, any>;
  createdAt: Date;
  product?: Product;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Validation Schemas
export const CreateProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().optional(),
  shortDescription: z.string().optional(),
  sku: z.string().optional(),
  price: z.number().positive('Price must be positive'),
  comparePrice: z.number().optional(),
  stockQuantity: z.number().int().min(0, 'Stock cannot be negative'),
  categoryId: z.string().uuid().optional(),
  brand: z.string().optional(),
  fabric: z.string().optional(),
  color: z.string().optional(),
  pattern: z.string().optional(),
  occasion: z.string().optional(),
  careInstructions: z.string().optional(),
  isFeatured: z.boolean().default(false),
  isActive: z.boolean().default(true),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const CreateCategorySchema = z.object({
  name: z.string().min(1, 'Category name is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().optional(),
  parentCategoryId: z.string().uuid().optional(),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().default(0),
});

export const AddToCartSchema = z.object({
  productId: z.string().uuid('Invalid product ID'),
  quantity: z.number().int().positive('Quantity must be positive'),
});

export const CreateOrderSchema = z.object({
  items: z.array(z.object({
    productId: z.string().uuid(),
    quantity: z.number().int().positive(),
    price: z.number().positive(),
  })),
  shippingAddress: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    addressLine1: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    postalCode: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().optional(),
  }),
  billingAddress: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    addressLine1: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    postalCode: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().optional(),
  }),
  paymentMethod: z.string().optional(),
  notes: z.string().optional(),
});

// Query Parameters Types
export interface ProductFilters {
  category?: string;
  collection?: string;
  priceMin?: number;
  priceMax?: number;
  brand?: string;
  fabric?: string;
  color?: string;
  pattern?: string;
  occasion?: string;
  search?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'price' | 'createdAt' | 'popularity';
  sortOrder?: 'asc' | 'desc';
} 