import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = (id) =>
    `relative transition-all duration-300 font-medium ${
      activeSection === id
        ? "text-cyan-400"
        : "text-gray-300 hover:text-cyan-400"
    }`;

  const activeIndicator = (id) => (
    <motion.span
      layoutId="activeIndicator"
      className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan-400 rounded-full"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-5 px-6 lg:px-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-black"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Protap Dutta
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.id} className="relative">
              <a href={`#${link.id}`} className={navLinkClasses(link.id)}>
                {link.name}
                {activeSection === link.id && activeIndicator(link.id)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-cyan-400 focus:outline-none z-50"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10"
          >
            <ul className="flex flex-col py-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-4 text-xl font-medium transition-colors ${
                      activeSection === link.id
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
