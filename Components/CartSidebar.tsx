'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/Components/CartContext';

interface CartSidebarProps {
  // Removed: isOpen: boolean;
  // Removed: onClose: () => void;
}

export default function CartSidebar(/* Removed: { isOpen, onClose }: CartSidebarProps */) {
  const { cart, removeFromCart, updateQuantity, getCartTotal, isCartOpen, toggleCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">CART</h2>
        <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 flex-grow overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center mb-4 border-b pb-4 last:border-b-0">
              <div className="relative w-24 h-24 mr-4 flex-shrink-0">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-grow">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-gray-600 text-sm">Rs. {item.salePrice}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="border border-gray-300 px-2 py-1 rounded-l text-sm"
                  >
                    -
                  </button>
                  <span className="border-t border-b border-gray-300 px-4 py-1 text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="border border-gray-300 px-2 py-1 rounded-r text-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-medium text-sm">Rs. {(parseFloat(item.salePrice.replace(/,/g, '')) * item.quantity).toFixed(2)}</p>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">SUBTOTAL</span>
          <span className="text-lg font-bold">Rs. {getCartTotal().toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">Shipping, taxes, and discount codes calculated at checkout.</p>
        <Link href="/checkout" className="block w-full bg-black text-white text-center py-3 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors" onClick={toggleCart}>
          CHECK OUT
        </Link>
      </div>
    </div>
  );
} 