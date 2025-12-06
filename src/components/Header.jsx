import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import myPhoto from "../assets/protap-dutta.jpg";

const Header = () => {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Protap55" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/protapdutta/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/Protap55/" },
    { icon: <HiOutlineMail />, link: "mailto:protapwith.dev@gmail.com" },
  ];

  const cvLink = "/Protap_Dutta_Resume.pdf";

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-cyan-950" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            animation: "grid-move 30s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left - Photo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-60 group-hover:opacity-90 group-hover:blur-4xl transition-all duration-1000" />
              <div className="relative p-4 bg-white bg-opacity-5 backdrop-blur-2xl rounded-3xl border border-white border-opacity-10 shadow-2xl">
                <img
                  src={myPhoto}
                  alt="Protap Dutta"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl border-4 border-black"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black border-2 border-cyan-500 rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl">
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
                <span className="text-cyan-400 font-bold text-sm tracking-wider">
                  OPEN TO WORK
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
            }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-cyan-400 font-light tracking-widest"
            >
              Hey there
            </motion.p>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
              I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Protap Dutta
              </span>
            </h1>

            <div className="text-3xl md:text-5xl font-bold h-20">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React & Next.js Expert",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Building the Future Web",
                  2000,
                ]}
                wrapper="p"
                speed={40}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 drop-shadow-2xl"
              />
            </div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              I craft pixel-perfect, high-performance web experiences with
              modern React, Next.js, and cutting-edge animations.
            </motion.p>

            {/* Buttons + Download CV */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              {/* View Projects Button */}
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-base rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/60 transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Projects
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>

              {/* Let's Connect Button */}
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold text-base rounded-xl backdrop-blur-md bg-white bg-opacity-5 hover:bg-opacity-20 hover:text-white hover:border-purple-500 transition-all duration-500 hover:scale-105"
              >
                Let's Connect
              </a>

              {/* Download CV Button */}
              <a
                href={cvLink}
                download="Protap_Dutta_Resume.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base rounded-xl overflow-hidden shadow-2xl hover:shadow-pink-500/60 transition-all duration-500 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <FaDownload className="text-lg" />
                <span>Download CV</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-10 justify-end lg:justify-end pt-8">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target={
                    social.link.startsWith("mailto:") ? "_self" : "_blank"
                  }
                  rel={
                    social.link.startsWith("mailto:")
                      ? ""
                      : "noopener noreferrer"
                  }
                  whileHover={{ y: -12, scale: 1.3 }}
                  className="text-cyan-400 hover:text-white text-4xl transition-all duration-300"
                  aria-label="social link"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-10 h-16 border-2 border-cyan-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-10 bg-cyan-400 rounded-full mt-3"
          />
        </div>
      </motion.div>

      {/* Animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        .animate-gradient {
          background-size: 200%;
          animation: gradient 10s ease infinite;
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
