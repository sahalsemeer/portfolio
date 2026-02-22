import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold font-outfit tracking-tighter text-white"
        >
          Sahal Semeer<span className="text-brand-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-brand-500 text-brand-500 font-medium hover:bg-brand-500 hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-300 origin-top ${isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center py-6 gap-6 text-lg font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-brand-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-brand-500 text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
