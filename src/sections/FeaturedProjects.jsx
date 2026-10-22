import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'Featured projects',
    intro: 'A selection of my latest work in AI, web development, and data science',
    viewAll: 'View all projects',
    projects: {
      rag: {
        title: 'AI Knowledge Assistant (RAG)',
        subtitle: 'Internal RAG Chatbot',
        description: 'Internal RAG chatbot that answers employee questions based on company documentation (procedures, wiki, logs). The pipeline covers document chunking, embeddings, semantic retrieval, and context-grounded LLM answers served via FastAPI. Reduced repetitive internal support requests; deployed as an internal tool and as an embeddable website widget.',
      },
      ePrescription: {
        title: 'E-Prescription System',
        subtitle: 'Client Project · GDPR-Compliant Telemedicine Platform',
        description: 'GDPR-compliant web platform for online medical consultations with e-prescription issuing, delivered for a client together with a dedicated website and CMS. Configured secure server infrastructure (Ubuntu VPS, nginx, SSL, encrypted database) for handling sensitive data. Implemented the full patient/doctor workflow: intake form, payment (Stripe/BLIK), e-prescription code delivery via SMS, and transactional email. Cut the doctor\'s administrative workload by ~2h/day and increased revenue by ~10%.',
      },
      mailflow: {
        title: 'Multiplatform Local-First Email Client',
        subtitle: 'Privacy-First Desktop App with On-Device AI',
        description: 'Cross-platform desktop email client focused on privacy and data sovereignty, aimed at B2B customers in the EU. Architected with Tauri 2.0 and Rust for a lightweight, secure native shell, with a React/TypeScript frontend. Implemented encrypted local storage (SQLCipher) and on-device AI features via Ollama, so user data stays fully local (GDPR-compliant). Designed as a private alternative to cloud email clients, with local AI as the key differentiator.',
      },
    },
  },
  pl: {
    heading: 'Wybrane projekty',
    intro: 'Wybór moich najnowszych prac z obszaru AI, web developmentu i data science',
    viewAll: 'Zobacz wszystkie projekty',
    projects: {
      rag: {
        title: 'Asystent wiedzy AI (RAG)',
        subtitle: 'Wewnętrzny chatbot RAG',
        description: 'Wewnętrzny chatbot RAG odpowiadający na pytania pracowników na podstawie dokumentacji firmowej (procedury, wiki, logi). Pipeline obejmuje chunking dokumentów, embeddingi, semantic retrieval oraz odpowiedzi LLM osadzone w kontekście (context-grounded), serwowane przez FastAPI. Ograniczył liczbę powtarzalnych zapytań do wsparcia wewnętrznego; wdrożony jako narzędzie wewnętrzne oraz jako widget osadzany na stronie.',
      },
      ePrescription: {
        title: 'System e-recept',
        subtitle: 'Projekt dla klienta · Platforma telemedyczna zgodna z RODO',
        description: 'Zgodna z RODO platforma webowa do konsultacji medycznych online z wystawianiem e-recept, zrealizowana dla klienta wraz z dedykowaną stroną i systemem CMS. Skonfigurowana bezpieczna infrastruktura serwerowa (Ubuntu VPS, nginx, SSL, szyfrowana baza danych) do obsługi danych wrażliwych. Zaimplementowany pełny workflow pacjent/lekarz: formularz zgłoszeniowy, płatność (Stripe/BLIK), dostarczenie kodu e-recepty SMS-em i e-mail transakcyjny. Rezultat: redukcja obciążenia administracyjnego lekarza o ~2h dziennie i wzrost przychodu o ~10%.',
      },
      mailflow: {
        title: 'Wieloplatformowy klient poczty Local-First',
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
  },
  {
    key: 'ePrescription',
    tech: ['WordPress', 'Gravity Forms', 'Stripe', 'RODO/GDPR Compliance', 'Linux VPS', 'nginx'],
  },
  {
    key: 'mailflow',
    tech: ['Tauri 2.0', 'Rust', 'React', 'TypeScript', 'SQLCipher', 'Ollama'],
  },
];

const FeaturedProjects = () => {
  const { language } = useLanguage();
  const t = content[language];

  const projects = projectMeta.map((project) => ({ ...project, ...t.projects[project.key] }));

  return (
    <section id="featured-projects" className="section rule scroll-mt-16">
      <div className="grid-12">
        <div className="col-span-4 mb-12 md:mb-0">
          <h2 className="heading-mark font-display font-normal text-heading mb-6">{t.heading}</h2>
          <p className="text-ink/75 max-w-xs">{t.intro}</p>
        </div>

        <div className="section-body">
          {projects.map((project) => (
            <article key={project.key} className="rule pt-5 pb-12 grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-4">
              <h3 className="col-span-4 md:col-span-8 font-display font-bold text-title md:text-[2.75rem] md:leading-[1] tracking-tight">
                {project.title}
              </h3>
              <p className="col-span-4 md:col-span-2 meta-label">{project.subtitle}</p>
              <p className="col-span-4 md:col-span-4 text-ink/80">{project.description}</p>
              <ul className="col-span-4 md:col-span-2 text-label space-y-0.5">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}

          <div className="rule pt-6">
            <Link to="/it-projects" className="btn-primary">
              {t.viewAll}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
