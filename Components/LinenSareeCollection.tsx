import Image from 'next/image';
import Link from 'next/link';

export default function LinenSareeCollection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">LINEN SAREE COLLECTION</h2>
      <div className="text-center mb-8">
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">VIEW ALL</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/linen1.jpg" alt="HAND BLOCK PRINTED COTTON LINEN SAREE WITH BLOUSE ( LS0701 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">HAND BLOCK PRINTED COTTON LINEN SAREE WITH BLOUSE ( LS0701 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 2,599.00</span> Rs. 1,499.00 <span className="text-red-500">Save 42%</span></p>
        </div>
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/linen2.jpg" alt="PLAIN COTTON LINEN SAREE WITH BLOUSE ( LS0529 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">PLAIN COTTON LINEN SAREE WITH BLOUSE ( LS0529 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 2,599.00</span> Rs. 1,099.00 <span className="text-red-500">Save 58%</span></p>
        </div>
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/linen3.jpg" alt="PLAIN COTTON LINEN SAREE WITH BLOUSE ( LS0528 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">PLAIN COTTON LINEN SAREE WITH BLOUSE ( LS0528 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 2,599.00</span> Rs. 1,099.00 <span className="text-red-500">Save 58%</span></p>
        </div>
        <div className="flex flex-col items-center text-center relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
          <Image src="/linen4.jpg" alt="PLAIN COTTON LINEN SAREE WITH BLOUSE ( LS0527 )" width={200} height={250} className="rounded-lg shadow-md object-cover group-hover:scale-105 transition-transform duration-300" />
          <p className="mt-4 text-sm font-medium">PLAIN COTTON LINEN SAREE WITH BLOUSE ( LS0527 )</p>
          <p className="text-xs text-gray-500"><span className="line-through">Rs. 2,599.00</span> Rs. 1,099.00 <span className="text-red-500">Save 58%</span></p>
        </div>
      </div>
    </section>
  );
} 