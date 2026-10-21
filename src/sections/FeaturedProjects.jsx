import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'Featured',
    headingAccent: 'Projects',
    intro: 'A selection of my latest work in AI, web development, and data science',
    viewAll: 'View All Projects',
    viewDemo: 'View Demo',
    viewGithub: 'View on GitHub',
    pdfOnRequest: 'PDF available on request',
    projects: {
      rag: {
        title: 'AI Knowledge Assistant (RAG)',
        subtitle: 'Internal RAG Chatbot',
        description: 'Internal RAG chatbot that answers employee questions based on company documentation (procedures, wiki, logs). The pipeline covers document chunking, embeddings, semantic retrieval, and context-grounded LLM answers served via FastAPI. Reduced repetitive internal support requests; deployed as an internal tool and as an embeddable website widget.',
      },
      ePrescription: {
        title: 'E-Prescription System - Medical Practice',
        subtitle: 'Client Project · GDPR-Compliant Telemedicine Platform',
        description: 'GDPR-compliant web platform for online medical consultations with e-prescription issuing, delivered for a client together with a dedicated website and CMS. Configured secure server infrastructure (Ubuntu VPS, nginx, SSL, encrypted database) for handling sensitive data. Implemented the full patient/doctor workflow: intake form, payment (Stripe/BLIK), e-prescription code delivery via SMS, and transactional email. Cut the doctor\'s administrative workload by ~2h/day and increased revenue by ~10%.',
      },
      mailflow: {
        title: 'Multiplatform Local-First Email Client (MailFlow)',
        subtitle: 'Privacy-First Desktop App with On-Device AI',
        description: 'Cross-platform desktop email client focused on privacy and data sovereignty, aimed at B2B customers in the EU. Architected with Tauri 2.0 and Rust for a lightweight, secure native shell, with a React/TypeScript frontend. Implemented encrypted local storage (SQLCipher) and on-device AI features via Ollama, so user data stays fully local (GDPR-compliant). Designed as a private alternative to cloud email clients, with local AI as the key differentiator.',
      },
    },
  },
  pl: {
    heading: 'Wybrane',
    headingAccent: 'projekty',
    intro: 'Wybór moich najnowszych prac z obszaru AI, web developmentu i data science',
    viewAll: 'Zobacz wszystkie projekty',
    viewDemo: 'Zobacz demo',
    viewGithub: 'Zobacz na GitHubie',
    pdfOnRequest: 'PDF dostępny na prośbę',
    projects: {
      rag: {
        title: 'Asystent wiedzy AI (RAG)',
        subtitle: 'Wewnętrzny chatbot RAG',
        description: 'Wewnętrzny chatbot RAG odpowiadający na pytania pracowników na podstawie dokumentacji firmowej (procedury, wiki, logi). Pipeline obejmuje chunking dokumentów, embeddingi, semantic retrieval oraz odpowiedzi LLM osadzone w kontekście (context-grounded), serwowane przez FastAPI. Ograniczył liczbę powtarzalnych zapytań do wsparcia wewnętrznego; wdrożony jako narzędzie wewnętrzne oraz jako widget osadzany na stronie.',
      },
      ePrescription: {
        title: 'System e-recept - praktyka lekarska',
        subtitle: 'Projekt dla klienta · Platforma telemedyczna zgodna z RODO',
        description: 'Zgodna z RODO platforma webowa do konsultacji medycznych online z wystawianiem e-recept, zrealizowana dla klienta wraz z dedykowaną stroną i systemem CMS. Skonfigurowana bezpieczna infrastruktura serwerowa (Ubuntu VPS, nginx, SSL, szyfrowana baza danych) do obsługi danych wrażliwych. Zaimplementowany pełny workflow pacjent/lekarz: formularz zgłoszeniowy, płatność (Stripe/BLIK), dostarczenie kodu e-recepty SMS-em i e-mail transakcyjny. Rezultat: redukcja obciążenia administracyjnego lekarza o ~2h dziennie i wzrost przychodu o ~10%.',
      },
      mailflow: {
        title: 'Wieloplatformowy klient poczty Local-First (MailFlow)',
        subtitle: 'Desktopowa aplikacja z AI działającym na urządzeniu',
        description: 'Wieloplatformowy desktopowy klient poczty skoncentrowany na prywatności i suwerenności danych, kierowany do klientów B2B w UE. Architektura oparta na Tauri 2.0 i Rust zapewnia lekką, bezpieczną natywną powłokę, a frontend powstał w React/TypeScript. Zaimplementowane szyfrowane lokalne przechowywanie danych (SQLCipher) oraz funkcje AI działające na urządzeniu przez Ollama - dane użytkownika pozostają w pełni lokalne (zgodność z RODO). Zaprojektowany jako prywatna alternatywa dla chmurowych klientów poczty, z lokalnym AI jako głównym wyróżnikiem.',
      },
    },
  },
};

// Language-independent project data; text comes from content[language].projects[key]
const projectMeta = [
  {
    key: 'rag',
    tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'Vector Database', 'OpenAI API'],
    gradient: 'from-cyan-500 to-blue-600',
    icon: '🤖',
    links: {}
  },
  {
    key: 'ePrescription',
    tech: ['WordPress', 'Gravity Forms', 'Stripe', 'RODO/GDPR Compliance', 'Linux VPS', 'nginx'],
    gradient: 'from-teal-500 to-cyan-600',
    icon: '🩺',
    links: {}
  },
  {
    key: 'mailflow',
    tech: ['Tauri 2.0', 'Rust', 'React', 'TypeScript', 'SQLCipher', 'Ollama'],
    gradient: 'from-indigo-500 to-blue-600',
    icon: '✉️',
    links: {}
  },
];

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = content[language];

  const projects = projectMeta.map((project) => ({ ...project, ...t.projects[project.key] }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="featured-projects" className="section-container bg-gray-900/20 backdrop-blur-sm">
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
          <div className="w-20 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t.intro}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.key}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              {/* Icon and Gradient Header */}
              <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.gradient} mb-6 flex flex-col items-center justify-center shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative z-10 text-6xl mb-2">{project.icon}</span>
                <span className="relative z-10 text-white font-bold text-center px-4">{project.title}</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1 group-hover:text-baby-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-dark-bg/50 text-baby-blue rounded-full border border-baby-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {Object.keys(project.links).length > 0 && (
                  <div className="flex gap-3 pt-4">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-baby-blue/10 hover:bg-baby-blue/20 text-baby-blue rounded-lg transition-all duration-300 text-sm font-medium border border-baby-blue/20"
                        title={t.viewDemo}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg/50 hover:bg-dark-bg text-text-secondary hover:text-baby-blue rounded-lg transition-all duration-300 text-sm font-medium border border-white/10"
                        title={t.viewGithub}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.links.pdf && (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg/30 text-text-secondary/50 rounded-lg text-sm font-medium border border-white/5 cursor-not-allowed"
                        title={t.pdfOnRequest}
                      >
                        <FileText className="w-4 h-4" />
                        PDF
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/it-projects"
            className="inline-flex items-center gap-2 btn-primary"
          >
            {t.viewAll}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
