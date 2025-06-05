"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import productsData from '../data/products.json';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default function CollectionFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialMinPrice = productsData.reduce((min, p) => Math.min(min, parseFloat(p.salePrice.replace(/,/g, ''))), Infinity);
  const initialMaxPrice = productsData.reduce((max, p) => Math.max(max, parseFloat(p.salePrice.replace(/,/g, ''))), 0);

  const [minPrice, setMinPrice] = useState(parseFloat(searchParams.get('minPrice') || initialMinPrice.toString()));
  const [maxPrice, setMaxPrice] = useState(parseFloat(searchParams.get('maxPrice') || initialMaxPrice.toString()));
  const [selectedCategories, setSelectedCategories] = useState<string[]>(searchParams.getAll('category'));
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(searchParams.getAll('availability'));
  const [selectedColors, setSelectedColors] = useState<string[]>(searchParams.getAll('color'));
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>(searchParams.getAll('fabric'));

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('minPrice', minPrice.toString());
    params.set('maxPrice', maxPrice.toString());

    selectedCategories.forEach(cat => params.append('category', cat));
    selectedAvailability.forEach(avail => params.append('availability', avail));
    selectedColors.forEach(color => params.append('color', color));
    selectedFabrics.forEach(fabric => params.append('fabric', fabric));

    router.push(`?${params.toString()}`);
  }, [minPrice, maxPrice, selectedCategories, selectedAvailability, selectedColors, selectedFabrics, router, searchParams]);

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedAvailability(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCategories(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(item => item !== color) : [...prev, color]
    );
  };

  const handleFabricChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedFabrics(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const uniqueCategories = Array.from(new Set(productsData.map(p => p.collection)));
  // Dummy data for colors and fabrics until they are in products.json
  const uniqueColors = ['Black', 'Blue', 'Orange', 'Pink', 'Red', 'White'];
  const uniqueFabrics = ['Cotton', 'Silk', 'Linen'];

  return (
    <div className="w-full lg:w-64 p-4 space-y-4">
      <FilterSection title="AVAILABILITY">
        <label className="flex items-center space-x-2 text-sm text-gray-700">
          <input type="checkbox" value="in-stock" checked={selectedAvailability.includes('in-stock')} onChange={handleAvailabilityChange} className="form-checkbox text-indigo-600" />
          <span>In stock ({productsData.filter(p => p.status !== 'Sold Out').length})</span>
        </label>
        <label className="flex items-center space-x-2 text-sm text-gray-700 mt-2">
          <input type="checkbox" value="out-of-stock" checked={selectedAvailability.includes('out-of-stock')} onChange={handleAvailabilityChange} className="form-checkbox text-indigo-600" />
          <span>Out of stock ({productsData.filter(p => p.status === 'Sold Out').length})</span>
        </label>
      </FilterSection>

      <FilterSection title="PRICE">
        <div className="text-sm text-gray-700 mb-2">
          Rs. {minPrice.toFixed(2)} — Rs. {maxPrice.toFixed(2)}
        </div>
        <input
          type="range"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={minPrice}
          onChange={(e) => setMinPrice(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
        />
      </FilterSection>

      <FilterSection title="CATEGORY">
        {uniqueCategories.map(category => (
          <label key={category} className="flex items-center space-x-2 text-sm text-gray-700 mt-2">
            <input type="checkbox" value={category} checked={selectedCategories.includes(category)} onChange={handleCategoryChange} className="form-checkbox text-indigo-600" />
            <span>{category} ({productsData.filter(p => p.collection === category).length})</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection title="COLOR">
        <div className="flex flex-wrap gap-2">
          {uniqueColors.map(color => (
            <div key={color} className={`w-6 h-6 rounded-full ${color === 'White' ? 'bg-white border border-gray-500' : `bg-${color.toLowerCase()}-500`} cursor-pointer ${selectedColors.includes(color) ? 'ring-2 ring-offset-2 ring-indigo-600' : ''}`}
            onClick={() => handleColorChange(color)} title={color}></div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="FABRIC">
        {uniqueFabrics.map(fabric => (
          <label key={fabric} className="flex items-center space-x-2 text-sm text-gray-700 mt-2">
            <input type="checkbox" value={fabric} checked={selectedFabrics.includes(fabric)} onChange={handleFabricChange} className="form-checkbox text-indigo-600" />
            <span>{fabric} (0)</span>
          </label>
        ))}
      </FilterSection>
    </div>
  );
} 