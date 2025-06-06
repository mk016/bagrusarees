'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState('');
  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Contact & Delivery Section */}
        <div className="w-full lg:w-3/5 p-8 border-r border-gray-200">
          <h1 className="text-2xl font-bold mb-6">Bagru Art</h1>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Contact</h2>
              <span className="text-sm text-blue-600">Log in</span>
            </div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-2 flex items-center">
              <input type="checkbox" id="news-offers" className="h-4 w-4 text-blue-600 border-gray-300 rounded" defaultChecked />
              <label htmlFor="news-offers" className="ml-2 text-sm text-gray-700">Email me with news and offers</label>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            <div className="mb-4">
              <label htmlFor="country" className="sr-only">Country/Region</label>
              <select
                id="country"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>India</option>
                {/* Add other countries if needed */}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First name (optional)" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Last name" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" placeholder="Address" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input type="text" placeholder="City" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>State</option>
                {/* Add states here */}
              </select>
              <input type="text" placeholder="PIN code" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="relative mb-4">
              <input type="text" placeholder="Phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.029M12 21a9 9 0 110-18 9 9 0 010 18zm.75-13.5v.008v-.008z" />
              </svg>
            </div>
            <div className="mt-2 flex items-center">
              <input type="checkbox" id="save-info" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="save-info" className="ml-2 text-sm text-gray-700">Save this information for next time</label>
            </div>
            <div className="mt-2 flex items-center">
              <input type="checkbox" id="text-me" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="text-me" className="ml-2 text-sm text-gray-700">Text me with news and offers</label>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
            <input
              type="text"
              placeholder="Enter your shipping address to view available shipping methods."
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
              disabled
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>

            <div className="border border-gray-300 rounded-md p-4 mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="razorpay"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  checked={shippingMethod === 'razorpay'}
                  onChange={() => setShippingMethod('razorpay')}
                />
                <span className="ml-3 text-sm font-medium text-gray-900">Razorpay Secure (UPI, Cards, Wallets, NetBanking)</span>
                <div className="ml-auto flex items-center space-x-2">
                  <Image src="/razorpay-logo.png" alt="Razorpay" width={50} height={20} className="h-4" />
                  <Image src="/upi-logo.png" alt="UPI" width={30} height={20} className="h-4" />
                  <Image src="/visa-logo.png" alt="Visa" width={30} height={20} className="h-4" />
                  <Image src="/mastercard-logo.png" alt="Mastercard" width={30} height={20} className="h-4" />
                  <Image src="/rupay-logo.png" alt="RuPay" width={30} height={20} className="h-4" />
                  <span className="text-xs text-gray-500">+16</span>
                </div>
              </label>
              {shippingMethod === 'razorpay' && (
                <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50 text-center">
                  <p className="text-sm text-gray-700">After clicking &quot;Pay now&quot;, you will be redirected to Razorpay Secure to complete your purchase securely.</p>
                  <Image src="/razorpay-redirect.png" alt="Razorpay Redirect" width={150} height={100} className="mx-auto my-4" />
                </div>
              )}
            </div>

            {/* Removed COD option as per user request */}

          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Billing address</h2>
            <div className="mb-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="billingAddress"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  checked={billingAddressSameAsShipping}
                  onChange={() => setBillingAddressSameAsShipping(true)}
                />
                <span className="ml-3 text-sm font-medium text-gray-900">Same as shipping address</span>
              </label>
            </div>
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="billingAddress"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  checked={!billingAddressSameAsShipping}
                  onChange={() => setBillingAddressSameAsShipping(false)}
                />
                <span className="ml-3 text-sm font-medium text-gray-900">Use a different billing address</span>
              </label>
            </div>
            {!billingAddressSameAsShipping && (
              <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
                {/* Add billing address fields here if needed */}
                <p className="text-sm text-gray-700">Additional billing address fields would go here.</p>
              </div>
            )}
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors">
            Pay now
          </button>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-2/5 p-8 bg-gray-50">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="relative w-20 h-20 mr-4">
                <Image src="/maheshwari-silk-suit.jpeg" alt="Maheshwari silk suit Set" layout="fill" objectFit="cover" className="rounded-md" />
                <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
              </div>
              <div>
                <p className="font-medium">Maheshwari silk suit Set (MH41101)</p>
                <p className="text-gray-600 text-sm">Rs. 2,799.00</p>
              </div>
              <p className="ml-auto font-medium">Rs. 2,799.00</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex">
              <input type="text" placeholder="Discount code or gift card" className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-r-md hover:bg-gray-300 transition-colors">Apply</button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-700">Subtotal</span>
              <span className="text-sm font-medium">Rs. 2,799.00</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-700 flex items-center">Shipping
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.029M12 21a9 9 0 110-18 9 9 0 010 18zm.75-13.5v.008v-.008z" />
                </svg>
              </span>
              <span className="text-sm text-gray-500">Enter shipping address</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">INR Rs. 2,799.00</span>
            </div>
            <p className="text-xs text-gray-500">Including Rs.68.27 in taxes</p>
          </div>
        </div>
      </div>
    </div>
  );
} 