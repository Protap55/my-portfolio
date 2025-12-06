import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCopy,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_dfdvyoi",
        "template_wu60ycb",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Protap",
        },
        "y2HJG2ELha1sYWO_w"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully! I'll reply soon", {
            duration: 5000,
            icon: "Success",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Failed to send message. Try again!");
        }
      );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied: ${text}`);
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ className: "font-bold" }}
      />

      <section
        id="contact"
        className="py-24 lg:py-32 bg-black relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30" />
        <div className="absolute inset-0 bg-grid-white/5" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="text-2xl md:text-4xl font-bold text-cyan-300 mt-6 h-20">
              <TypeAnimation
                sequence={[
                  "Let's build something amazing",
                  3000,
                  "Have a project in mind?",
                  3000,
                  "I'm available for work",
                  3000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
                    <FaEnvelope className="text-2xl" />
                    <span className="text-lg">protapwith.dev@gmail.com</span>
                    <button
                      onClick={() =>
                        copyToClipboard("protapwith.dev@gmail.com")
                      }
                      className="ml-auto"
                    >
                      <FaCopy />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
                    <FaPhone className="text-2xl" />
                    <span className="text-lg">+880 1307016609</span>
                    <button
                      onClick={() => copyToClipboard("+8801307016609")}
                      className="ml-auto"
                    >
                      <FaCopy />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
                    <FaMapMarkerAlt className="text-2xl" />
                    <span className="text-lg">
                      Mirpur-02, Dhaka, Bangladesh
                    </span>
                  </div>
                </div>

                <div className="flex gap-6 mt-10 text-4xl">
                  <motion.a
                    href="https://github.com/Protap55"
                    target="_blank"
                    whileHover={{ y: -10, scale: 1.2 }}
                    className="text-cyan-400 hover:text-white"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/protapdutta"
                    target="_blank"
                    whileHover={{ y: -10, scale: 1.2 }}
                    className="text-cyan-400 hover:text-white"
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Open to Work
                </p>
                <p className="text-gray-400 mt-4">
                  Available for freelance & full-time roles
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all peer"
                    placeholder=" "
                  />
                  <label className="absolute left-6 -top-3 px-2 bg-black text-cyan-400 text-sm font-medium transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-cyan-400">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all peer"
                    placeholder=" "
                  />
                  <label className="absolute left-6 -top-3 px-2 bg-black text-cyan-400 text-sm font-medium transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-cyan-400">
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all resize-none peer"
                    placeholder=" "
                  />
                  <label className="absolute left-6 -top-3 px-2 bg-black text-cyan-400 text-sm font-medium transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-cyan-400">
                    Your Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
