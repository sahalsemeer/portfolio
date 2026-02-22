import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Sahal Sameer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
