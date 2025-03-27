import React from "react";
import { Youtube, Instagram, Twitter } from "lucide-react";

const FollowUs = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800">Follow Us on </h2>
      <div className="flex space-x-6">
        {/* YouTube */}
        <a 
          href="https://www.youtube.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
        >
          <Youtube className="w-8 h-8" />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/foincyinteriors?igsh=MW5jcDFwZjhjbGUydg%3D%3D&utm_source=qr" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110"
        >
          <Instagram className="w-8 h-8" />
        </a>

        {/* Twitter */}
        <a 
          href="https://twitter.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110"
        >
          <Twitter className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
