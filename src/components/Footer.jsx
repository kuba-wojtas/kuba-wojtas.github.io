import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/wojtasjak',
      label: 'GitHub',
      color: 'hover:text-baby-blue'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/jakub-wojtas-220b503a5/',
      label: 'LinkedIn',
      color: 'hover:text-baby-blue'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:contact@jakubwojtas.com',
      label: 'Email',
      color: 'hover:text-baby-blue'
    },
  ];

  return (
    <footer className="bg-dark-card border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <img
                src="/projects/prof_blue.png"
                alt="JW"
                className="w-10 h-10 rounded-full object-cover border-2 border-baby-blue shadow-lg shadow-baby-blue/30"
              />
              <span className="text-xl font-bold gradient-text">
                Jakub Wojtas
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              Data Scientist & Full-Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full bg-dark-bg/50 text-text-secondary transition-colors ${social.color}`}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary text-sm mb-2">
              &copy; 2024 Jakub Wojtas. All rights reserved.
            </p>
            <p className="text-text-secondary text-xs flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-3 h-3 text-baby-blue fill-current" /> using React + Three.js
            </p>
          </div>
        </div>

        {/* Bottom Border Gradient */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-baby-blue to-transparent rounded-full opacity-50" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
