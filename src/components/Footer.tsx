import React from 'react';
import { Phone, Mail, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gmax-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <img
              src="/assets/logo.svg"
              alt="Gmax Technologies Logo"
              className="h-12 mb-8 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6">
              Providing IT solutions with cutting-edge technology to enhance your digital experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/gmaxtechnologies"
                className="text-white hover:text-gmax-accent transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/gmaxtechnology"
                className="text-white hover:text-gmax-accent transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=2348028494730"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="text-white hover:text-gmax-accent transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 .395c-8.837 0-16 7.163-16 16 0 2.82.739 5.596 2.142 8.039L.021 32l7.755-2.041A15.91 15.91 0 0016 31.605c8.837 0 16-7.163 16-16s-7.163-15.999-16-15.999zm0 29.21a13.13 13.13 0 01-6.676-1.854l-.481-.286-4.604 1.212 1.232-4.483-.313-.462a13.15 13.15 0 01-2.036-7.06c0-7.28 5.924-13.205 13.204-13.205 7.28 0 13.204 5.924 13.204 13.204 0 7.28-5.924 13.205-13.204 13.205zm7.269-9.841c-.396-.198-2.345-1.158-2.709-1.291-.363-.132-.628-.198-.892.198s-1.022 1.291-1.253 1.558c-.23.264-.461.297-.857.099-.396-.198-1.671-.616-3.184-1.965-1.176-1.049-1.97-2.345-2.204-2.741-.231-.396-.025-.611.173-.808.177-.175.396-.462.594-.693.198-.231.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.892-2.149-1.221-2.94-.321-.772-.647-.667-.892-.68-.231-.01-.495-.012-.76-.012s-.693.099-1.057.495c-.363.396-1.38 1.348-1.38 3.287s1.412 3.81 1.607 4.077c.198.264 2.773 4.227 6.719 5.923.94.406 1.672.648 2.242.829.94.298 1.794.255 2.47.155.754-.113 2.345-.958 2.676-1.882.33-.924.33-1.715.231-1.882-.099-.165-.363-.264-.76-.462z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Product Categories</h3>
              <ul className="space-y-3">
                <li><a href="#laptops" className="text-gray-300 hover:text-white transition-colors">Laptops</a></li>
                <li><a href="#phones" className="text-gray-300 hover:text-white transition-colors">Phones & Tablets</a></li>
                <li><a href="#office" className="text-gray-300 hover:text-white transition-colors">Office Equipment</a></li>
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home Appliances</a></li>
                <li><a href="#networking" className="text-gray-300 hover:text-white transition-colors">Networking Gadgets</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gmax-accent" />
                <span className="text-gray-300">+(234) 802 849 4730</span>
              </li>
              <li className="flex items-start">
                <Home className="h-5 w-5 mr-3 text-gmax-accent" />
                <span className="text-gray-300">10, Oremeji Street, Off Simbiat Abiola Street, Ikeja. Lagos, Nigeria.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Gmax Technologies Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
