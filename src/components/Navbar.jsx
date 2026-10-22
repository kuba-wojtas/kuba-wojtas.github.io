import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    home: 'Home',
    itProjects: 'IT projects',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
  },
  pl: {
    home: 'Strona główna',
    itProjects: 'Projekty IT',
    contact: 'Kontakt',
    menu: 'Menu',
    close: 'Zamknij',
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: t.home, to: '/' },
    { id: 'it-projects', name: t.itProjects, to: '/it-projects' },
    { id: 'contact', name: t.contact, to: '/#contact' },
  ];

  const isActive = (link) => !link.to.includes('#') && location.pathname === link.to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper page-x transition-[border-color] ${
        scrolled ? 'border-b border-ink' : 'border-b border-transparent'
      }`}
    >
      <div className="grid-12 items-center h-16">
        <Link to="/" className="col-span-2 md:col-span-3 justify-self-start" aria-label={t.home}>
          <img src="/profile_pic/jwlogo.png" alt="Jakub Wojtas" width="682" height="683" className="h-11 w-auto" />
        </Link>

        {/* Desktop: links sit on the grid columns */}
        <ul className="hidden md:contents">
          {navLinks.map((link) => (
            <li key={link.id} className="col-span-2">
              <Link
                to={link.to}
                aria-current={isActive(link) ? 'page' : undefined}
                className={`text-body transition-colors hover:text-signal ${
                  isActive(link) ? 'underline decoration-signal decoration-2 underline-offset-4' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="col-span-2 md:col-span-3 flex items-center justify-end gap-6">
          <LanguageToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-body font-bold"
          >
            {isOpen ? t.close : t.menu}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul id="mobile-menu" className="md:hidden border-t border-ink py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block py-2 font-display font-normal text-title hover:text-signal"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
