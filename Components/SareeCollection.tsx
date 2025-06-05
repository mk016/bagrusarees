import Image from 'next/image';

export default function SareeCollection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">SAREE COLLECTION</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-pink-300">
            <Image src="/assets/sarees/saree1.jpeg" alt="Chanderi Silk Saree" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">CHANDERI SILK SAREE</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-pink-300">
            <Image src="/assets/sarees/saree2.jpeg" alt="Kota Doria Saree" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">KOTA DORIA SAREE</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-pink-300">
            <Image src="/assets/sarees/saree3.jpeg" alt="Maheshwari Silk Saree" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">MAHESHWARI SILK SAREE</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-pink-300">
            <Image src="/assets/sarees/saree4.jpeg" alt="Pure Cotton Saree" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">PURE COTTON SAREE</span>
        </div>
      </div>
    </section>
  );
} 