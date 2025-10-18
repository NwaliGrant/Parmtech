import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#E7E7E9] shadow-md z-50 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center h-16">
        {/* Logo (Left) */}
        <div className="font-bold text-xl">
          Logo
        </div>

        {/* Links (Center) - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#" className="text-gray-800 hover:text-black transition">Services</a></li>
          <li><a href="#" className="text-gray-800 hover:text-black transition">Portfolio</a></li>
          <li><a href="#" className="text-gray-800 hover:text-black transition">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-black transition">Solution</a></li>
        </ul>

        {/* Button (Right) - hidden on mobile */}
        <button className="hidden md:block bg-[#0F172A] text-white px-6 py-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-300">
          Contact Us
        </button>

        {/* Hamburger Menu (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#E7E7E9] border-t border-gray-300 px-4 pt-3 pb-4 space-y-2">
          <a href="#" className="block py-2 text-gray-800 hover:text-black transition" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-black transition" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-black transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-black transition" onClick={() => setIsOpen(false)}>Solution</a>
          <button
            className="w-full mt-3 bg-[#0F172A] text-white py-2 rounded-lg hover:bg-[#1E293B] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
