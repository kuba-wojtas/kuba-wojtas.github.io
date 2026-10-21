import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    home: 'Home',
    itProjects: 'IT Projects',
    contact: 'Contact',
    toggleMenu: 'Toggle menu',
  },
  pl: {
    home: 'Strona główna',
    itProjects: 'Projekty IT',
    contact: 'Kontakt',
    toggleMenu: 'Przełącz menu',
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'home', name: t.home, path: '/' },
    { id: 'it-projects', name: t.itProjects, path: '/it-projects' },
    { id: 'contact', name: t.contact, action: () => scrollToSection('contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/40 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img
                src="/projects/prof_blue.png"
                alt="JW"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-baby-blue shadow-lg shadow-baby-blue/30 group-hover:shadow-baby-blue/50 transition-shadow"
              />
              <span className="hidden md:block text-xl font-bold gradient-text">
                Jakub Wojtas
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.id}>
                {link.path ? (
                  <Link
                    to={link.path}
                    className={`text-base font-medium transition-colors hover:text-baby-blue relative group ${
                      location.pathname === link.path
                        ? 'text-baby-blue'
                        : 'text-text-primary'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-baby-blue transform origin-left transition-transform ${
                        location.pathname === link.path
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                ) : (
                  <button
                    onClick={link.action}
                    className="text-base font-medium text-text-primary transition-colors hover:text-baby-blue relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-baby-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </button>
                )}
              </div>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile: Language Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-dark-card transition-colors"
              aria-label={t.toggleMenu}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-baby-blue" />
              ) : (
                <Menu className="w-6 h-6 text-baby-blue" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-card/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.path ? (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-lg font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-baby-blue'
                          : 'text-text-primary hover:text-baby-blue'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="block w-full text-left py-2 text-lg font-medium text-text-primary hover:text-baby-blue transition-colors"
                    >
                      {link.name}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
