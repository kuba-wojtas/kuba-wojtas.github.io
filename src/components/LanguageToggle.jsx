import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const languages = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'pl', label: 'PL', title: 'Polski' },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Język"
      className="relative flex items-center p-1 rounded-full bg-dark-card/60 border border-white/10 backdrop-blur-md"
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          aria-pressed={language === lang.code}
          title={lang.title}
          className={`relative z-10 px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
            language === lang.code ? 'text-dark-bg' : 'text-text-secondary hover:text-baby-blue'
          }`}
        >
          {language === lang.code && (
            <motion.span
              layoutId="language-toggle-pill"
              className="absolute inset-0 -z-10 rounded-full bg-baby-blue"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          {lang.label}
        </button>
      ))}
    </div>
  );
}
