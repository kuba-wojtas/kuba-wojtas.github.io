import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'Work',
    headingAccent: 'Experience',
    current: 'Current',
    responsibilities: 'Key Responsibilities:',
    achievements: 'Achievements:',
    collapse: 'Click to collapse',
    expand: 'Click for details',
    openTitle: 'Open to New Opportunities',
    openText: 'Looking for exciting challenges in Data Science, Machine Learning, and Full-Stack Development',
    experiences: [
      {
        company: 'Self-Employed / Freelance',
        position: 'Data Scientist & Full-Stack Developer',
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
          'Implemented automated backup system ensuring 99.9% data safety',
          'Created Power BI dashboards improving decision-making process'
        ],
      }
    ],
  },
  pl: {
    heading: 'Doświadczenie',
    headingAccent: 'zawodowe',
    current: 'Obecnie',
    responsibilities: 'Główne obowiązki:',
    achievements: 'Osiągnięcia:',
    collapse: 'Kliknij, aby zwinąć',
    expand: 'Kliknij, aby zobaczyć szczegóły',
    openTitle: 'Otwarty na nowe możliwości',
    openText: 'Szukam ciekawych wyzwań w obszarze Data Science, Machine Learning i Full-Stack Development',
    experiences: [
      {
        company: 'Własna działalność / Freelance',
        position: 'Data Scientist & Full-Stack Developer',
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
          'Wdrożenie automatycznego systemu kopii zapasowych zapewniającego 99,9% bezpieczeństwa danych',
          'Stworzenie dashboardów Power BI usprawniających proces decyzyjny'
        ],
      }
    ],
  },
};

// Language-independent properties, matched by index with content[language].experiences
const experienceMeta = [
  { current: true, color: 'from-green-400 to-emerald-500' },
  { current: false, color: 'from-baby-blue to-blue-500' },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { language } = useLanguage();
  const t = content[language];

  const experiences = t.experiences.map((exp, index) => ({ ...exp, ...experienceMeta[index] }));

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section-container bg-transparent">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.heading} <span className="gradient-text">{t.headingAccent}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-transparent" />

              {/* Timeline Dot */}
              <motion.div
                className={`
                  absolute left-0 top-0 -translate-x-1/2
                  w-4 h-4 rounded-full
                  ${exp.current ? 'bg-green-400' : 'bg-blue-400'}
                  border-4 border-gray-900
                  cursor-pointer
                  ${exp.current ? 'animate-pulse shadow-lg shadow-green-400/50' : 'shadow-lg shadow-blue-400/50'}
                `}
                whileHover={{ scale: 1.5 }}
                onClick={() => toggleExpand(index)}
              />

              {/* Card */}
              <motion.div
                className="
                  relative group
                  bg-gradient-to-br from-white/[0.05] to-white/[0.01]
                  backdrop-blur-xl
                  border border-white/[0.08]
                  rounded-3xl
                  p-6
                  overflow-hidden
                  transition-all duration-500
                  hover:border-blue-400/30
                  cursor-pointer
                "
                onClick={() => toggleExpand(index)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />

                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-400 text-sm font-medium">
                          {t.current}
                        </span>
                      )}
                    </div>
                    <p className="text-baby-blue font-semibold">{exp.company}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>

                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Short description always visible */}
                <p className="text-gray-300 mb-3">{exp.shortDescription}</p>

                {/* Expandable details */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 mt-4 pt-4">
                        <h4 className="text-white font-semibold mb-3">{t.responsibilities}</h4>
                        <ul className="space-y-2 mb-4">
                          {exp.details.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-gray-300 flex items-start"
                            >
                              <span className="text-blue-400 mr-2 mt-1">▹</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        {exp.achievements && (
                          <>
                            <h4 className="text-white font-semibold mb-3">{t.achievements}</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (exp.details.length + i) * 0.1 }}
                                  className="text-gray-300 flex items-start"
                                >
                                  <span className="text-green-400 mr-2 mt-1">★</span>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Click indicator */}
                <div className="text-center mt-4">
                  <span className="text-xs text-gray-500">
                    {expandedIndex === index ? t.collapse : t.expand}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8 text-center ml-8"
          >
            <Briefcase className="w-12 h-12 text-baby-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">
              {t.openTitle}
            </h3>
            <p className="text-text-secondary">
              {t.openText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
