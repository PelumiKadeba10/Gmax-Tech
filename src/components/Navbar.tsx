
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
          <a href="#" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">Home</a>
          <a href="#products" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">Products</a>
          <a href="#" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">About</a>
          <a href="#" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">Contact</a>
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
            <a href="#" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">Home</a>
            <a href="#products" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">Products</a>
            <a href="#" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">About</a>
            <a href="#" className="text-gmax-dark hover:text-gmax-blue font-medium transition-colors">Contact</a>
            <Button className="bg-gmax-blue hover:bg-gmax-blue/90 text-white w-full">Shop Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
