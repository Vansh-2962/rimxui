import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Chip from "@/components/Chips/chips";
import { Link, useLocation } from "react-router-dom";

import DarkModeToggle from "@/components/DarkMode/dark";

const Header: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#features") {
      const el = document.getElementById("features");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#reviews") {
      const el = document.getElementById("reviews");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Components", href: "/docs" },
    { name: "Documentation", href: "/docs" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      {/* Header */}
      <motion.header
        className={` fixed top-0 w-full z-50 px-4 md:px-8 py-2 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-transparent backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Banner */}
        <div className="text-center dark:text-zinc-300 text-zinc-900 flex items-center justify-center ">
          <p className="border border-zinc-800 rounded-full md:w-1/2 py-2 dark:bg-white/10 text-xs px-3 md:px-0 ">
            🧪 This is our beta release — explore early features and help us
            improve!
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center ">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to={"/"}>
              <span className="bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-zinc-200 dark:to-zinc-900 bg-clip-text text-transparent font-bold">
                R<span className="text-red-500 drop-shadow-md">i</span>MX UI
              </span>
            </Link>
            <Chip color="gray">version 1.0.0 🔥</Chip>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.href}
                  className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              // onClick={toggleTheme}
              className=" rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <DarkModeToggle darkIcon="☀️" lightIcon="🌑" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              // onClick={toggleTheme}
              className="p-1 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <DarkModeToggle darkIcon="☀️" lightIcon="🌑" />
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={
            isMobileMenuOpen
              ? { opacity: 1, height: "auto" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="mt-4 py-2 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileTap={{ scale: 0.98 }}>
                <Link
                  to={link.href}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
