
import React, { useEffect } from 'react';
// import TopNav from '@/components/TopNav';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the title
    document.title = "Gmax Technologies - Premium Tech Gadgets";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <TopNav /> */}
      <Navbar />
      <main>
        <HeroSection />
        <ProductSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
