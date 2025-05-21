
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';

const HeroSection = () => {
  const el = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Next-Gen Tech Gadgets', 
        'Premium Electronics', 
        'Smart Solutions',
        'Innovative Devices'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
    
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <motion.section 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="flex-1 max-w-3xl mb-10 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gmax-dark mb-4">
              Discover <span className="text-gmax-blue">Premium</span> <br />
              <span ref={el} className="text-gmax-accent"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Experience cutting-edge technology with Gmax Technologies. We offer a wide range of premium gadgets and devices to elevate your digital lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gmax-blue hover:bg-gmax-blue/90 text-white text-lg px-8 py-6">
                Shop Now
              </Button>
              <Button variant="outline" className="border-gmax-blue text-gmax-blue hover:bg-gmax-blue/10 text-lg px-8 py-6">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-gmax-blue/20 to-gmax-accent/20 rounded-xl overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Latest Technology" 
                className="object-cover w-[90%] h-[90%] rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#products" 
          className="flex flex-col items-center text-gmax-blue hover:text-gmax-accent transition-colors"
        >
          <span className="text-sm font-medium mb-2">Explore Our Products</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-6 w-6 transform rotate-90" />
          </motion.div>
        </a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
