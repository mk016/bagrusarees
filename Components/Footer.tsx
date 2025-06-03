export default function Footer() {
  return (
    <footer className="bg-[#ecebe6] text-[#171717] py-10 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-semibold mb-2 tracking-wide">POLICIES</h3>
          <ul className="text-sm space-y-1">
            <li>Return Policy</li>
            <li>Refund policy</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Shipping Policy</li>
            <li>Wholesale Inquiry</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 tracking-wide">SIGN UP AND SAVE</h3>
          <p className="text-sm mb-2">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="flex items-center border-b border-gray-400 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" aria-label="Email" />
            <button className="flex-shrink-0 bg-[#171717] text-white py-1 px-3 rounded" type="submit" aria-label="Subscribe">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0l-7.091-7.09A2.25 2.25 0 012.25 6.993V6.75" /></svg>
            </button>
          </form>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Instagram"><img src="/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook"><img src="/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#" aria-label="YouTube"><img src="/youtube.svg" alt="YouTube" className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 tracking-wide">CONTACT US</h3>
          <p className="text-sm">Bagru Art<br />2nd Floor, 66/133 Heera Path, Mansarover<br />Jaipur ( India ) 302020.<br />Contact : +91 80058 79984<br />Email : Support@bagruart.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">© 2024. Bagruart</div>
    </footer>
  );
} 