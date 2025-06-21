'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/Components/CartContext';
import { useRouter, useSearchParams } from 'next/navigation';
// import { useSession, signOut } from 'next-auth/react';

interface NavbarProps {
  // Removed: onCartClick: () => void;
}

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

export default function Navbar(/* Removed: { onCartClick }: NavbarProps */) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, toggleCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const { data: session, status } = useSession();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      router.push(`/search?query=${searchQuery.trim()}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // const handleLogout = async () => {
  //   await signOut({ callbackUrl: '/' });
  // };

  return (
    <>
  
      <nav className="w-full bg-white py-6 px-8 flex items-center justify-between" aria-label="Main Navigation">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="Bagru Art Logo" className="h-14 w-14" />
          <div className="h-12 border-l border-gray-300"></div>
          <div>
            <span className="font-bold text-lg tracking-wide block text-gray-800">Bagru Sarees</span>
            <span className="text-xs text-gray-600">Art & Elegance</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="focus:outline-none" aria-label="Search" onClick={toggleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <div className="relative group">
            {/* {status === 'loading' ? (
              <div className="btn">Loading...</div>
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                  className="btn flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={openIndex === 0}
                >
                  <span>{session.user?.name || session.user?.email}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <ul className={`absolute right-0 top-full min-w-[200px] bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200 ${openIndex === 0 ? 'block' : 'hidden'}`} role="menu">
                  <li>
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100" role="menuitem">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/auth/login" className="btn">
                Login
              </Link>
            )} */}
            <div className="btn">Guest User</div>
          </div>
          <button onClick={toggleCart} className="relative" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 15.75m-2.394-10.478L20.25 6.75m0 0l-1.5 9.75a1.125 1.125 0 01-1.125.938H7.125a1.125 1.125 0 01-1.125-.938l-1.5-9.75m15.75 0H6.375" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
          <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-[1000] flex flex-col items-center justify-center p-4">
          <button onClick={toggleSearch} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchSubmit}
            />
          </div>
        </div>
      )}
      <div className={`w-full bg-white border-t border-gray-200 py-3 md:flex justify-center ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex gap-8 text-sm font-medium tracking-wider uppercase text-gray-700 flex-col md:flex-row items-center px-4 md:px-0">
          {mainNavItems.map((item, idx) => (
            <li
              key={item.label}
              className="relative group w-full text-center md:w-auto"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {item.type === 'link' ? (
                <Link href={item.href || '#'} className="block py-2 md:py-0">{item.label}</Link>
              ) : (
                <>
                  <button
                    className="focus:outline-none flex items-center justify-center gap-1 w-full py-2 md:py-0"
                    aria-haspopup="true"
                    aria-expanded={openIndex === idx}
                  >
                    {item.label}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <ul
                    className={`md:absolute left-0 top-full min-w-[220px] bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200 ${openIndex === idx ? 'block' : 'hidden'} ${openIndex === idx && 'md:block'}`}
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