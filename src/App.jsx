// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       {/* BEGIN: Main Container */}
//       <div
//         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
//         id="main-container"
//         style={{
//           backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeiAZVB5EHaBhgy4TyEwWAmjcsLH_pNVHzIQ60WZnK3E-qHakEWJ16jpXdNXOo8x425rZaQB1oIo_E1C594sZPHZFskoqeE5x-2zNEg8wUudI5QU9a2QZxpKVZwYYBm2GcbwGMjQEV7TeQeBvrE01jaF78pUweXAbw71F3PUAWA4ZYsFaf7nQ2_K8ib0Ef5n4vxsITWhOXaRasycQ7LbEuHgFnAdrCU9w0V0smHFZUvByo4JkIrtZBzX43UDz2ahqk6lGS2azPJV8')"
//         }}
//       >
//         {/* Decorative background elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//           <div
//             className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-600/30 rounded-full filter blur-3xl opacity-50"
//           ></div>
//           <div
//             className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full filter blur-3xl opacity-50"
//           ></div>
//         </div>
//         {/* Main content wrapper */}
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//           <Header />
//           <Hero />
//         </div>
//       </div>
//       {/* END: Main Container */}
//       <About />
//       <Skills />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education.jsx";

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills></Skills>
      <Education></Education>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
