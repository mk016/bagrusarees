import Image from 'next/image';
import ImageSlider from '../Components/ImageSlider';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <ImageSlider />
      {/* Add more sections for Saree Collection, Testimonials, Store Info, etc. as needed */}
    </main>
  );
}
