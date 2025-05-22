
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gmax-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Tech?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of satisfied customers who trust Gmax Technologies for premium gadgets and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href='https://gmaxtechnology.com/Shop/'>
                <Button className="bg-white text-gmax-blue hover:bg-slate-200 text-lg px-8 py-6">
                Shop Now
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
