import { useLanguage } from '../i18n/LanguageContext';

const languages = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'pl', label: 'PL', title: 'Polski' },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div role="group" aria-label="Language / Język" className="flex items-center gap-1 text-label">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center gap-1">
          {index > 0 && <span className="text-ink/30">/</span>}
          <button
            onClick={() => setLanguage(lang.code)}
            aria-pressed={language === lang.code}
            title={lang.title}
            className={`font-bold transition-colors ${
              language === lang.code ? 'text-ink' : 'text-ink/40 hover:text-signal'
            }`}
          >
            {lang.label}
          </button>
        </span>
      ))}
    </div>
  );
}
