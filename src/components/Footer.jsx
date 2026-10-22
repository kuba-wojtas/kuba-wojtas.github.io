import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    tagline: 'Full-Stack Developer & Data Scientist',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  pl: {
    tagline: 'Full-Stack Developer & Data Scientist',
    rights: 'Wszelkie prawa zastrzeżone.',
    backToTop: 'Wróć na górę',
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="bg-ink-soft text-stone page-x">
      <div className="grid-12 border-t border-paper/30 py-6 gap-y-2 text-label">
        <p className="col-span-4 md:col-span-4">
          <span className="block text-paper font-bold">Jakub Wojtas</span>
          {t.tagline}
        </p>
        <p className="col-span-4 md:col-span-4">&copy; 2026 Jakub Wojtas. {t.rights}</p>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }} className="col-span-4 md:col-span-4 md:text-right hover:text-signal">
          {t.backToTop}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
