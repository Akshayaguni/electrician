import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darkNavy text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-start">
          <span className="text-xl font-bold mb-2">Abhishek Pokar Electrical Services</span>
          <span className="mb-1">Certified Electrician | Gujarat, India</span>
          <span className="mb-1">Phone: +91-9712094451</span>
          <span className="mb-1">WhatsApp: +91-9712094451</span>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 items-center">
          <a href="#" className="hover:text-electricBlue">Home</a>
          <a href="#about" className="hover:text-electricBlue">About</a>
          <a href="#services" className="hover:text-electricBlue">Services</a>
          <a href="#projects" className="hover:text-electricBlue">Projects</a>
          <a href="#contact" className="hover:text-electricBlue">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-electricBlue"><Facebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-electricBlue"><Instagram /></a>
          <a href="https://wa.me/919712094451" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-electricBlue"><MessageCircle /></a>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-white/70">
        &copy; 2026 Akshay. All rights reserved.
      </div>
    </footer>
  );
}