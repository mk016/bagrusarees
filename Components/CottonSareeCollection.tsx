import Link from 'next/link';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

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

export default function CottonSareeCollection() {
  const cottonSarees = (productsData as Product[]).filter(product => product.collection === 'Cotton Saree Collection');

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">COTTON SAREE COLLECTION</h2>
      <div className="text-center mb-8">
        <Link href="/collections/cotton-saree-collection" className="text-sm font-medium text-gray-700 hover:text-gray-900">VIEW ALL</Link>
      </div>
      <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-4">
        {cottonSarees.map(product => (
          <div key={product.id} className="flex-none w-64 md:w-auto">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
} 