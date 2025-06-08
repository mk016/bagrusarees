"use client";
import { useCart } from '@/Components/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.salePrice.replace(/,/g, '')) * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6">
            {cart.map(item => (
              <li key={item.id} className="flex items-center py-4">
                <Image src={item.imageSrc} alt={item.name} width={80} height={80} className="rounded mr-4" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">Rs. {item.salePrice} x {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-lg font-bold">Rs. {total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <button onClick={clearCart} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Clear Cart</button>
            <Link href="/checkout" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
} 