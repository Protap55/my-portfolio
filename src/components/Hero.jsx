import React from "react";

const Hero = () => {
  return (
    <main className="pt-12 pb-20" id="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content Column */}
        <div
          className="text-center lg:text-left"
          data-purpose="hero-text-content"
        >
          {/* Professional Title Tag */}
          <div className="inline-block border-2 border-brand-cyan rounded-full px-4 py-1.5 mb-6 shadow-glow-cyan-intense">
            <p
              className="text-sm font-bold tracking-widest text-brand-cyan uppercase"
              style={{ textShadow: "0 0 5px rgba(34, 211, 238, 0.7)" }}
            >
              FRONTEND FOCUSED MERN STACK DEVELOPER
            </p>
          </div>
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-extrabold font-heading tracking-tight mb-4">
            <span className="text-white/90">Hi, I'm</span>
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 block"
              style={{
                filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))",
              }}
            >
              Ayan
            </span>
          </h1>
          {/* Subheading / Bio */}
          <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-10">
            Tech Enthusiast | React Developer. I love turning ideas into clean,
            impactful, and user-friendly web experiences.
          </p>
          {/* Action Buttons & Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            {/* Download CV Button */}
            <a
              className="flex items-center gap-3 bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-pink/90 hover:to-brand-purple/90 rounded-full px-8 py-3.5 text-lg font-bold shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-1"
              href="#"
            >
              Download CV
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            {/* Social Icons */}
            <a
              className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-brand-pink/80 hover:border-brand-pink transition-all duration-300 hover:shadow-glow-pink-intense"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-brand-cyan/80 hover:border-brand-cyan hover:shadow-glow-cyan transition-all duration-300 hover:shadow-glow-pink-intense"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect height="12" width="4" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-brand-purple/80 hover:border-brand-purple hover:shadow-glow-purple transition-all duration-300 hover:shadow-glow-pink-intense"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
        {/* Right Image Column */}
        <div
          className="relative flex justify-center items-center"
          data-purpose="hero-image-content"
        >
          <div className="absolute w-[500px] h-[500px] -right-20 top-0 -z-10">
            <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-pink-500 border-l-pink-500 -rotate-45 blur-md opacity-70"></div>
            <div className="absolute w-full h-full rounded-full border-2 border-transparent border-b-cyan-400 border-r-cyan-400 rotate-12 blur-sm opacity-50 scale-90"></div>
          </div>
          <div className="absolute w-[450px] h-[450px] -left-20 bottom-0 -z-10">
            <div className="absolute w-full h-full rounded-full border-2 border-transparent border-b-purple-500 border-r-purple-500 rotate-[60deg] blur-lg opacity-60"></div>
          </div>
          {/* Glowing background shapes */}
          <div className="absolute w-full h-full -z-10">
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-600/50 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] border-4 border-cyan-400/50 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] border-2 border-pink-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse [animation-delay:-1s]"></div>
          </div>
          {/* Person Image */}
          <img
            alt="Ayan, MERN Stack Developer"
            className="relative z-10 max-w-sm md:max-w-md lg:max-w-[450px] filter drop-shadow-[0_10px_30px_rgba(168,85,247,0.4)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvN4ythu7zswVOYtyHI6dMzBWPBQBd5-_5Dj6QV40Cy-XZ9bRoFZpc_D-bsKMFitB_1tK4Ksk4gSQaAMfEiR5AkyJJciSwZlXpqdTnZxGvcgr3RCdDkDznN_amGf557uDtY6x99MwbpxdoiK09EH5ZhGXd4oFTzyk4xz9vv2R34Q6joFuVsxpkeYH1ac20CNVPkvMcjAqb8hBu6MmZSMjHYoiZAvHnj_SdtgKw7cs5gAr8dPFYDgk3E-q03MKkpxwk_E3gGP-hzC8"
          />
          {/* Code Snippet element (decorative) */}
          <div className="absolute top-[20%] -left-[10%] md:left-[-5%] w-56 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-3 shadow-2xl z-0 hidden md:block">
            <div className="flex space-x-1.5 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-xs text-gray-400">
              <code>{`<div class="header">
  <h1 class="component_name">
     <span>Ayan</span>
  </h1>
</div>

.hero-title {
  font-size: 72px;
  color: #fff;
}`}</code>
            </pre>
          </div>
          {/* Expert in React.js Tag */}
          <div className="absolute top-[15%] right-0 md:-right-[15%] z-20 bg-cyan-400/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg shadow-cyan-500/30 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-black animate-spin [animation-duration:5s]"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.013 14.339c.368 0 .68.125.918.338.21.187.35.45.405.758l.011.058.006.057c.002.019.004.038.004.057a.965.965 0 0 1-.368.749c-.21.187-.492.295-.81.31l-.068.002h-1.526a.965.965 0 0 1-.965-.965V13.35c0-.236.068-.45.19-.64l.011-.018.01-.016a.925.925 0 0 1 .43-.31l.068-.02a1.026 1.026 0 0 1 .379-.068h.022c.368 0 .68.125.918.338.21.187.35.45.405.758l.011.058.006.057c.002.019.004.038.004.057a.965.965 0 0 1-.368.749c-.21.187-.492.295-.81.31l-.068.002H9.013Zm5.034-1.226c.368 0 .68.125.918.338.21.187.35.45.405.758l.011.058.006.057c.002.019.004.038.004.057a.965.965 0 0 1-.368.749c-.21.187-.492.295-.81.31l-.068.002h-1.526a.965.965 0 0 1-.965-.965v-2.006a.965.965 0 0 1 .965-.965h.022c.368 0 .68.125.918.338.21.187.35.45.405.758l.011.058.006.057c.002.019.004.038.004.057a.965.965 0 0 1-.368.749c-.21.187-.492.295-.81.31l-.068.002h-.534v.002h.534Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <p className="font-bold text-black text-sm">
              Expert in <span className="font-extrabold">React.js</span>
            </p>
          </div>
          {/* Powered by MongoDB Tag */}
          <div className="absolute bottom-[10%] right-0 md:-right-[10%] z-20 bg-green-500/20 backdrop-blur-sm border border-green-400/50 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
            <svg
              className="w-6 h-6 text-green-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.75 1.5c-3.141 0-5.25 2.112-5.25 4.885V10.5h3.375c.34 0 .647.19.805.47l.01.02a.84.84 0 0 1 .055.228c.02.083.029.168.029.252 0 .31-.137.596-.363.787l-.027.022-5.32 4.14a.75.75 0 0 1-.994.025l-.01-.008-5.32-4.14a.936.936 0 0 1-.39-.768c0-.31.137-.596.363-.787l.027-.022a.837.837 0 0 1 .805-.47H7.5V6.385C7.5 3.321 9.89 0 14.25 0 17.52 0 21 2.07 21 6.75c0 3.14-1.391 4.922-2.489 5.86a.75.75 0 0 1-1.011-.06l-2.181-2.908a.75.75 0 0 0-.96-.283l-.024.012c-.22.11-.358.333-.358.573v6.829c0 2.656 2.085 4.53 5.25 4.53 3.141 0 5.25-2.112 5.25-4.885v-6.39c0-3.486-2.583-6.145-6.75-6.145Z"></path>
            </svg>
            <p className="font-semibold text-white text-sm">
              Powered by <span className="font-bold">MongoDB</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
