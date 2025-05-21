
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Laptop, Smartphone, Printer, Home, Network } from 'lucide-react';

// Product category data
const categories = [
  {
    id: 'laptops',
    title: 'Laptops',
    icon: Laptop,
    description: 'Powerful laptops for work, gaming, and everyday use',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'phones',
    title: 'Phones & Tablets',
    icon: Smartphone,
    description: 'Stay connected with the latest mobile devices',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 'office',
    title: 'Office Equipment',
    icon: Printer,
    description: 'Professional equipment for your workspace',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 'home',
    title: 'Home Appliances',
    icon: Home,
    description: 'Smart devices for a connected home',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-500 to-orange-400'
  },
  {
    id: 'networking',
    title: 'Networking Gadgets',
    icon: Network,
    description: 'Connectivity solutions for seamless performance',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-red-500 to-rose-400'
  }
];

const ProductCategory = ({ category, index }: { category: any; index: number }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: index * 0.2 
          }
        }
      }}
    >
      <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}>
          <category.icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-gmax-dark mb-3">{category.title}</h3>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <button className="flex items-center font-medium text-gmax-blue hover:text-gmax-accent transition-colors">
          View Products <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

const ProductSection = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our <span className="text-gmax-blue">Product Categories</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of premium products designed to enhance your tech experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-10">
          {categories.map((category, index) => (
            <ProductCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

// This is necessary for VSCode to not complain
export const ArrowRight = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-arrow-right ${className}`}
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
