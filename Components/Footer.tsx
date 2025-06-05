export default function Footer() {
  return (
    <footer className="bg-[#ecebe6] text-[#171717] py-10 px-4 mt-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(/footer-bg.png)`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 z-10 relative">
        <div>
          <h3 className="font-semibold mb-4 tracking-wider text-lg">LEGAL</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Returns & Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">All Products</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 tracking-wider text-lg">HELP</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQ's</a></li>
            <li><a href="#" className="hover:underline">Track Your Order</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 tracking-wider text-lg">CONTACT US</h3>
          <address className="text-sm not-italic space-y-2">
            <p><strong>Bagru HastKala Printers</strong></p>
            <p>Bagru - 303007,<br />Rajasthan, India</p>
            <p>+91 9024306866</p>
            <p><a href="mailto:bagrusarees@gmail.com" className="hover:underline">bagrusarees@gmail.com</a></p>
          </address>
        </div>
        <div>
          <h3 className="font-semibold mb-4 tracking-wider text-lg">SIGN UP AND SAVE</h3>
          <p className="text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="flex items-center border-b border-gray-400 py-2 mb-4">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" aria-label="Email" />
            <button className="flex-shrink-0" type="submit" aria-label="Subscribe">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0l-7.091-7.09A2.25 2.25 0 012.25 6.993V6.75" /></svg>
            </button>
          </form>
        </div>
        <div>
          <h3 className="font-semibold mb-4 tracking-wider text-lg">CONTACT FOR WHOLESALE</h3>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Instagram"><img src="/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" aria-label="Facebook"><img src="/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" aria-label="YouTube"><img src="/youtube.svg" alt="YouTube" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">© 2025 Bagru Sarees</div>
    </footer>
  );
} 