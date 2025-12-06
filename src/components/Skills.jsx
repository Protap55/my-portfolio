import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const skillSections = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          icon: <FaReact />,
          level: 94,
          color: "from-cyan-400 to-blue-600",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          level: 88,
          color: "from-gray-200 to-gray-600",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: 96,
          color: "from-cyan-500 to-teal-600",
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
          level: 92,
          color: "from-yellow-400 to-amber-600",
        },
        {
          name: "HTML5",
          icon: <FaHtml5 />,
          level: 98,
          color: "from-orange-500 to-red-600",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          level: 95,
          color: "from-blue-500 to-indigo-600",
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap />,
          level: 90,
          color: "from-purple-500 to-indigo-500",
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          level: 78,
          color: "from-green-400 to-emerald-600",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          level: 85,
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          level: 80,
          color: "from-green-500 to-lime-600",
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
          level: 82,
          color: "from-yellow-400 to-orange-500",
        },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        {
          name: "GitHub",
          icon: <FaGithub />,
          level: 92,
          color: "from-gray-700 to-black",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          level: 90,
          color: "from-black to-gray-700",
        },
        {
          name: "Netlify",
          icon: <SiNetlify />,
          level: 88,
          color: "from-teal-400 to-cyan-500",
        },
        {
          name: "Figma",
          icon: <SiFigma />,
          level: 85,
          color: "from-pink-500 to-purple-500",
        },
      ],
    },
  ];

  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="text-xl md:text-3xl font-bold text-cyan-300 mt-4 h-12">
            <TypeAnimation
              sequence={[
                "Building the Future Web",
                2000,
                "Pixel-Perfect UIs",
                2000,
                "Blazing Fast Apps",
                2000,
                "With Modern Tech Stack",
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        {/* Skill Sections */}
        {skillSections.map((section, sIndex) => (
          <div key={sIndex} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {section.title}
              </span>
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {section.skills.map((skill, i) => {
                const gradientId = `gradient-${sIndex}-${i}`; // ইউনিক ID

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative"
                  >
                    {/* Glow Background */}
                    <div
                      className={`absolute -inset-1 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 bg-gradient-to-r ${skill.color} transition duration-1000`}
                    />

                    <div className="relative p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                      <div className="text-4xl mb-3">{skill.icon}</div>
                      <h4 className="font-bold text-sm md:text-base text-white">
                        {skill.name}
                      </h4>

                      {/* Circular Progress */}
                      <div className="mt-4 relative w-16 h-16 mx-auto">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r={radius}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="8"
                            fill="none"
                          />
                          <motion.circle
                            cx="32"
                            cy="32"
                            r={radius}
                            stroke={`url(#${gradientId})`}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{
                              strokeDashoffset:
                                circumference * (1 - skill.level / 100),
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.1 }}
                          />
                          <defs>
                            <linearGradient
                              id={gradientId}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-black text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
