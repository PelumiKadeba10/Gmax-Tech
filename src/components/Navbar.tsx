
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently in view
      const sections = ['home', 'products', 'features', 'testimonials', 'cta'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/79f44857-fc17-44ce-ab3d-c7813317af2a.png"
            alt="Gmax Technologies Logo"
            className="h-10 md:h-12"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#home" 
            className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors relative 
              ${activeSection === 'home' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'home' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
          >
            Home
          </a>
          <a 
            href="#products" 
            className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors relative 
              ${activeSection === 'products' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'products' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
          >
            Products
          </a>
          <a 
            href="#features" 
            className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors relative 
              ${activeSection === 'features' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'features' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors relative 
              ${activeSection === 'testimonials' ? 'text-gmax-blue' : ''}
              after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
              after:bg-gmax-blue after:origin-bottom-right after:transition-transform after:duration-300
              ${activeSection === 'testimonials' ? 'after:scale-x-100 after:origin-bottom-left' : 'hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
          >
            Contact
          </a>
          <Button className="bg-gmax-blue hover:bg-gmax-blue/90 text-white">Shop Now</Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <a 
              href="#home" 
              className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors
                ${activeSection === 'home' ? 'text-gmax-blue' : ''}`}
            >
              Home
            </a>
            <a 
              href="#products" 
              className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors
                ${activeSection === 'products' ? 'text-gmax-blue' : ''}`}
            >
              Products
            </a>
            <a 
              href="#features" 
              className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors
                ${activeSection === 'features' ? 'text-gmax-blue' : ''}`}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className={`text-gmax-dark hover:text-gmax-blue font-medium transition-colors
                ${activeSection === 'testimonials' ? 'text-gmax-blue' : ''}`}
            >
              Contact
            </a>
            <Button className="bg-gmax-blue hover:bg-gmax-blue/90 text-white w-full">Shop Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
