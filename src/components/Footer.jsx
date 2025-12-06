import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Protap55",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/protapdutta",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:protapwith.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-purple-900/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Left - Name + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Protap Dutta
              </span>
            </h3>
            <p className="text-gray-400 text-lg">
              Frontend Developer • React & Next.js Expert
            </p>
            <p className="text-cyan-400 font-medium flex items-center justify-center md:justify-start gap-2">
              <FaHeart className="text-red-500 animate-pulse" />
              Crafting digital experiences with passion
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Quick Navigation</h4>
            <div className="flex flex-col gap-3 text-gray-400">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    whileHover={{ x: 10, color: "#06b6d4" }}
                    className="hover:text-cyan-400 transition-all duration-300"
                  >
                    → {item}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Right - Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-3 text-gray-400">
              <motion.p className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>protapwith.dev@gmail.com</span>
              </motion.p>
              <motion.p className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-cyan-400" />
                <span>+880 1307016609</span>
              </motion.p>
              <motion.p className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Mirpur-02, Dhaka, Bangladesh</span>
              </motion.p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 text-3xl">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-cyan-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear}{" "}
            <span className="text-cyan-400 font-bold">Protap Dutta</span>. All
            rights reserved. <br className="md:hidden" />
            Made with <span className="text-red-500">♥</span> & React in
            Bangladesh
          </p>
        </motion.div>
      </div>

      {/* Floating Particles Effect (Optional) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 20,
            }}
            animate={{
              y: -20,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
