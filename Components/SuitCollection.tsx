import Image from 'next/image';

export default function SuitCollection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">SUIT COLLECTION</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/Suit/chiffon_Dupatta.webp" alt="Chiffon Dupatta Suit Set" width={300} height={300} className="rounded-full object-cover" />
          <span className="mt-2 text-sm font-medium">CHIFFON DUPATTA SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/Suit/suit2.webp" alt="Cotton Suit Set" width={300} height={300} className="rounded-full border-4 border-yellow-200 object-cover" />
          <span className="mt-2 text-sm font-medium">COTTON SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/Suit/suit3.webp" alt="Cotton Top & Bottom Set" width={300} height={300} className="rounded-full border-4 border-yellow-200 object-cover" />
          <span className="mt-2 text-sm font-medium">COTTON TOP & BOTTOM SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/Suit/suit4.webp" alt="Kota Doria Dupatta Suit Set" width={300} height={300} className="rounded-full border-4 border-yellow-200 object-cover" />
          <span className="mt-2 text-sm font-medium">KOTA DORIA DUPATTA SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/Suit/suit5.webp" alt="Chanderi Silk Suit Set" width={300} height={300} className="rounded-full border-4 border-yellow-200 object-cover" />
          <span className="mt-2 text-sm font-medium">CHANDERI SILK SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
            <Image src="/assets/Suit/suit6.webp" alt="Maheshwari Silk Suits" width={300} height={300} className="rounded-full border-4 border-yellow-200 object-cover" />
          <span className="mt-2 text-sm font-medium">MAHESHWARI SILK SUITS</span>
        </div>
        <div className="flex flex-col items-center text-center">
            <Image src="/assets/Suit/suit7.webp" alt="Gota Patti Suit Set" width={300} height={300} className="rounded-full border-4 border-yellow-200 object-cover" />
          <span className="mt-2 text-sm font-medium">GOTA PATTI SUIT SET</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/Suit/suit8.webp" alt="Stitched Collection" width={300} height={300} className="rounded-full border-4 border-yellow-200 object-cover" />
          <span className="mt-2 text-sm font-medium">STITCHED COLLECTION</span>
        </div>
      </div>
    </section>
  );
} 