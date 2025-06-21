import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products, categories, productImages } from '@/lib/db/schema';
import { eq, and, like, gte, lte, desc, asc } from 'drizzle-orm';
import { CreateProductSchema, ProductFilters } from '@/lib/types';
import { z } from 'zod';

// Use Node.js runtime instead of Edge Runtime
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters: ProductFilters = {
      category: searchParams.get('category') || undefined,
      collection: searchParams.get('collection') || undefined,
      priceMin: searchParams.get('priceMin') ? Number(searchParams.get('priceMin')) : undefined,
      priceMax: searchParams.get('priceMax') ? Number(searchParams.get('priceMax')) : undefined,
      brand: searchParams.get('brand') || undefined,
      fabric: searchParams.get('fabric') || undefined,
      color: searchParams.get('color') || undefined,
      search: searchParams.get('search') || undefined,
      featured: searchParams.get('featured') === 'true',
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 12,
      sortBy: (searchParams.get('sortBy') as any) || 'createdAt',
      sortOrder: (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc',
    };

    // Build query conditions
    const conditions = [];
    
    if (filters.category) {
      conditions.push(eq(products.categoryId, filters.category));
    }
    
    if (filters.priceMin !== undefined) {
      conditions.push(gte(products.price, filters.priceMin.toString()));
    }
    
    if (filters.priceMax !== undefined) {
      conditions.push(lte(products.price, filters.priceMax.toString()));
    }
    
    if (filters.brand) {
      conditions.push(eq(products.brand, filters.brand));
    }
    
    if (filters.fabric) {
      conditions.push(eq(products.fabric, filters.fabric));
    }
    
    if (filters.color) {
      conditions.push(eq(products.color, filters.color));
    }
    
    if (filters.search) {
      conditions.push(like(products.name, `%${filters.search}%`));
    }
    
    if (filters.featured) {
      conditions.push(eq(products.isFeatured, true));
    }

    conditions.push(eq(products.isActive, true));

    // Execute query with pagination
    const page = filters.page ?? 1;
    const limit = filters.limit ?? 12;
    const offset = (page - 1) * limit;
    
    const allowedSortFields = {
      createdAt: products.createdAt,
      price: products.price,
      name: products.name,
      id: products.id,
      // add more as needed
    } as const;

    type SortField = keyof typeof allowedSortFields;
    const sortBy: SortField = (filters.sortBy && filters.sortBy in allowedSortFields
      ? filters.sortBy
      : 'createdAt') as SortField;
    
    const productsData = await db
      .select()
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id))
      .leftJoin(productImages, eq(products.id, productImages.productId))
      .where(and(...conditions))
      .orderBy(
        filters.sortOrder === 'asc'
          ? asc(allowedSortFields[sortBy])
          : desc(allowedSortFields[sortBy])
      )
      .limit(limit)
      .offset(offset);

    // Get total count for pagination
    const totalCount = await db
      .select({ count: products.id })
      .from(products)
      .where(and(...conditions));

    return NextResponse.json({
      success: true,
      data: productsData,
      pagination: {
        page,
        limit,
        total: totalCount.length,
        pages: Math.ceil(totalCount.length / limit),
      },
    });
  } catch (error) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'PRODUCTS_FETCH_ERROR',
          message: 'Failed to fetch products',
        },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = CreateProductSchema.parse(body);

    const newProduct = await db
      .insert(products)
      .values({
        ...validatedData,
        price: validatedData.price.toString(),
        comparePrice: validatedData.comparePrice?.toString(),
      })
      .returning();

    return NextResponse.json({
      success: true,
      data: newProduct[0],
      message: 'Product created successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Validation failed',
            details: error.errors,
          },
        },
        { status: 400 }
      );
    }

    console.error('Create Product Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'PRODUCT_CREATE_ERROR',
          message: 'Failed to create product',
        },
      },
      { status: 500 }
    );
  }
}