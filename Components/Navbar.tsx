'use client';

import Link from 'next/link';
import { useState } from 'react';

const mainNavItems = [
  { type: 'link', label: 'Home', href: '/' },
  { type: 'link', label: 'Dress Material', href: '/dress-material' },
  {
    type: 'dropdown',
    label: 'SAREES',
    subItems: [
      { label: 'Cotton Saree', href: '/saree/cotton' },
      { label: 'Kota Doriya Saree', href: '/saree/kota-doriya' },
      { label: 'Chanderi Silk Saree', href: '/saree/chanderi-silk' },
      { label: 'Maheshwari Silk Saree', href: '/saree/maheshwari-silk' },
      { label: 'Plain Linen Saree', href: '/saree/plain-linen' },
      { label: 'Plain Kota Doriya Saree', href: '/saree/plain-kota-doriya' },
    ],
  },
  {
    type: 'dropdown',
    label: 'SUIT SETS',
    subItems: [
      { label: 'Cotton Suit MulMul Dupatta', href: '/suit-set/cotton-mulmul-dupatta' },
      { label: 'Cotton Suit Kota Doriya Dupatta', href: '/suit-set/cotton-kota-doriya-dupatta' },
      { label: 'Cotton Suit Chanderi Dupatta', href: '/suit-set/cotton-chanderi-dupatta' },
      { label: 'Kota Doriya Suit Set', href: '/suit-set/kota-doriya' },
      { label: 'Hand Work Suit Set', href: '/suit-set/hand-work' },
      { label: 'Cotton Suit Kota Silk Dupatta', href: '/suit-set/cotton-kota-silk-dupatta' },
      { label: 'Chanderi Silk Suit Set', href: '/suit-set/chanderi-silk' },
      { label: 'Maheshwari Silk Suit Set', href: '/suit-set/maheshwari-silk' },
      { label: 'Cotton Suit With Chiffon Dupatta', href: '/suit-set/cotton-chiffon-dupatta' },
      { label: 'Embroidered Cotton suit with fancy dupatta', href: '/suit-set/embroidered-cotton-fancy-dupatta' },
      { label: 'Muslin Silk Suit Set', href: '/suit-set/muslin-silk' },
      { label: 'Hand Work Gota Cotton Dupatta Suit', href: '/suit-set/handwork-gota-cotton-dupatta' },
    ],
  },
  {
    type: 'dropdown',
    label: 'FABRICS',
    subItems: [
      { label: 'Screen Print Fabric', href: '/fabric/screen-print' },
      { label: 'Cotton Printed Combo Set', href: '/fabric/cotton-printed-combo' },
      { label: 'Hand Block Printed Fabric', href: '/fabric/hand-block-printed' },
      { label: 'Running Fabric', href: '/fabric/running' },
    ],
  },
  {
    type: 'dropdown',
    label: 'DUPATTAS',
    subItems: [
      { label: 'Kota Doriya Duptta', href: '/dupatta/kota-doriya' },
      { label: 'Chanderi Silk Dupatta', href: '/dupatta/chanderi-silk' },
      { label: 'Organza Duptta', href: '/dupatta/organza' },
      { label: 'MulMul Cotton Dupatta', href: '/dupatta/mulmul-cotton' },
    ],
  },
  {
    type: 'dropdown',
    label: 'BEDSHEETS',
    subItems: [
      { label: 'Cotton Printed Bedsheets', href: '/bedsheet/cotton-printed' },
      { label: 'Hand Block Print BedSheet', href: '/bedsheet/hand-block-print' },
    ],
  },
  {
    type: 'dropdown',
    label: 'BAGS',
    subItems: [
      { label: 'Handcrafted traditional bags', href: '/bags/handcrafted-traditional' },
      { label: 'Block printed tote bags', href: '/bags/block-printed-tote' },
      { label: 'Ethnic clutches', href: '/bags/ethnic-clutches' },
    ],
  },
  {
    type: 'dropdown',
    label: "MAN'S COLLECTION",
    subItems: [
      { label: "Men's kurtas with Bagru prints", href: '/men/kurtas-bagru' },
      { label: 'Traditional shirts', href: '/men/traditional-shirts' },
      { label: 'Nehru jackets', href: '/men/nehru-jackets' },
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bg-white border-b border-gray-200 py-1 px-8 flex justify-end items-center">
        <div className="flex gap-3 text-sm text-gray-600">
          <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          <a href="#" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.48a2.78 2.78 0 0 0-1.94 1.94C2 8.16 2 12 2 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 1.94c1.72.48 8.6.48 8.6.48s6.88 0 8.6-.48a2.78 2.78 0 0 0 1.94-1.94C22 15.84 22 12 22 12s0-3.84-.46-5.58z"></path><path d="M10 15l5-3-5-3z"></path></svg></a>
        </div>
      </div>
      <nav className="w-full bg-white py-6 px-8 flex items-center justify-between" aria-label="Main Navigation">
        <div className="flex items-center gap-6">
          <button className="focus:outline-none" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Bagru Art Logo" className="h-12 w-12" />
          <div className="h-12 border-l border-gray-300"></div>
          <div>
            <span className="font-bold text-lg tracking-wide block text-gray-800">Bagru Sarees</span>
            <span className="text-xs text-gray-600">Art & Elegance</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth/login" aria-label="Login">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 12h-12m0 0l3.75-3.75M6.75 12l3.75 3.75" />
            </svg>
          </Link>
          <Link href="/cart" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 15.75m-2.394-10.478L20.25 6.75m0 0l-1.5 9.75a1.125 1.125 0 01-1.125.938H7.125a1.125 1.125 0 01-1.125-.938l-1.5-9.75m15.75 0H6.375" />
            </svg>
          </Link>
        </div>
      </nav>
      <div className="w-full bg-white border-t border-gray-200 py-3 flex justify-center">
        <ul className="flex gap-8 text-sm font-medium tracking-wider uppercase text-gray-700">
          {mainNavItems.map((item, idx) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {item.type === 'link' ? (
                <Link href={item.href || '#'}>{item.label}</Link>
              ) : (
                <>
                  <button
                    className="focus:outline-none flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded={openIndex === idx}
                  >
                    {item.label}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <ul
                    className={`absolute left-0 top-full min-w-[220px] bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200 ${openIndex === idx ? 'block' : 'hidden'}`}
                    role="menu"
                  >
                    {item.subItems?.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap" role="menuitem">{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}