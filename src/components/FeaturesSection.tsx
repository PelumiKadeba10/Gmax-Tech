
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const features = [
  {
    title: 'Premium Quality',
    description: 'All our products undergo rigorous quality testing to ensure long-lasting performance.',
    icon: '🌟'
  },
  {
    title: 'Fast Delivery',
    description: 'Get your tech gadgets delivered to your doorstep within 24-48 hours.',
    icon: '🚚'
  },
  {
    title: '24/7 Support',
    description: 'Our customer support team is available round the clock to assist you.',
    icon: '🛠️'
  },
  {
    title: 'Extended Warranty',
    description: 'Enjoy peace of mind with our extended warranty coverage on all products.',
    icon: '🛡️'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-gmax-blue">Gmax Technologies</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best tech gadgets with exceptional service
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

export default FeaturesSection;
