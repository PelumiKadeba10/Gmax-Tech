
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Laptop, Smartphone, Printer, Home, Network, ArrowRight } from 'lucide-react';

// Product category data with improved images
const categories = [
  {
    id: 'laptops',
    title: 'Laptops',
    icon: Laptop,
    description: 'Powerful Laptops, Monitors, Workstations, Hybrid PCs and CPU`s for work, gaming, and creative professionals',
    image: '/assets/L.webp',
    color: 'from-blue-600 to-purple-400',
    imgleft: false
  },
  {
    id: 'phones',
    title: 'Phones & Tablets',
    icon: Smartphone,
    description: 'Premium smartphones and tablets regardless of brand with cutting-edge features and capabilities',
    image: '/assets/phones.jpeg',
    color: 'from-amber-200 to-amber-400',
    imgleft: true
  },
  {
    id: 'office',
    title: 'Office Equipment',
    icon: Printer,
    description: 'Professional equipment and solutions to boost your workspace productivity',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-green-500 to-emerald-400',
    imgleft: false
  },
  {
    id: 'home',
    title: 'Home Appliances',
    icon: Home,
    description: 'Connected smart devices that transform your living space with automation and intelligence',
    image: '/assets/home.jpg',
    color: 'from-blue-500 to-blue-400',
    imgleft: true
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: Network,
    description: 'High-performance networking solutions for seamless connectivity and data transfer',
    image: '/assets/network.png',
    color: 'from-red-500 to-rose-400',
    imgleft: false
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
      id={category.id}
      ref={ref}
      className={`flex flex-col md:flex-row items-center shadow-lg overflow-hidden mb-8 hover:shadow-xl ${category.imgleft ? "md:flex-row-reverse" : ""}`}
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
      <div className="w-full md:w-1/2 h-80 md:h-96 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 ">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}>
          <category.icon size={28} />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gmax-dark mb-3">{category.title}</h2>
        <p className="text-gray-800 mb-6 lg:text-lg">{category.description}</p>
        <a href='https://gmaxtechnology.com/shop'>
          <button className="flex items-center font-medium text-gmax-blue hover:text-gmax-accent transition-colors">
          Explore Products <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        </a>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our <span className="text-blue-900">Product Categories</span></h2>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg">
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
