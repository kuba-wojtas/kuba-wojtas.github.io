import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'Work experience',
    current: 'Current',
    responsibilities: 'Key responsibilities',
    achievements: 'Achievements',
    collapse: 'Hide details',
    expand: 'Show details',
    experiences: [
      {
        company: '1plus.one / Freelance',
        position: 'Full-Stack Developer & Data Scientist',
        period: 'June 2025 - Present',
        location: 'Warsaw, Poland',
        shortDescription: 'Providing custom AI and web development solutions for clients across various industries.',
        details: [
          'Creating custom websites and web applications for clients across various industries',
          'Developing responsive, modern web solutions using React, Firebase, and latest JavaScript frameworks',
          'Building machine learning models and data science solutions for business problems',
          'Designing and implementing full-stack platforms with real-time features and cloud deployment',
          'Audio processing and DSP consulting for music technology projects',
          'Technical consulting and architecture design for startups'
        ],
        achievements: [
          'Successfully launched agricultural marketplace platform serving farmers and buyers',
          'Delivered ML-powered music analysis tools with 70%+ accuracy',
          'Built responsive web applications with 100% client satisfaction'
        ],
      },
      {
        company: 'POLTAX',
        position: 'Junior Systems Engineer',
        period: 'June 2023 - June 2025',
        location: 'Warsaw, Poland',
        shortDescription: 'Managing IT infrastructure and business intelligence systems for tax consulting firm.',
        details: [
          'Managing computer network and information systems infrastructure',
          'SQL database optimization, backup strategies, and disaster recovery',
          'Business intelligence reporting and data visualization with Power BI',
          'Network infrastructure maintenance and troubleshooting',
          'User support and IT system administration'
        ],
        achievements: [
          'Reduced database query time by 40% through optimization',
          'Implemented automated backup system ensuring data safety',
          'Created Power BI dashboards improving decision-making process'
        ],
      }
    ],
  },
  pl: {
    heading: 'Doświadczenie zawodowe',
    current: 'Obecnie',
    responsibilities: 'Główne obowiązki',
    achievements: 'Osiągnięcia',
    collapse: 'Ukryj szczegóły',
    expand: 'Pokaż szczegóły',
    experiences: [
      {
        company: '1plus.one / Freelance',
        position: 'Full-Stack Developer & Data Scientist',
        period: 'czerwiec 2025 - obecnie',
        location: 'Warszawa, Polska',
        shortDescription: 'Tworzenie dedykowanych rozwiązań AI i aplikacji webowych dla klientów z różnych branż.',
        details: [
          'Tworzenie dedykowanych stron i aplikacji webowych dla klientów z różnych branż',
          'Budowa responsywnych, nowoczesnych rozwiązań webowych w oparciu o React, Firebase i najnowsze frameworki JavaScript',
          'Budowa modeli uczenia maszynowego i rozwiązań data science dla problemów biznesowych',
          'Projektowanie i wdrażanie platform full-stack z funkcjami czasu rzeczywistego i wdrożeniem w chmurze',
          'Konsulting w zakresie przetwarzania dźwięku i DSP dla projektów z obszaru technologii muzycznych',
          'Doradztwo techniczne i projektowanie architektury dla startupów'
        ],
        achievements: [
          'Uruchomienie platformy marketplace dla rolnictwa łączącej rolników z kupującymi',
          'Dostarczenie narzędzi do analizy muzyki opartych na ML o skuteczności powyżej 70%',
          'Responsywne aplikacje webowe ze 100% zadowoleniem klientów'
        ],
      },
      {
        company: 'POLTAX',
        position: 'Junior Systems Engineer',
        period: 'czerwiec 2023 - czerwiec 2025',
        location: 'Warszawa, Polska',
        shortDescription: 'Zarządzanie infrastrukturą IT i systemami business intelligence w firmie doradztwa podatkowego.',
        details: [
          'Zarządzanie siecią komputerową i infrastrukturą systemów informatycznych',
          'Optymalizacja baz danych SQL, strategie kopii zapasowych i odtwarzanie po awarii',
          'Raportowanie business intelligence i wizualizacja danych w Power BI',
          'Utrzymanie infrastruktury sieciowej i rozwiązywanie problemów',
          'Wsparcie użytkowników i administracja systemami IT'
        ],
        achievements: [
          'Skrócenie czasu zapytań do bazy danych o 40% dzięki optymalizacji',
          'Wdrożenie automatycznego systemu kopii zapasowych zapewniającego bezpieczeństwo danych',
          'Stworzenie dashboardów Power BI usprawniających proces decyzyjny'
        ],
      }
    ],
  },
};

// Language-independent properties, matched by index with content[language].experiences
const experienceMeta = [
  { current: true },
  { current: false },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { language } = useLanguage();
  const t = content[language];

  const experiences = t.experiences.map((exp, index) => ({ ...exp, ...experienceMeta[index] }));

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="mt-20 scroll-mt-20">
      <h3 className="font-display font-normal text-lead mb-4">{t.heading}</h3>
      {experiences.map((exp, index) => {
        const isOpen = expandedIndex === index;
        const panelId = `experience-panel-${index}`;

        return (
          <article key={exp.company} className="rule">
            <button
              onClick={() => toggleExpand(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group w-full text-left grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-2 pt-5 pb-8"
            >
              <span className="col-span-4 md:col-span-2 meta-label pt-1 flex items-center gap-2 self-start">
                {exp.current && <span aria-hidden="true" className="w-2 h-2 bg-signal" />}
                {exp.period}
                {exp.current && <span className="sr-only">({t.current})</span>}
              </span>
              <span className="col-span-4 md:col-span-3">
                <span className="block font-display font-normal text-lead group-hover:text-signal transition-colors">
                  {exp.position}
                </span>
                <span className="block mt-1">{exp.company}</span>
                <span className="block meta-label mt-1">{exp.location}</span>
              </span>
              <span className="col-span-4 md:col-span-3 text-ink/75">
                {exp.shortDescription}
                <span className="block mt-4 text-label text-ink font-bold underline decoration-1 underline-offset-4 group-hover:text-signal">
                  {isOpen ? t.collapse : t.expand}
                </span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-8 pb-10">
                    <div className="col-span-4 md:col-start-3 md:col-span-3">
                      <h4 className="meta-label mb-3">{t.responsibilities}</h4>
                      <ul className="space-y-2">
                        {exp.details.map((item) => (
                          <li key={item} className="border-t border-ink/15 pt-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                    {exp.achievements && (
                      <div className="col-span-4 md:col-span-3">
                        <h4 className="meta-label mb-3">{t.achievements}</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((item) => (
                            <li key={item} className="border-t border-ink/15 pt-2">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}

      <div className="rule" />
    </div>
  );
};

export default Experience;
