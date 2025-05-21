
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the title
    document.title = "Gmax Technologies - Premium Tech Gadgets";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ProductSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="testimonials">
          <TestimonialSection />
        </section>
        <section id="cta">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
