
import React, { useState, useEffect } from 'react';
import { Menu, User, Laptop, Info  } from 'lucide-react';
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
    <nav className={`fixed left-0 w-full z-50 ${isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'}
    ${isMobileMenuOpen ? 'bg-white' : 'bg-transparent'}`}>

      {/* Top Nav */}
      <div className="w-full bg-black text-slate-300 px-4 md:px-10 py-3 text-sm border-b-2 border-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left">
          
          {/* Welcome Text */}
          <div className="mb- md:mb-0 text-sm font-semibold">
            Welcome to <span className="font-semibold text-yellow-400">GMAX Online Store</span>
          </div>

          {/* Shop and User Buttons */}
          {/* <div className="flex items-center gap-4 md:gap-7">
            <a href="https://gmaxtechnology.com/shop/">
              <button className="flex items-center gap-2 transition-colors text-black font-medium py-1.5 px-4 rounded-md">
                <ShoppingBag className="w-4 h-4" />
                Shop
              </button>
            </a>
            <a href="https://gmaxtechnology.com/my-account/">
              <button className="flex items-center gap-2 bg-white  transition-colors text-gmax-dark font-medium py-1.5 px-4 rounded-md">
                <User className="w-4 h-4" />
                User
              </button>
            </a>
          </div> */}

          {/* Opening Hours */}
          <div className="text-sm font-semibold">
            <span className="">Opening Hours:</span>{' '}
            <span className="text-green-500 font-medium">8:00 AM - 10:00 PM</span>{' '}
            <span className="">(Monday - Friday)</span>
          </div>
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
            <Menu
              className={`h-20 ${
                isMobileMenuOpen ? 'text-black' : isScrolled ? 'text-black' : 'text-white'
              }`}
            />
          </Button>
        </div>

        <div className="flex items-center">
          <img
            src={
                isMobileMenuOpen
                  ? "/assets/logo.svg" // show logo2 when menu is open
                  : isScrolled
                  ? "/assets/logo.svg"
                  : "/assets/logo2.svg"
              }
            alt="Gmax Technologies Logo"
            className={
              isMobileMenuOpen
                ? "h-10"
                : isScrolled ?
                "h-10 md:h-10" 
                : "h-10 md:h-12"}
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
            className={`flex gap-2 font-medium transition-colors relative 
              ${activeSection === 'products' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:top-7 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'products' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}
              ${isScrolled ? "txt-gmax-dark" : "text-white"}`}
          >
            <Laptop /> Products
          </a>
          <a 
            href="#features" 
            className={`flex gap-2 font-medium transition-colors relative 
              ${activeSection === 'features' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:top-7 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'features' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}
              ${isScrolled ? "text-gmax-dark" : "text-white"}`}
          >
            <Info /> About
          </a>
          <a 
            href="https://gmaxtechnology.com/my-account/" 
            className={`font-medium  flex gap-2 transition-colors relative
              ${activeSection === 'products' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-2 after:left-0
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${isScrolled ? "text-gmax-dark" : "text-white"}`}
          >
            <User />My Account
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
      <div className={`md:hidden  shadow-lg bg-white`}>
        <div className="flex flex-col justify-center items-center space-y-6 pb-5">
          <a 
            href="#products" 
            className={`flex gap-2 font-medium pt-5 transition-colors relative
              ${activeSection === 'products' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:top-12 after:bottom-0 after:left-0
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'products' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}
              ${isScrolled ? "text-gmax-dark" : "text-gmax-dark"}`}
          >
            <Laptop /> Products
          </a>
          <a 
            href="#features" 
            className={`font-medium flex gap-2 transition-colors relative
              ${activeSection === 'features' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:top-7 after:bottom-0 after:left-0
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'features' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}
              ${isScrolled ? "text-gmax-dark" : "text-gmax-dark"}`}
          >
            <Info /> About
          </a>
          <a 
            href="https://gmaxtechnology.com/my-account/" 
            className={`font-medium  flex gap-2 transition-colors relative
              ${activeSection === 'products' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${isScrolled ? "text-gmax-dark" : "text-gmax-dark"}`}
          >
            <User />My Account
          </a>
        </div>
      </div>
    )}
    </nav>
  );
};

export default Navbar;
