"use client";

import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import productsData from '@/data/products.json';
import ProductCard from '../../../Components/ProductCard';
import CollectionFilters from '../../../Components/CollectionFilters';
import Link from 'next/link';

interface Product {
  id: string;
  collection: string;
  name: string;
  imageSrc: string;
  originalPrice: string;
  salePrice: string;
  discountPercentage: string;
  status: 'Sale' | 'Sold Out';
}

interface CollectionPageProps {
  // params: { collectionName: string };
  // searchParams: { [key: string]: string | string[] | undefined };
}

export default function CollectionPage({}: CollectionPageProps) {
  const params = useParams();
  const searchParams = useSearchParams();

  const decodedCollectionName = decodeURIComponent(params.collectionName as string).replace(/-/g, ' ');

  let filteredProducts = (productsData as Product[]).filter(
    (product) => product.collection.toLowerCase() === decodedCollectionName.toLowerCase()
  );

  // Apply availability filter
  const availabilityFilter = searchParams.get('availability');
  if (availabilityFilter === 'in-stock') {
    filteredProducts = filteredProducts.filter(product => product.status !== 'Sold Out');
  } else if (availabilityFilter === 'out-of-stock') {
    filteredProducts = filteredProducts.filter(product => product.status === 'Sold Out');
  }

  // Apply price filter
  const minPrice = parseFloat(searchParams.get('minPrice') || '0');
  const maxPrice = parseFloat(searchParams.get('maxPrice') || '999999'); // A large default value
  filteredProducts = filteredProducts.filter(product => {
    const productPrice = parseFloat(product.salePrice.replace(/,/g, ''));
    return productPrice >= minPrice && productPrice <= maxPrice;
  });

  // Apply category filter (if multiple categories selected, it's an OR logic)
  const selectedCategories = searchParams.getAll('category');
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.collection));
  }

  // Apply color filter (assuming products.json has a 'color' field)
  const selectedColors = searchParams.getAll('color');
  if (selectedColors.length > 0) {
    // This will only work if 'color' property is added to products.json
    // For demonstration, let's assume a dummy 'color' property exists on products for now
    // filteredProducts = filteredProducts.filter(product => selectedColors.includes(product.color));
  }

  // Apply fabric filter (assuming products.json has a 'fabric' field)
  const selectedFabrics = searchParams.getAll('fabric');
  if (selectedFabrics.length > 0) {
    // This will only work if 'fabric' property is added to products.json
    // For demonstration, let's assume a dummy 'fabric' property exists on products for now
    // filteredProducts = filteredProducts.filter(product => selectedFabrics.includes(product.fabric));
  }

  return (
    <main className="max-w-7xl mx-auto py-6 px-4">
      {/* Collection Hero Section */}
      <section className="relative bg-[#f8f6f2] py-12 px-4 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7a4a1e] mb-4 uppercase">
          {decodedCollectionName}
        </h1>
        <p className="text-lg text-gray-700">Explore our exquisite collection of {decodedCollectionName.toLowerCase()}.</p>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image src="/flower-bg.svg" alt="Background Flower" width={600} height={600} className="opacity-10" />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64">
          <CollectionFilters />
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">{filteredProducts.length} products</p>
            {/* Sorting dropdown can be added here */}
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No products found in this collection with the selected filters.</p>
          )}
        </section>
      </div>
    </main>
  );
} 