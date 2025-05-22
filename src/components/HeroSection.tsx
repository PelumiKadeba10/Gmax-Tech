"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Typewriter } from 'react-simple-typewriter'; // Import the Typewriter component

export default function HeroSection() {
  return (
    <section id="hero" className="pt-40 pb-5 h-screen text-white isolate relative">
      {/* Background Swiper */}
      <div className="w-full absolute inset-0 z-0 h-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src="/assets/slider3.jpg" // Image inside the 'public' folder
              alt="Tech 3"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/hero3.jpeg"
              alt="Tech 5"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/slider2.webp"
              alt="Tech 4"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground Text */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
            <Typewriter
              words={['Upgrade Your Tech Life Now']}  // Text to type
              loop={1}  // How many times the text will be typed
              cursorStyle="_"  // Cursor style
              typeSpeed={100}  // Speed at which each character is typed
              deleteSpeed={50}  // Speed at which the text is deleted
              delaySpeed={1000}  // Delay before deleting the text
            />
          </h1>
          <p className="text-xl font-semibold md:text-xl mb-12">
            Discover the latest gadgets, laptops, and accessories at unbeatable prices. 
            <p className="pt-3">Repair Faulty Gadgets at affordable Prices.</p>
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://gmaxtechnology.com/shop/"
              className="bg-blue-900 hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-md transition-duration-3"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}