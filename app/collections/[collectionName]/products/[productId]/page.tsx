"use client";

import Image from 'next/image';
import productsData from '@/data/products.json';
import ProductCard from '@/Components/ProductCard';
import Link from 'next/link';
import { useCart } from '@/Components/CartContext';

interface Product {
  id: string;
  collection: string;
  name: string;
  imageSrc: string;
  originalPrice: string;
  salePrice: string;
  discountPercentage: string;
  status: 'Sale' | 'Sold Out';
  description: string;
  details: {
    suitFabric: string;
    suitLength: string;
    bottomFabric: string;
    dupattaFabric: string;
    dupattaLength: string;
  };
  careInstructions: string;
}

interface ProductPageProps {
  params: {
    collectionName: string;
    productId: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { collectionName, productId } = params;
  const { addToCart, toggleCart } = useCart();

  // Find the product based on collectionName and productId
  const product = (productsData as Product[]).find(
    (p) =>
      p.collection.toLowerCase() === decodeURIComponent(collectionName).replace(/-/g, ' ').toLowerCase() &&
      p.id === decodeURIComponent(productId)
  );

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Product not found.</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="flex items-start w-full">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full object-contain"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-lg">
            {product.originalPrice && (
              <span className="line-through mr-2">Rs. {product.originalPrice}</span>
            )}
            <span className="text-red-600 font-semibold text-xl">Rs. {product.salePrice}</span>
            {product.discountPercentage && (
              <span className="ml-2 text-green-600">Save {product.discountPercentage}</span>
            )}
          </p>

          {/* Offer Banners */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-purple-200 p-4 rounded-lg">
              <p className="font-bold">Buy Any 2 & Get</p>
              <p className="text-2xl font-extrabold text-purple-700">₹ 200</p>
              <p className="text-sm">USE CODE <span className="font-bold">BUY2</span></p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg">
              <p className="font-bold">Buy Any 3 & Get</p>
              <p className="text-2xl font-extrabold text-yellow-700">₹ 400</p>
              <p className="text-sm">USE CODE <span className="font-bold">BUY3</span></p>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg">
              <p className="font-bold">Buy Any 4 & More Get</p>
              <p className="text-2xl font-extrabold text-blue-700">FLAT 10%</p>
              <p className="text-sm">USE CODE <span className="font-bold">GET10</span></p>
            </div>
          </div>

          <p className="text-sm text-gray-500">Free Shipping | COD Available in India</p>

          <div className="flex space-x-4">
            <button
              onClick={() => {
                addToCart(product);
                toggleCart(); // Open cart sidebar
              }}
              className="bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors flex-1"
            >
              ADD TO CART
            </button>
            <Link href="/checkout" className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors flex-1 text-center">
              BUY IT NOW
            </Link>
          </div>

          {/* Icons/Features */}
          <div className="flex justify-around text-center mt-6">
            <div className="flex flex-col items-center">
              <Image src="/icons/pure-cotton.svg" alt="Pure Cotton" width={30} height={30} />
              <span className="text-xs text-gray-600 mt-1">Pure Cotton</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/easy-feel.svg" alt="Easy Feel" width={30} height={30} />
              <span className="text-xs text-gray-600 mt-1">Easy Feel</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/sustainable.svg" alt="Sustainable" width={30} height={30} />
              <span className="text-xs text-gray-600 mt-1">Sustainable</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/artisanal.svg" alt="Artisanal" width={30} height={30} />
              <span className="text-xs text-gray-600 mt-1">Artisanal</span>
            </div>
          </div>

          {/* Description and Details */}
          <div className="space-y-4 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Description</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6">Product Details:</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Suit Fabric: {product.details.suitFabric}</li>
              <li>Suit Length: {product.details.suitLength}</li>
              <li>Bottom Fabric: {product.details.bottomFabric}</li>
              <li>Dupatta Fabric: {product.details.dupattaFabric}</li>
              <li>Dupatta Length: {product.details.dupattaLength}</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6">Care Instructions:</h3>
            <p className="text-sm text-gray-700">{product.careInstructions}</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <section className="py-12 border-t border-gray-200 mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">CUSTOMER REVIEWS</h2>
        <div className="flex justify-center mb-6">
          <div className="text-yellow-400 text-xl">★ ★ ★ ★ ☆</div> {/* Placeholder for star rating */}
        </div>
        <p className="text-gray-600 mb-6">Be the first to write a review</p>
        <button className="bg-[#579796] text-white py-2 px-6 rounded-md hover:bg-[#4a807f] transition-colors">
          Write a review
        </button>
      </section>

      {/* Frequently Bought Together Section */}
      <section className="py-12 border-t border-gray-200 mt-8">
        <h2 className="text-2xl font-bold mb-8 text-center">FREQUENTLY BOUGHT TOGETHER</h2>
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-4">
          {/* Placeholder for related products - replace with actual data fetching/filtering */}
          {(productsData as Product[]).filter(p => ["mulmul_dupatta_suit_CTS19602", "chiffon_dupatta_suit_CH31007", "maheshwari_silk_saree_MSI11106", "chanderi_silk_saree_CS240611"].includes(p.id)).map(product => (
            <div key={product.id} className="flex-none w-64 md:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Recently Viewed Section */}
      <section className="py-12 border-t border-gray-200 mt-8">
        <h2 className="text-2xl font-bold mb-8 text-center">RECENTLY VIEWED</h2>
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-4">
          {/* Placeholder for recently viewed products - replace with actual data or logic */}
          {(productsData as Product[]).filter(p => ["mulmul_dupatta_suit_CTS19603", "chiffon_dupatta_suit_BTSJ138", "chiffon_dupatta_suit_CH31004", "maheshwari_silk_saree_BTSJ192"].includes(p.id)).map(product => (
            <div key={product.id} className="flex-none w-64 md:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 