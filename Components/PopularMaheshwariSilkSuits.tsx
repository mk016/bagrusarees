import Image from 'next/image';
import Link from 'next/link';

export default function PopularMaheshwariSilkSuits() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">POPULAR MAHESHWARI SILK SUITS</h2>
      <div className="text-center mb-8">
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">VIEW ALL</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/maheshwari1.jpg" alt="MAHESHWARI SILK SUIT SET ( BTSJ 821 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">MAHESHWARI SILK SUIT SET ( BTSJ 821 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 3,999.00</span> Rs. 2,799.00 <span className="text-red-500">Save 30%</span></p>
        </div>
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/maheshwari2.jpg" alt="MAHESHWARI SILK SUIT SET ( BTSJ 820 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">MAHESHWARI SILK SUIT SET ( BTSJ 820 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 3,999.00</span> Rs. 2,799.00 <span className="text-red-500">Save 30%</span></p>
        </div>
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/maheshwari3.jpg" alt="MAHESHWARI SILK SUIT SET ( MH41101 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">MAHESHWARI SILK SUIT SET ( MH41101 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 3,999.00</span> Rs. 2,799.00 <span className="text-red-500">Save 30%</span></p>
        </div>
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/maheshwari4.jpg" alt="MAHESHWARI SILK SUIT SET ( MH41102 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">MAHESHWARI SILK SUIT SET ( MH41102 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 3,999.00</span> Rs. 2,799.00 <span className="text-red-500">Save 30%</span></p>
        </div>
      </div>
    </section>
  );
} 