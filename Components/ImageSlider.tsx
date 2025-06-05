"use client";
import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/assets/Banner/Banner1.webp";
import image2 from "@/public/assets/Banner/Banner2.webp";
import image3 from "@/public/assets/Banner/Banner3.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mt-4 px-4">
      <div
        className="relative w-full pt-[40%] overflow-hidden rounded-xl shadow-lg group"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          fill={true}
          sizes="100vw"
          className="object-cover transition-all duration-500 ease-in-out cursor-pointer"
        />
        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:outline-none"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      {/* Dots (Pagination) */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
