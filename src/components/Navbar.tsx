
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const sections = ['products', 'features'];
    let found = false;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          found = true;
          break;
        }
      }
    }
    if (!found) setActiveSection(''); // Clear when not in any section
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <nav className={`fixed left-0 w-full z-50 ${isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
      <div className="bg-gray-900 text-white text-sm  px-10 py-2 md:py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-1 md:mb-0">
        Welcome to <span className="font-semibold text-yellow-400">GMAX Online Store</span>
      </div>
      <div>
        <span className="text-gray-300">Opening Hours:</span>{' '}
        <span className="text-green-400">8:00 AM - 10:00 PM</span>{' '}
        <span className="text-gray-400">(Monday - Friday)</span>
      </div>
    </div>
      <div className={`container flex items-center justify-center md:flex md:justify-between px-4 md:px-6 ${isScrolled ? 'py-2 ' : 'py-5 md:py-2'}`}>
        <div className="md:hidden absolute left-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full hover:bg-gmax-blue/20 p-2 transition"
          >
            <Menu className={`${isScrolled ? 'h-20 text-black' : `h-20 text-white`} `} /> {/* Change size and color here */}
          </Button>
        </div>

        <div className="flex items-center">
          <img
            src={isScrolled ? "/assets/logo.svg" : "/assets/logo2.svg"}
            alt="Gmax Technologies Logo"
            className={isScrolled ? "h-10 md:h-10" : "h-12 md:h-12"}
          />
          {/* <p
            className='flex flex-col justify-center items-center'
          >
            <p className='text-xl font-bold'>
              GMAX Technologies
            </p>
            <p className='text-sm'>
               Providing Quality IT Services
            </p>
          </p> */}
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#products" 
            className={` font-medium transition-colors relative 
              ${activeSection === 'products' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'products' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}
              ${isScrolled ? "txt-gmax-dark" : "text-slate-200"}`}
          >
            Products
          </a>
          <a 
            href="#features" 
            className={`font-medium transition-colors relative 
              ${activeSection === 'features' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'features' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}
              ${isScrolled ? "text-gmax-dark" : "text-slate-200"}`}
          >
            About
          </a>
          <Button className="bg-gmax-blue hover:bg-gmax-blue/90 text-white">Shop Now</Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
      <div className="md:hidden bg-white shadow-lg">
        <div className="flex flex-col justify-center items-center space-y-6 pb-5">
          <a 
            href="#products" 
            className={` text-gmax-dark font-medium pt-6 transition-colors relative
              ${activeSection === 'products' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'products' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
          >
            Products
          </a>
          <a 
            href="#features" 
            className={`text-gmax-dark font-medium transition-colors relative
              ${activeSection === 'features' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'features' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
          >
            About
          </a>
        </div>
      </div>
    )}
    </nav>
  );
};

export default Navbar;
