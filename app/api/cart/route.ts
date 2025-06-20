import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { carts, cartItems, products } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { getServerSession } from "next-auth/next";
import { authConfig } from '@/lib/auth/config';
import { AddToCartSchema } from '@/lib/types';
import { z } from 'zod';
import { Session } from "next-auth";

export async function GET(request: NextRequest) {
  try {
    const session: Session | null = await getServerSession(authConfig);
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!session?.user?.email && !sessionId) {
      return NextResponse.json({
        success: true,
        data: { items: [], total: 0 },
      });
    }

    // Find or create cart
    let cart;
    if (session?.user?.email) {
      cart = await db
        .select()
        .from(carts)
        .where(eq(carts.userId, session.user.email))
        .limit(1);
    } else if (sessionId) {
      cart = await db
        .select()
        .from(carts)
        .where(eq(carts.sessionId, sessionId))
        .limit(1);
    }

    if (!cart || cart.length === 0) {
      return NextResponse.json({
        success: true,
        data: { items: [], total: 0 },
      });
    }

    // Get cart items with product details
    const items = await db
      .select()
      .from(cartItems)
      .leftJoin(products, eq(cartItems.productId, products.id))
      .where(eq(cartItems.cartId, cart[0].id));

    const total = items.reduce((sum, item) => {
      return sum + (parseFloat(item.cart_items.price) * item.cart_items.quantity);
    }, 0);

    return NextResponse.json({
      success: true,
      data: {
        id: cart[0].id,
        items: items.map(item => ({
          ...item.cart_items,
          product: item.products,
        })),
        total,
      },
    });
  } catch (error) {
    console.error('Cart GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'CART_FETCH_ERROR',
          message: 'Failed to fetch cart',
        },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session: Session | null = await getServerSession(authConfig);
    const body = await request.json();
    const validatedData = AddToCartSchema.parse(body);

    // Get product details
    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, validatedData.productId))
      .limit(1);

    if (!product || product.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'PRODUCT_NOT_FOUND',
            message: 'Product not found',
          },
        },
        { status: 404 }
      );
    }

    // Find or create cart
    let cart;
    if (session?.user && session.user.email) {
      cart = await db
        .select()
        .from(carts)
        .where(eq(carts.id, session.user.email))
        .limit(1);

      if (!cart || cart.length === 0) {
        cart = await db
          .insert(carts)
          .values({ userId: session.user.email })
          .returning();
      }
    } else {
      const sessionId = body.sessionId;
      if (!sessionId) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'SESSION_REQUIRED',
              message: 'Session ID is required for guest cart',
            },
          },
          { status: 400 }
        );
      }

      cart = await db
        .select()
        .from(carts)
        .where(eq(carts.sessionId, sessionId))
        .limit(1);

      if (!cart || cart.length === 0) {
        cart = await db
          .insert(carts)
          .values({ sessionId })
          .returning();
      }
    }

    // Check if item already exists in cart
    const existingItem = await db
      .select()
      .from(cartItems)
      .where(
        and(
          eq(cartItems.cartId, cart[0].id),
          eq(cartItems.productId, validatedData.productId)
        )
      )
      .limit(1);

    if (existingItem && existingItem.length > 0) {
      // Update quantity
      const updatedItem = await db
        .update(cartItems)
        .set({
          quantity: existingItem[0].quantity + validatedData.quantity,
        })
        .where(eq(cartItems.id, existingItem[0].id))
        .returning();

      return NextResponse.json({
        success: true,
        data: updatedItem[0],
        message: 'Cart item updated successfully',
      });
    } else {
      // Add new item
      const newItem = await db
        .insert(cartItems)
        .values({
          cartId: cart[0].id,
          productId: validatedData.productId,
          quantity: validatedData.quantity,
          price: product[0].price,
        })
        .returning();

      return NextResponse.json({
        success: true,
        data: newItem[0],
        message: 'Item added to cart successfully',
      });
    }
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

    console.error('Cart POST Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'CART_UPDATE_ERROR',
          message: 'Failed to update cart',
        },
      },
      { status: 500 }
    );
  }
} 