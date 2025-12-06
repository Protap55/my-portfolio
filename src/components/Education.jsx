import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaUniversity,
  FaSchool,
  FaMedal,
  FaDownload,
} from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "B.Sc in Civil Engineering",
      institution: "North Western University, Khulna",
      year: "2022",
      cgpa: "3.70 / 4.00",
      icon: <FaUniversity className="text-4xl text-cyan-400" />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      degree: "Diploma in Civil Engineering",
      institution: "Model Polytechnic Institute, Jesshore",
      year: "2018",
      cgpa: "3.69 / 4.00",
      icon: <FaGraduationCap className="text-4xl text-purple-400" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Raygram B.k High School, Kaliganj",
      year: "2014",
      cgpa: "GPA 3.69 / 5.00",
      icon: <FaSchool className="text-4xl text-green-400" />,
      color: "from-green-500 to-emerald-600",
    },
  ];

  const certifications = [
    {
      title: "Web Design and Development for Freelancing",
      issuer: "BITAC (Bangladesh Industrial Technical Assistance Center)",
      year: "2025",
      pdf: "/certificates/bitac-certificate.pdf",
      icon: <FaCertificate className="text-5xl text-yellow-500" />,
    },
    {
      title: "MERN Full Stack Web Development",
      issuer: "Programming Hero",
      year: "Dec 14, 2025 (Ongoing)",
      pdf: "/certificates/programming-hero.pdf", // public/certificates/programming-hero.pdf
      icon: <FaMedal className="text-5xl text-orange-500" />,
    },
  ];

  return (
    <section
      id="education"
      className="py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-6xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-cyan-300 mt-6 font-medium">
            Strong Foundation + Verified Skills
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group relative flex flex-col"
            >
              {/* Neon Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${edu.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000`}
              />

              {/* Card Container */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-between h-full text-center">
                {/* Icon */}
                <div className="mb-4">{edu.icon}</div>

                {/* Degree & Institution */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-400 font-medium text-lg">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 mt-1">{edu.year}</p>
                </div>

                {/* CGPA Badge */}
                <div className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/50">
                  <span className="text-xl font-bold text-cyan-300">
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications with Download Button */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-12"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Certifications & Courses
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col justify-between h-full text-center overflow-hidden"
              >
                {/* Neon Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                  {/* Icon */}
                  <div>{cert.icon}</div>

                  {/* Certification Info */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">
                      {cert.title}
                    </h4>
                    <p className="text-yellow-400 font-medium text-lg">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 mt-2">{cert.year}</p>
                  </div>

                  {/* Download Button */}
                  <motion.a
                    href={cert.pdf}
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 mx-auto mt-4"
                  >
                    <FaDownload className="text-xl" />
                    Download Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 italic">
            "From Civil Engineering to Code – Building the Future, One Line at a
            Time"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
