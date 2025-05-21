
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const techImages = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
];

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
      showCursor: false, // Remove the cursor
    });
    
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1500}
          className="h-full w-full"
        >
          {techImages.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"
              />
              <img 
                src={image} 
                alt={`Tech background ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <motion.div 
            className="max-w-3xl text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Discover <span className="text-gmax-accent">Premium</span> <br />
              <span ref={el} className="text-gmax-accent"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
              Experience cutting-edge technology with Gmax Technologies. We offer a wide range of premium gadgets and devices to elevate your digital lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gmax-blue hover:bg-gmax-blue/90 text-white text-lg px-8 py-6">
                Shop Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#products" 
          className="flex flex-col items-center text-white hover:text-gmax-accent transition-colors"
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
    </section>
  );
};

export default HeroSection;
