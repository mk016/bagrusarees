import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { carts, cartItems, products, productImages } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';
// import { getServerSession } from "next-auth/next";
// import { authConfig } from '@/lib/auth/config';
import { AddToCartSchema } from '@/lib/types';
import { z } from 'zod';
// import { Session } from "next-auth";

// Use Node.js runtime instead of Edge Runtime
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    // const session = await getServerSession(authConfig);
    // const sessionId = request.cookies.get('sessionId')?.value;
    
    // if (!session?.user?.id && !sessionId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // const userId = session?.user?.id || sessionId;

    // Mock user ID for now since auth is disabled
    const userId = 'guest-user';

    const userCart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1);

    if (userCart.length === 0) {
      return NextResponse.json({ items: [], total: 0 });
    }

    const cartId = userCart[0].id;

    const items = await db
      .select({
        id: cartItems.id,
        productId: cartItems.productId,
        quantity: cartItems.quantity,
        price: cartItems.price,
        product: {
          id: products.id,
          name: products.name,
          price: products.price,
        },
      })
      .from(cartItems)
      .innerJoin(products, eq(cartItems.productId, products.id))
      .where(eq(cartItems.cartId, cartId));

    const total = items.reduce((sum, item) => sum + (parseFloat(item.price.toString()) * item.quantity), 0);

    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, quantity } = AddToCartSchema.parse(body);

    // const session = await getServerSession(authConfig);
    // const sessionId = request.cookies.get('sessionId')?.value;
    
    // if (!session?.user?.id && !sessionId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // const userId = session?.user?.id || sessionId;

    // Mock user ID for now since auth is disabled
    const userId = 'guest-user';

    // Check if product exists
    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, productId))
      .limit(1);

    if (product.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Get or create cart
    let userCart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1);

    let cartId: string;

    if (userCart.length === 0) {
      const newCart = await db
        .insert(carts)
        .values({ userId })
        .returning();
      cartId = newCart[0].id;
    } else {
      cartId = userCart[0].id;
    }

    // Check if item already exists in cart
    const existingItem = await db
      .select()
      .from(cartItems)
      .where(and(eq(cartItems.cartId, cartId), eq(cartItems.productId, productId)))
      .limit(1);

    if (existingItem.length > 0) {
      // Update quantity
      await db
        .update(cartItems)
        .set({ quantity: existingItem[0].quantity + quantity })
        .where(eq(cartItems.id, existingItem[0].id));
    } else {
      // Add new item with price
      await db
        .insert(cartItems)
        .values({
          cartId,
          productId,
          quantity,
          price: product[0].price.toString(),
        });
    }

    return NextResponse.json({ message: 'Item added to cart' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { itemId, quantity } = z.object({
      itemId: z.string(),
      quantity: z.number().min(1),
    }).parse(body);

    // const session = await getServerSession(authConfig);
    // const sessionId = request.cookies.get('sessionId')?.value;
    
    // if (!session?.user?.id && !sessionId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // const userId = session?.user?.id || sessionId;

    // Mock user ID for now since auth is disabled
    const userId = 'guest-user';

    // Verify cart ownership
    const userCart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1);

    if (userCart.length === 0) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    const cartId = userCart[0].id;

    // Verify item belongs to user's cart
    const item = await db
      .select()
      .from(cartItems)
      .where(and(eq(cartItems.id, itemId), eq(cartItems.cartId, cartId)))
      .limit(1);

    if (item.length === 0) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Update quantity
    await db
      .update(cartItems)
      .set({ quantity })
      .where(eq(cartItems.id, itemId));

    return NextResponse.json({ message: 'Cart updated' });
  } catch (error) {
    console.error('Error updating cart:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const itemId = searchParams.get('itemId');

    if (!itemId) {
      return NextResponse.json({ error: 'Item ID is required' }, { status: 400 });
    }

    // const session = await getServerSession(authConfig);
    // const sessionId = request.cookies.get('sessionId')?.value;
    
    // if (!session?.user?.id && !sessionId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // const userId = session?.user?.id || sessionId;

    // Mock user ID for now since auth is disabled
    const userId = 'guest-user';

    // Verify cart ownership
    const userCart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1);

    if (userCart.length === 0) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    const cartId = userCart[0].id;

    // Verify item belongs to user's cart
    const item = await db
      .select()
      .from(cartItems)
      .where(and(eq(cartItems.id, itemId), eq(cartItems.cartId, cartId)))
      .limit(1);

    if (item.length === 0) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Delete item
    await db
      .delete(cartItems)
      .where(eq(cartItems.id, itemId));

    return NextResponse.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error removing from cart:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 