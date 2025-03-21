import React from "react";
import { Link } from "react-router-dom"; // Use this if you have routing

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Copyright */}
          <p className="text-sm mb-4 md:mb-0">
            © 2025 Foincy Interiors. All rights reserved.
          </p>

       
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
