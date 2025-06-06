import { pgTable, uuid, varchar, text, decimal, integer, boolean, timestamp, jsonb, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users Table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  firstName: varchar('first_name', { length: 100 }),
  lastName: varchar('last_name', { length: 100 }),
  phone: varchar('phone', { length: 20 }),
  role: varchar('role', { length: 20 }).default('customer'),
  emailVerified: boolean('email_verified').default(false),
  image: varchar('image', { length: 500 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Categories Table
export const categories: ReturnType<typeof pgTable> = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).unique().notNull(),
  description: text('description'),
  imageUrl: varchar('image_url', { length: 500 }),
  parentCategoryId: uuid('parent_category_id').references(() => (categories as any).id),
  isActive: boolean('is_active').default(true),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Products Table
export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  description: text('description'),
  shortDescription: text('short_description'),
  sku: varchar('sku', { length: 100 }).unique(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  comparePrice: decimal('compare_price', { precision: 10, scale: 2 }),
  costPrice: decimal('cost_price', { precision: 10, scale: 2 }),
  stockQuantity: integer('stock_quantity').default(0),
  weight: decimal('weight', { precision: 8, scale: 2 }),
  dimensions: jsonb('dimensions'),
  categoryId: uuid('category_id').references(() => categories.id),
  brand: varchar('brand', { length: 100 }),
  fabric: varchar('fabric', { length: 100 }),
  color: varchar('color', { length: 100 }),
  pattern: varchar('pattern', { length: 100 }),
  occasion: varchar('occasion', { length: 100 }),
  careInstructions: text('care_instructions'),
  isFeatured: boolean('is_featured').default(false),
  isActive: boolean('is_active').default(true),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  tags: jsonb('tags'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Product Images Table
export const productImages = pgTable('product_images', {
  id: uuid('id').primaryKey().defaultRandom(),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }),
  imageUrl: varchar('image_url', { length: 500 }).notNull(),
  altText: varchar('alt_text', { length: 255 }),
  sortOrder: integer('sort_order').default(0),
  isPrimary: boolean('is_primary').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Collections Table
export const collections = pgTable('collections', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).unique().notNull(),
  description: text('description'),
  imageUrl: varchar('image_url', { length: 500 }),
  isActive: boolean('is_active').default(true),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Collection Products (Many-to-Many)
export const collectionProducts = pgTable('collection_products', {
  collectionId: uuid('collection_id').references(() => collections.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }),
  sortOrder: integer('sort_order').default(0),
}, (table) => ({
  pk: primaryKey({ columns: [table.collectionId, table.productId] }),
}));

// Cart Table
export const carts = pgTable('carts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  sessionId: varchar('session_id', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Cart Items Table
export const cartItems = pgTable('cart_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  cartId: uuid('cart_id').references(() => carts.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull().default(1),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Orders Table
export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  orderNumber: varchar('order_number', { length: 50 }).unique().notNull(),
  status: varchar('status', { length: 50 }).default('pending'),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
  taxAmount: decimal('tax_amount', { precision: 10, scale: 2 }).default('0'),
  shippingAmount: decimal('shipping_amount', { precision: 10, scale: 2 }).default('0'),
  discountAmount: decimal('discount_amount', { precision: 10, scale: 2 }).default('0'),
  paymentStatus: varchar('payment_status', { length: 50 }).default('pending'),
  paymentMethod: varchar('payment_method', { length: 50 }),
  shippingAddress: jsonb('shipping_address').notNull(),
  billingAddress: jsonb('billing_address').notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Order Items Table
export const orderItems = pgTable('order_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').references(() => orders.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').references(() => products.id),
  quantity: integer('quantity').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  productSnapshot: jsonb('product_snapshot'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Addresses Table
export const addresses = pgTable('addresses', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 20 }).default('shipping'),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  company: varchar('company', { length: 100 }),
  addressLine1: varchar('address_line_1', { length: 255 }).notNull(),
  addressLine2: varchar('address_line_2', { length: 255 }),
  city: varchar('city', { length: 100 }).notNull(),
  state: varchar('state', { length: 100 }).notNull(),
  postalCode: varchar('postal_code', { length: 20 }).notNull(),
  country: varchar('country', { length: 100 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  isDefault: boolean('is_default').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  addresses: many(addresses),
  orders: many(orders),
  carts: many(carts),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  images: many(productImages),
  cartItems: many(cartItems),
  orderItems: many(orderItems),
  collectionProducts: many(collectionProducts),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parentCategoryId],
    references: [categories.id],
  }),
  children: many(categories),
  products: many(products),
}));

export const collectionsRelations = relations(collections, ({ many }) => ({
  collectionProducts: many(collectionProducts),
})); 