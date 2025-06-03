import Image from 'next/image';
import ImageSlider from '../Components/ImageSlider';
import SuitCollection from '../Components/SuitCollection';
import SareeCollection from '../Components/SareeCollection';
import KotaDupattaSuitSets from '../Components/KotaDupattaSuitSets';
import PopularMaheshwariSilkSuits from '../Components/PopularMaheshwariSilkSuits';
import LinenSareeCollection from '../Components/LinenSareeCollection';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
  
      {/* Image Slider Section */}
      <section className="py-12 px-4">
        <ImageSlider />
      </section>

      {/* Suit Collection */}
      <SuitCollection />

      {/* Saree Collection */}
      <SareeCollection />

      {/* Kota Dupatta Suit Sets */}
      <KotaDupattaSuitSets />

      {/* Popular Maheshwari Silk Suits */}
      <PopularMaheshwariSilkSuits />

      {/* Linen Saree Collection */}
      <LinenSareeCollection />

      {/* Add more sections for Saree Collection, Testimonials, Store Info, etc. as needed */}
    </main>
  );
}
