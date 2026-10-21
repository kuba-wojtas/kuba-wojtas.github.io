import { useEffect, useState } from 'react';
import { LanguageContext } from './LanguageContext';

const STORAGE_KEY = 'language';
const SUPPORTED = ['en', 'pl'];

const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    // localStorage unavailable (private mode, blocked storage)
  }
  return navigator.language?.toLowerCase().startsWith('pl') ? 'pl' : 'en';
};

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
