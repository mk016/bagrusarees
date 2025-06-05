import Image from 'next/image';

export default function SuitCollection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">SUIT COLLECTION</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/chiffon_Dupatta.webp" alt="Chiffon Dupatta Suit Set" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">CHIFFON DUPATTA SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/suit2.webp" alt="Cotton Suit Set" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">COTTON SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/suit3.webp" alt="Cotton Top & Bottom Set" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">COTTON TOP & BOTTOM SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/suit4.webp" alt="Kota Doria Dupatta Suit Set" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">KOTA DORIA DUPATTA SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/suit5.webp" alt="Chanderi Silk Suit Set" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">CHANDERI SILK SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/suit6.webp" alt="Maheshwari Silk Suits" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">MAHESHWARI SILK SUITS</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/suit7.webp" alt="Gota Patti Suit Set" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">GOTA PATTI SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-full pt-[100%] border-4 border-yellow-200">
            <Image src="/assets/Suit/suit8.webp" alt="Stitched Collection" fill={true} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
          <span className="mt-2 text-sm font-medium">STITCHED COLLECTION</span>
        </div>
      </div>
    </section>
  );
} 