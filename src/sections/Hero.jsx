import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient przechodzący z góry do przezroczystego - particles przenikają */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            rgba(23, 37, 84, 0.85) 0%,
            rgba(23, 37, 84, 0.7) 15%,
            rgba(23, 37, 84, 0.5) 30%,
            rgba(23, 37, 84, 0.35) 45%,
            rgba(23, 37, 84, 0.2) 60%,
            rgba(23, 37, 84, 0.1) 75%,
            rgba(23, 37, 84, 0.03) 90%,
            rgba(23, 37, 84, 0) 100%
          )`
        }}
      />


      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        {/* Photo with parallax */}
        <div style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* Profile Image */}
            <img
              src="/projects/prof_blue.png"
              alt="Jakub Wojtas"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-baby-blue shadow-[0_0_50px_rgba(178,217,255,0.4)] hover:scale-105 transition-transform duration-500 mb-8"
            />
          </motion.div>
        </div>

        {/* Name and roles with fastest parallax (moves up) */}
        <div style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-shadow"
          >
            <span className="gradient-text">Jakub Wojtas</span>
          </motion.h1>

          {/* All roles visible at once with gradient animations */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center text-lg md:text-xl mb-12"
          >
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 animate-pulse-slow hover:scale-105 transition-transform cursor-default">
              Data Scientist
            </span>

            <span className="hidden md:block text-gray-600">•</span>

            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 animate-pulse-slow animation-delay-1000 hover:scale-105 transition-transform cursor-default">
              Full-Stack Developer
            </span>

            <span className="hidden md:block text-gray-600">•</span>

            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 animate-pulse-slow animation-delay-2000 hover:scale-105 transition-transform cursor-default">
              Audio Engineer
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown className="w-8 h-8 text-baby-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
