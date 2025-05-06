import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal, SiApplepay, SiGooglepay, SiAmericanexpress } from 'react-icons/si';

const Footer = () => (
  <footer className="bg-black text-white text-sm mt-12 px-6 py-10">
    <div className="max-w-7xl mx-auto">
      {/* Top Section: Subscription and Contact */}
      <div className="grid md:grid-cols-2 gap-8 border-b border-gray-700 pb-10">
        <div>
          <h3 className="font-bold mb-2">BE THE FIRST TO KNOW</h3>
          <p className="mb-4">Sign up for updates from metta muse.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="px-4 py-2 w-[50%] text-black bg-white"
            />
            <button className="w-40 px-4 py-2 ml-2 text-gray-500 border-1 rounded">SUBSCRIBE</button>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">CONTACT US</h3>
          <p className="mb-1">+44 221 133 5360</p>
          <p className="mb-2">customercare@mettamuse.com</p>
          <h3 className="font-bold mt-4 mb-1">CURRENCY</h3>
          <p>USD</p>
          <p className="text-xs mt-2">
            Transactions will be completed in Euros and a currency reference is available in hover.
          </p>
        </div>
      </div>

      {/* Bottom Section: Links and Social */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-10">
        {/* Left: metta muse */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="font-bold mb-2">metta muse</h2>
          {["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"].map((item) => (
            <p key={item} className="mb-1 hover:underline cursor-pointer">{item}</p>
          ))}
        </div>

        {/* Center: Quick Links */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="font-bold mb-2">QUICK LINKS</h3>
          {[
            "Orders & Shipping",
            "Join/Login as a Seller",
            "Payment & Pricing",
            "Return & Refunds",
            "FAQs",
            "Privacy Policy",
            "Terms & Conditions",
          ].map((item) => (
            <p key={item} className="mb-1 hover:underline cursor-pointer">{item}</p>
          ))}
        </div>

        {/* Right: Follow Us and metta muse ACCEPTS */}
        <div className="md:w-1/3">
          <div className="mb-4">
            <h3 className="font-bold mb-2">FOLLOW US</h3>
            <div className="flex items-center space-x-4 text-white text-xl">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">metta muse ACCEPTS</h3>
            <div className="flex items-center space-x-4 text-white text-2xl">
              <SiVisa />
              <SiMastercard />
              <SiPaypal />
              <SiApplepay />
              <SiGooglepay />
              <SiAmericanexpress />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-xs text-gray-400 mt-8">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
