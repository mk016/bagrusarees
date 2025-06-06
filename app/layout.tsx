import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CartProvider } from '@/Components/CartContext';
import CartSidebar from '@/Components/CartSidebar';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bagru Art | Handblock Suits & Sarees | Jaipur",
  description: "Shop authentic handblock printed suits, sarees, and home decor from Bagru Art. 100% customer satisfaction. Summer collection now live!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
