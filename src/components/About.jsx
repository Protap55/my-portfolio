import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import myPhoto from "../assets/protap-dutta.jpg";

const About = () => {
  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "Tailwind CSS", level: 98 },
    { name: "Framer Motion", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Performance", level: 92 },
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-cyan-400 text-lg mt-4 font-light tracking-wider">
            Let me introduce myself in real-time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text + Type Animation + Skills */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Dynamic Intro with TypeAnimation */}
            <div className="text-3xl md:text-5xl font-bold text-white leading-tight">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Protap Dutta",
                  2000,
                  "I build stunning web apps",
                  2000,
                  "I love React & Next.js",
                  2000,
                  "I craft pixel-perfect UIs",
                  2000,
                  "I bring ideas to life",
                  2000,
                ]}
                wrapper="h3"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate{" "}
              <span className="text-cyan-400 font-bold">
                Frontend Developer
              </span>{" "}
              from Bangladesh, obsessed with creating smooth, fast, and visually
              breathtaking digital experiences.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I combine modern frameworks like{" "}
              <strong className="text-purple-400">React, Next.js </strong>
              with cutting-edge animations and design principles to deliver
              websites that don't just work — they{" "}
              <span className="text-cyan-400">wow</span>.
            </p>

            {/* Skills Bars */}
            <div className="pt-6 space-y-5">
              <h4 className="text-2xl font-bold text-white">
                Technical Expertise
              </h4>
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.8,
                        delay: i * 0.15,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/50 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Circular Photo */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
            }}
            className="flex flex-col items-center order-1 lg:order-2 space-y-6"
          >
            <div className="relative group">
              {/* Rotating Neon Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-1000"
              />

              {/* Static Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-70" />

              {/* Main Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-black shadow-2xl">
                <img
                  src={myPhoto}
                  alt="Protap Dutta"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-10">
                  <p className="text-3xl font-black text-white tracking-wider">
                    PROTAP
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-full shadow-2xl font-bold text-lg tracking-wider border-2 border-black"
              >
                Available for Work
              </motion.div>
            </div>

            {/* Contact Info Below Photo */}
            <div className="text-center space-y-2">
              <p className="text-cyan-400 font-medium text-lg">
                📞 01307016609
              </p>
              <p className="text-cyan-400 font-medium text-lg">
                ✉️ protapwith.dev@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
