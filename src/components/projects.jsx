import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Utility Bill Management System",
    description:
      "A simple and user-friendly utility bill management system that helps users track, pay, and manage their utility bills efficiently.",
    image: "https://i.postimg.cc/Qx7qGp38/Capture1.png",
    github:
      "https://github.com/Protap55/utility-bill-client?tab=readme-ov-file",
    demo: "https://my-utility-bill-management-system.netlify.app",
  },
  {
    title: "Game-Hub",
    description:
      "GameHub is a digital platform for discovering, searching, and managing games. Users can access comprehensive game details, oversee profiles, and enjoy a fluid interface with adaptive design and smooth animations.",
    image: "https://i.postimg.cc/44Fd1VCW/Capture2.png",
    github: "https://github.com/Protap55/game-hub",
    demo: "https://games-hub-online.netlify.app",
  },
  {
    title: "Apps-Store",
    description:
      "Apps Store is a contemporary web application built with React that displays popular apps along with information like company name, size, reviews, and download statistics.",
    image: "https://i.postimg.cc/rwp2ZYSQ/Capture3.png",
    github: "https://github.com/Protap55/Apps-store?tab=readme-ov-file",
    demo: "https://apps-store-online.netlify.app",
  },
  {
    title: "My-portfolio (This Project)",
    description:
      "I’m Protap Dutta, a Frontend Developer crafting modern, high-performance web applications with React, Next.js, and Tailwind CSS. Explore my projects and skills to see how I bring ideas to life with pixel-perfect design and smooth user experiences.",
    image: "https://i.postimg.cc/QCHK8q74/Capture4.png",
    github: "https://github.com/Protap55/my-portfolio",
    demo: "https://my-portfolio-online2025.netlify.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Crafted with passion & modern tech stack
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 rounded-full font-medium hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
