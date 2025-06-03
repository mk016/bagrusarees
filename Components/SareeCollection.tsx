import Image from 'next/image';

export default function SareeCollection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">SAREE COLLECTION</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/sarees/saree1.jpeg" alt="Chanderi Silk Saree" width={300} height={300} className="rounded-full border-4 border-pink-300 object-cover" />
          <span className="mt-2 text-sm font-medium">CHANDERI SILK SAREE</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/sarees/saree2.jpeg" alt="Kota Doria Saree" width={300} height={300} className="rounded-full border-4 border-pink-300 object-cover" />
          <span className="mt-2 text-sm font-medium">KOTA DORIA SAREE</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/sarees/saree3.jpeg" alt="Maheshwari Silk Saree" width={300} height={300} className="rounded-full border-4 border-pink-300 object-cover" />
          <span className="mt-2 text-sm font-medium">MAHESHWARI SILK SAREE</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/sarees/saree4.jpeg" alt="Pure Cotton Saree" width={300} height={300} className="rounded-full border-4 border-pink-300 object-cover" />
          <span className="mt-2 text-sm font-medium">PURE COTTON SAREE</span>
        </div>
      </div>
    </section>
  );
} 