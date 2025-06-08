import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: {
    id: string;
    collection: string;
    name: string;
    imageSrc: string;
    originalPrice: string;
    salePrice: string;
    discountPercentage: string;
    status: 'Sale' | 'Sold Out';
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const isSoldOut = product.status === 'Sold Out';
  const productUrl = `/collections/${product.collection.toLowerCase().replace(/ /g, '-')}/products/${product.id}`;
  const router = useRouter();

  return (
    <Link href={productUrl} className="flex flex-col items-center text-center relative group">
      {product.status && (
        <span className={`absolute top-2 right-2 ${isSoldOut ? 'bg-gray-500' : 'bg-red-500'} text-white text-xs font-semibold px-2 py-1 rounded`}>
          {product.status}
        </span>
      )}
      <div className="relative w-full">
        <Image src={product.imageSrc} alt={product.name} width={300} height={300} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300 w-full" />
        <div className="absolute bottom-0 left-0 right-0 p-1 bg-black bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={e => { e.preventDefault(); router.push(productUrl); }} className="w-full py-2 text-sm">Quick view</button>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium">{product.name}</p>
      <p className="text-xs text-gray-500">
        {product.originalPrice && <span className="line-through">Rs. {product.originalPrice}</span>} {
          isSoldOut ? null : (
            <>
              Rs. {product.salePrice} {product.discountPercentage && <span className="text-red-500">Save {product.discountPercentage}</span>}
            </>
          )
        }
      </p>
    </Link>
  );
} 