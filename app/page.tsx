"use client";

import Image from 'next/image';
import ImageSlider from '../Components/ImageSlider';
import SuitCollection from '../Components/SuitCollection';
import SareeCollection from '../Components/SareeCollection';
import KotaDupattaSuitSets from '../Components/KotaDupattaSuitSets';
import PopularMaheshwariSilkSuits from '../Components/PopularMaheshwariSilkSuits';
import LinenSareeCollection from '../Components/LinenSareeCollection';
import KotaDoriaSareeCollection from '../Components/KotaDoriaSareeCollection';
import MulmulDupattaSuitSets from '../Components/MulmulDupattaSuitSets';
import ChiffonDupattaSuitSets from '../Components/ChiffonDupattaSuitSets';
import MaheshwariSilkSareeCollection from '../Components/MaheshwariSilkSareeCollection';
import ChanderiSilkSareeCollection from '../Components/ChanderiSilkSareeCollection';
import CottonSareeCollection from '../Components/CottonSareeCollection';

export default function Home() {
  return (  
      <main className="bg-white min-h-screen">
      {/* Hero Section */}
    

      {/* Image Slider Section */}
      <section className="py-12">
        <ImageSlider />
      </section>

      {/* Suit Collection */}
      <SuitCollection />

      {/* Saree Collection */}
      <SareeCollection />

      {/* Kota Dupatta Suit Sets (from original image) */}
      <KotaDupattaSuitSets />

      {/* Popular Maheshwari Silk Suits (from original image) */}
      <PopularMaheshwariSilkSuits />

      {/* Linen Saree Collection (from original image) */}
      <LinenSareeCollection />

      {/* New sections based on provided images */}
      <KotaDoriaSareeCollection />
      <MulmulDupattaSuitSets />
      <ChiffonDupattaSuitSets />
      <MaheshwariSilkSareeCollection />
      <ChanderiSilkSareeCollection />
      <CottonSareeCollection />

      {/* Add more sections for Saree Collection, Testimonials, Store Info, etc. as needed */}
    </main>
  );
}
