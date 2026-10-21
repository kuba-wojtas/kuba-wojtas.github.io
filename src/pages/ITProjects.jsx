import { motion } from 'framer-motion';
import { FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'IT Projects &',
    headingAccent: 'Data Science Work',
    intro: 'Showcase of my work in machine learning, web development, and data analysis',
    keyFeatures: 'Key Features',
    keyAchievements: 'Key Achievements',
    technologiesUsed: 'Technologies Used',
    screenshots: 'Screenshots',
    screenshot: 'Screenshot',
    clickToEnlarge: 'Click to enlarge',
    pdfOnRequest: 'PDF available on request',
    pdfButton: 'PDF (Available on request)',
    projects: {
      rag: {
        title: 'AI Knowledge Assistant (RAG)',
        subtitle: 'Internal RAG Chatbot · Python & FastAPI',
        description: 'Internal RAG chatbot that answers employee questions based on company documentation (procedures, wiki, logs). The pipeline covers document chunking, embeddings, semantic retrieval, and context-grounded LLM answers served via FastAPI. Reduced repetitive internal support requests; deployed as an internal tool and as an embeddable website widget.',
        additionalInfo: 'Built to give employees instant answers grounded in company knowledge instead of searching through scattered documents or asking the support team. For each question the system retrieves the most relevant documentation fragments and passes them to the LLM as context, so responses stay grounded in the source material.',
        features: [
          'Document ingestion & chunking (procedures, wiki, logs)',
          'Embeddings stored in a vector database',
          'Semantic retrieval of relevant context',
          'Context-grounded LLM answers',
          'REST API built with FastAPI',
          'Orchestration with LangChain',
          'Deployed as an internal tool',
          'Embeddable chat widget for websites'
        ],
        achievements: [
          'Reduced repetitive internal support requests'
        ]
      },
      ePrescription: {
        title: 'E-Prescription System - Medical Practice',
        subtitle: 'Client Project · GDPR-Compliant Telemedicine Platform',
        description: 'GDPR-compliant web platform for online medical consultations with e-prescription issuing, delivered for a client together with a dedicated website and CMS. Configured secure server infrastructure (Ubuntu VPS, nginx, SSL, encrypted database) for handling sensitive data. Implemented the full patient/doctor workflow: intake form, payment (Stripe/BLIK), e-prescription code delivery via SMS, and transactional email.',
        additionalInfo: 'End-to-end delivery for a medical practice client - from the public website and CMS, through the online consultation and payment flow, to the secure server infrastructure handling sensitive medical data in line with GDPR.',
        features: [
          'GDPR-compliant handling of sensitive medical data',
          'Online consultation intake form (Gravity Forms)',
          'Online payments via Stripe & BLIK',
          'E-prescription code delivered via SMS',
          'Transactional email notifications',
          'Dedicated website with CMS (WordPress)',
          'Ubuntu VPS with nginx & SSL',
          'Encrypted database'
        ],
        achievements: [
          '~2h/day less administrative work for the doctor',
          '~10% revenue increase'
        ]
      },
      mailflow: {
        title: 'Multiplatform Local-First Email Client (MailFlow)',
        subtitle: 'Privacy-First Desktop App with On-Device AI',
        description: 'Cross-platform desktop email client focused on privacy and data sovereignty, aimed at B2B customers in the EU. Architected with Tauri 2.0 and Rust for a lightweight, secure native shell, with a React/TypeScript frontend. Implemented encrypted local storage (SQLCipher) and on-device AI features via Ollama, so user data stays fully local (GDPR-compliant).',
        additionalInfo: 'Designed as a private alternative to cloud email clients for businesses that do not want their correspondence processed by third-party cloud providers. Local AI running on the user\'s device is the key differentiator.',
        features: [
          'Cross-platform desktop app (Tauri 2.0)',
          'Rust backend for a lightweight, secure native shell',
          'React + TypeScript frontend',
          'Encrypted local storage with SQLCipher',
          'On-device AI features via Ollama',
          'User data stays fully local (GDPR)',
          'Aimed at B2B customers in the EU',
          'Private alternative to cloud email clients'
        ]
      },
      spotify: {
        title: 'Spotify Music Insights & Recommendation Engine',
        subtitle: 'Python Application with AI Integration',
        description: 'Python application leveraging Spotify Web API for personalized music analysis. Aggregates listening habits, genre distribution, and temporal patterns. Generates song recommendations using collaborative filtering. Features interactive dashboard with visualizations and AI-generated natural language summaries via OpenAI API.',
        additionalInfo: 'Comprehensive music analytics platform that provides deep insights into user listening patterns. Implements collaborative filtering algorithms for personalized recommendations. Features include temporal analysis of listening habits, genre distribution visualization, top artists and tracks analysis, and AI-powered natural language summaries of user preferences.',
        features: [
          'Spotify Web API integration',
          'Listening habit aggregation & analysis',
          'Genre distribution visualization',
          'Temporal pattern analysis',
          'Collaborative filtering recommendations',
          'Interactive Streamlit dashboard',
          'AI-generated natural language summaries',
          'Top artists and tracks analysis'
        ],
        screenshotCaptions: [
          'Music Analysis Dashboard',
          'Recommendation Results',
          'Genre Distribution & Insights'
        ]
      },
      genreClassifier: {
        title: 'Deep Learning Music Genre Classifier',
        subtitle: 'CNN-Based Audio Analysis - Master\'s Thesis',
        description: 'Convolutional Neural Network achieving 71.52% accuracy on GTZAN dataset. Processes Mel-spectrograms to classify 10 music genres. Features BatchNorm, Dropout, LeakyReLU activation, and Adam optimizer. Includes Grad-CAM visualizations for model interpretability and comprehensive hyperparameter tuning.',
        additionalInfo: 'Master\'s thesis project implementing deep learning for audio classification. Model trained on 1000 audio samples, using Mel-spectrogram preprocessing with 128 frequency bands. Achieved 71.52% test accuracy with best performance on classical (100% recall) and metal (93% recall) genres. Implemented advanced regularization techniques including dropout (0.15), batch normalization, and early stopping.',
        achievements: [
          '71.52% accuracy on 10-class classification',
          'Grad-CAM visualization for model interpretability',
          'Comprehensive hyperparameter optimization',
          'Confusion matrix analysis revealing genre similarities',
          '100% recall on classical genre',
          '93% recall on metal genre',
          'Advanced regularization with BatchNorm & Dropout',
          'Mel-spectrogram preprocessing pipeline'
        ],
        screenshotCaptions: [
          'Mel Spectrogram Example',
          'Training Accuracy Curves',
          'Confusion Matrix'
        ]
      },
      rolnictwo: {
        title: 'RolnictwoToMy Agricultural Marketplace',
        subtitle: 'Full-Stack Web & Mobile Platform',
        description: 'Comprehensive two-sided marketplace platform connecting farmers with buyers. Built with React and Firebase, featuring real-time search with autocomplete, user authentication, product filtering across multiple categories, guest browsing, and favorites system. Successfully deployed to production with Firebase Hosting. Mobile app completed and available. Future plans include subscription-based contact access model.',
        additionalInfo: 'Implemented comprehensive user dashboard with profile management, offer tracking, and favorites system. Built responsive design supporting desktop and mobile browsers. Integrated phone number validation with country codes, flexible pricing options, and quality parameter filtering.',
        features: [
          'Real-time search with autocomplete',
          'Multi-category product filtering',
          'User authentication & authorization',
          'Planned subscription-based contact system',
          'Responsive design (desktop & mobile)',
          'Guest browsing functionality',
          'Favorites & wishlist system',
          'User dashboard with profile management',
          'Phone validation with country codes'
        ]
      },
      equalizer: {
        title: 'Professional Audio Equalizer Plugin',
        subtitle: 'VST3 Plugin - Bachelor\'s Thesis',
        description: 'Three-band parametric equalizer plugin in VST3 standard using JUCE framework. Features real-time spectrum analyzer, adjustable slopes (12-48dB/Oct), peak filter with variable Q-factor, and low-latency processing. Supports major DAWs including FL Studio, Logic Pro, and Ableton Live.',
        additionalInfo: 'Professional-grade audio plugin implementing three-band parametric equalization. Bachelor\'s thesis project demonstrating advanced DSP techniques and real-time audio processing capabilities.',
        features: [
          'High-pass filter with adjustable slopes (12/24/36/48 dB/Oct)',
          'Low-pass filter with adjustable slopes (12/24/36/48 dB/Oct)',
          'Parametric peak filter with variable gain (-24 to +24 dB)',
          'Variable Q-factor for precise frequency targeting',
          'Real-time FFT-based spectrum analyzer',
          'Stereo visualization with independent L/R channels',
          'JUCE framework ensuring cross-platform compatibility',
          'Zero-latency processing for live performance',
          'Automated parameter saving and loading',
          'Support for FL Studio, Logic Pro, and Ableton Live'
        ]
      },
    },
  },
  pl: {
    heading: 'Projekty IT i',
    headingAccent: 'Data Science',
    intro: 'Przegląd moich prac z zakresu uczenia maszynowego, web developmentu i analizy danych',
    keyFeatures: 'Kluczowe funkcje',
    keyAchievements: 'Kluczowe osiągnięcia',
    technologiesUsed: 'Wykorzystane technologie',
    screenshots: 'Zrzuty ekranu',
    screenshot: 'Zrzut ekranu',
    clickToEnlarge: 'Kliknij, aby powiększyć',
    pdfOnRequest: 'PDF dostępny na prośbę',
    pdfButton: 'PDF (dostępny na prośbę)',
    projects: {
      rag: {
        title: 'Asystent wiedzy AI (RAG)',
        subtitle: 'Wewnętrzny chatbot RAG · Python i FastAPI',
        description: 'Wewnętrzny chatbot RAG odpowiadający na pytania pracowników na podstawie dokumentacji firmowej (procedury, wiki, logi). Pipeline obejmuje chunking dokumentów, embeddingi, semantic retrieval oraz odpowiedzi LLM osadzone w kontekście (context-grounded), serwowane przez FastAPI. Ograniczył liczbę powtarzalnych zapytań do wsparcia wewnętrznego; wdrożony jako narzędzie wewnętrzne oraz jako widget osadzany na stronie.',
        additionalInfo: 'Stworzony, aby pracownicy otrzymywali natychmiastowe odpowiedzi oparte na wiedzy firmowej, zamiast przeszukiwać rozproszone dokumenty lub pytać zespół wsparcia. Dla każdego pytania system wyszukuje najtrafniejsze fragmenty dokumentacji i przekazuje je do LLM jako kontekst, dzięki czemu odpowiedzi pozostają oparte na materiałach źródłowych.',
        features: [
          'Import i chunking dokumentów (procedury, wiki, logi)',
          'Embeddingi przechowywane w bazie wektorowej',
          'Semantic retrieval odpowiedniego kontekstu',
          'Odpowiedzi LLM osadzone w kontekście',
          'REST API zbudowane w FastAPI',
          'Orkiestracja z użyciem LangChain',
          'Wdrożenie jako narzędzie wewnętrzne',
          'Widget czatu osadzany na stronach'
        ],
        achievements: [
          'Mniej powtarzalnych zapytań do wsparcia wewnętrznego'
        ]
      },
      ePrescription: {
        title: 'System e-recept - praktyka lekarska',
        subtitle: 'Projekt dla klienta · Platforma telemedyczna zgodna z RODO',
        description: 'Zgodna z RODO platforma webowa do konsultacji medycznych online z wystawianiem e-recept, zrealizowana dla klienta wraz z dedykowaną stroną i systemem CMS. Skonfigurowana bezpieczna infrastruktura serwerowa (Ubuntu VPS, nginx, SSL, szyfrowana baza danych) do obsługi danych wrażliwych. Zaimplementowany pełny workflow pacjent/lekarz: formularz zgłoszeniowy, płatność (Stripe/BLIK), dostarczenie kodu e-recepty SMS-em i e-mail transakcyjny.',
        additionalInfo: 'Kompleksowa realizacja dla klienta z branży medycznej - od publicznej strony i CMS, przez proces konsultacji online i płatności, po bezpieczną infrastrukturę serwerową przetwarzającą wrażliwe dane medyczne zgodnie z RODO.',
        features: [
          'Przetwarzanie wrażliwych danych medycznych zgodnie z RODO',
          'Formularz zgłoszeniowy konsultacji (Gravity Forms)',
          'Płatności online przez Stripe i BLIK',
          'Dostarczenie kodu e-recepty SMS-em',
          'Transakcyjne powiadomienia e-mail',
          'Dedykowana strona z CMS (WordPress)',
          'Ubuntu VPS z nginx i SSL',
          'Szyfrowana baza danych'
        ],
        achievements: [
          'Redukcja pracy administracyjnej lekarza o ~2h dziennie',
          'Wzrost przychodu o ~10%'
        ]
      },
      mailflow: {
        title: 'Wieloplatformowy klient poczty Local-First (MailFlow)',
        subtitle: 'Desktopowa aplikacja z AI działającym na urządzeniu',
        description: 'Wieloplatformowy desktopowy klient poczty skoncentrowany na prywatności i suwerenności danych, kierowany do klientów B2B w UE. Architektura oparta na Tauri 2.0 i Rust zapewnia lekką, bezpieczną natywną powłokę, a frontend powstał w React/TypeScript. Zaimplementowane szyfrowane lokalne przechowywanie danych (SQLCipher) oraz funkcje AI działające na urządzeniu przez Ollama - dane użytkownika pozostają w pełni lokalne (zgodność z RODO).',
        additionalInfo: 'Zaprojektowany jako prywatna alternatywa dla chmurowych klientów poczty dla firm, które nie chcą, aby ich korespondencja była przetwarzana przez zewnętrznych dostawców chmury. Głównym wyróżnikiem jest lokalne AI działające na urządzeniu użytkownika.',
        features: [
          'Wieloplatformowa aplikacja desktopowa (Tauri 2.0)',
          'Backend w Rust - lekka i bezpieczna natywna powłoka',
          'Frontend w React + TypeScript',
          'Szyfrowane lokalne przechowywanie danych (SQLCipher)',
          'Funkcje AI działające na urządzeniu przez Ollama',
          'Dane użytkownika pozostają w pełni lokalne (RODO)',
          'Kierowany do klientów B2B w UE',
          'Prywatna alternatywa dla chmurowych klientów poczty'
        ]
      },
      spotify: {
        title: 'Spotify Music Insights i silnik rekomendacji',
        subtitle: 'Aplikacja w Pythonie z integracją AI',
        description: 'Aplikacja w Pythonie wykorzystująca Spotify Web API do spersonalizowanej analizy muzyki. Agreguje nawyki słuchania, rozkład gatunków i wzorce czasowe. Generuje rekomendacje utworów metodą collaborative filtering. Zawiera interaktywny dashboard z wizualizacjami oraz podsumowania w języku naturalnym generowane przez OpenAI API.',
        additionalInfo: 'Kompleksowa platforma analityki muzycznej dostarczająca szczegółowych informacji o wzorcach słuchania użytkownika. Implementuje algorytmy collaborative filtering do spersonalizowanych rekomendacji. Funkcje obejmują analizę czasową nawyków słuchania, wizualizację rozkładu gatunków, analizę najczęściej słuchanych artystów i utworów oraz podsumowania preferencji generowane przez AI.',
        features: [
          'Integracja ze Spotify Web API',
          'Agregacja i analiza nawyków słuchania',
          'Wizualizacja rozkładu gatunków',
          'Analiza wzorców czasowych',
          'Rekomendacje metodą collaborative filtering',
          'Interaktywny dashboard w Streamlit',
          'Podsumowania w języku naturalnym generowane przez AI',
          'Analiza najpopularniejszych artystów i utworów'
        ],
        screenshotCaptions: [
          'Dashboard analizy muzyki',
          'Wyniki rekomendacji',
          'Rozkład gatunków i wnioski'
        ]
      },
      genreClassifier: {
        title: 'Klasyfikator gatunków muzycznych (Deep Learning)',
        subtitle: 'Analiza audio oparta na CNN - praca magisterska',
        description: 'Konwolucyjna sieć neuronowa osiągająca 71,52% dokładności na zbiorze GTZAN. Przetwarza Mel-spektrogramy, klasyfikując utwory do 10 gatunków muzycznych. Wykorzystuje BatchNorm, Dropout, aktywację LeakyReLU i optymalizator Adam. Zawiera wizualizacje Grad-CAM dla interpretowalności modelu oraz kompleksowe strojenie hiperparametrów.',
        additionalInfo: 'Projekt magisterski wykorzystujący deep learning do klasyfikacji audio. Model trenowany na 1000 próbkach audio z preprocessingiem Mel-spektrogramów o 128 pasmach częstotliwości. Osiągnięto 71,52% dokładności na zbiorze testowym, z najlepszymi wynikami dla muzyki klasycznej (100% recall) i metalu (93% recall). Zastosowano zaawansowane techniki regularyzacji, w tym dropout (0,15), batch normalization i early stopping.',
        achievements: [
          '71,52% dokładności w klasyfikacji 10 klas',
          'Wizualizacja Grad-CAM dla interpretowalności modelu',
          'Kompleksowa optymalizacja hiperparametrów',
          'Analiza macierzy pomyłek ujawniająca podobieństwa gatunków',
          '100% recall dla muzyki klasycznej',
          '93% recall dla metalu',
          'Zaawansowana regularyzacja z BatchNorm i Dropout',
          'Pipeline preprocessingu Mel-spektrogramów'
        ],
        screenshotCaptions: [
          'Przykładowy Mel-spektrogram',
          'Krzywe dokładności treningu',
          'Macierz pomyłek'
        ]
      },
      rolnictwo: {
        title: 'RolnictwoToMy - marketplace rolniczy',
        subtitle: 'Platforma full-stack web i mobile',
        description: 'Kompleksowa dwustronna platforma marketplace łącząca rolników z kupującymi. Zbudowana w React i Firebase - wyszukiwanie w czasie rzeczywistym z autouzupełnianiem, uwierzytelnianie użytkowników, filtrowanie produktów w wielu kategoriach, przeglądanie bez logowania i system ulubionych. Wdrożona produkcyjnie na Firebase Hosting. Aplikacja mobilna ukończona i dostępna. W planach model subskrypcyjnego dostępu do kontaktów.',
        additionalInfo: 'Zaimplementowany rozbudowany panel użytkownika z zarządzaniem profilem, śledzeniem ofert i systemem ulubionych. Responsywny design dla przeglądarek desktopowych i mobilnych. Zintegrowana walidacja numerów telefonów z kodami krajów, elastyczne opcje cenowe i filtrowanie po parametrach jakościowych.',
        features: [
          'Wyszukiwanie w czasie rzeczywistym z autouzupełnianiem',
          'Filtrowanie produktów w wielu kategoriach',
          'Uwierzytelnianie i autoryzacja użytkowników',
          'Planowany subskrypcyjny system kontaktów',
          'Responsywny design (desktop i mobile)',
          'Przeglądanie bez logowania',
          'System ulubionych i listy życzeń',
          'Panel użytkownika z zarządzaniem profilem',
          'Walidacja numerów telefonów z kodami krajów'
        ]
      },
      equalizer: {
        title: 'Profesjonalny plugin korektora audio',
        subtitle: 'Plugin VST3 - praca inżynierska',
        description: 'Trójpasmowy korektor parametryczny w standardzie VST3 zbudowany w frameworku JUCE. Zawiera analizator widma w czasie rzeczywistym, regulowane nachylenie filtrów (12-48 dB/okt.), filtr szczytowy ze zmienną dobrocią Q oraz przetwarzanie o niskich opóźnieniach. Obsługuje popularne DAW, w tym FL Studio, Logic Pro i Ableton Live.',
        additionalInfo: 'Profesjonalny plugin audio realizujący trójpasmową korekcję parametryczną. Projekt inżynierski prezentujący zaawansowane techniki DSP i przetwarzanie dźwięku w czasie rzeczywistym.',
        features: [
          'Filtr górnoprzepustowy z regulowanym nachyleniem (12/24/36/48 dB/okt.)',
          'Filtr dolnoprzepustowy z regulowanym nachyleniem (12/24/36/48 dB/okt.)',
          'Parametryczny filtr szczytowy ze zmiennym wzmocnieniem (-24 do +24 dB)',
          'Zmienna dobroć Q do precyzyjnego doboru częstotliwości',
          'Analizator widma w czasie rzeczywistym oparty na FFT',
          'Wizualizacja stereo z niezależnymi kanałami L/P',
          'Framework JUCE zapewniający kompatybilność międzyplatformową',
          'Przetwarzanie bez opóźnień do zastosowań na żywo',
          'Automatyczne zapisywanie i wczytywanie parametrów',
          'Obsługa FL Studio, Logic Pro i Ableton Live'
        ]
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
    links: {},
    screenshotImages: []
  },
  {
    key: 'ePrescription',
    tech: ['WordPress', 'Gravity Forms', 'Stripe', 'RODO/GDPR Compliance', 'Linux VPS', 'nginx'],
    gradient: 'from-teal-500 to-cyan-600',
    links: {},
    screenshotImages: []
  },
  {
    key: 'mailflow',
    tech: ['Tauri 2.0', 'Rust', 'React', 'TypeScript', 'SQLCipher', 'Ollama'],
    gradient: 'from-indigo-500 to-blue-600',
    links: {},
    screenshotImages: []
  },
  {
    key: 'spotify',
    tech: ['Python', 'Spotify API', 'OpenAI API', 'Pandas', 'Streamlit', 'Plotly', 'scikit-learn'],
    gradient: 'from-green-400 to-blue-500',
    links: {
      github: '#',
    },
    screenshotImages: [
      '/projects/spotify/wyniki1.png',
      '/projects/spotify/wyniki2.png',
      '/projects/spotify/wyniki3.png'
    ]
  },
  {
    key: 'genreClassifier',
    tech: ['Python', 'PyTorch', 'CNN', 'Grad-CAM', 'GTZAN', 'NumPy', 'Librosa', 'Matplotlib'],
    gradient: 'from-purple-500 to-pink-600',
    links: {
      github: '#',
      pdf: '#',
    },
    screenshotImages: [
      '/projects/magisterka/mel_przykl.png',
      '/projects/magisterka/top_dokl.png',
      '/projects/magisterka/top_matrix.png'
    ]
  },
  {
    key: 'rolnictwo',
    tech: ['React', 'Firebase', 'Firestore', 'Tailwind CSS', 'Firebase Auth', 'Firebase Hosting'],
    gradient: 'from-green-500 to-emerald-600',
    links: {
      demo: '#',
      github: '#',
    },
    screenshotImages: []
  },
  {
    key: 'equalizer',
    tech: ['C++', 'JUCE Framework', 'VST3', 'DSP', 'Real-time Audio', 'FFT Analysis'],
    gradient: 'from-blue-500 to-cyan-600',
    links: {
      github: '#',
      pdf: '#',
    },
    screenshotImages: [
      '/projects/inzynierka/EQ 1.png',
      '/projects/inzynierka/EQ 2.png',
      '/projects/inzynierka/EQ 3.png'
    ]
  }
];

const ITProjects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { language } = useLanguage();
  const t = content[language];

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images.map(img => ({ src: img })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const projects = projectMeta.map((project) => ({ ...project, ...t.projects[project.key] }));

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-container"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.heading} <span className="gradient-text">{t.headingAccent}</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            {t.intro}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 md:p-12"
            >
              {/* Project Header */}
              <div className={`h-2 w-24 bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />

              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-text-primary">
                {project.title}
              </h2>
              <p className={`text-lg font-semibold mb-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.subtitle}
              </p>

              {/* Main Description */}
              <p className="text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                {project.additionalInfo}
              </p>

              {/* Features/Achievements */}
              {project.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 gradient-text">{t.keyFeatures}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 p-3 rounded-lg bg-dark-bg/50">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}} />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.achievements && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 gradient-text">{t.keyAchievements}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3 p-3 rounded-lg bg-dark-bg/50">
                        <CheckCircle className="w-5 h-5 mt-0.5 text-baby-blue flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 gradient-text">{t.technologiesUsed}</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-dark-bg/70 text-baby-blue rounded-lg border border-baby-blue/30 font-medium text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots - only show if project has actual screenshots */}
              {project.screenshotImages && project.screenshotImages.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 gradient-text">{t.screenshots}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.screenshotImages.map((img, imgIndex) => (
                      <div key={imgIndex} className="group relative">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-baby-blue/50 transition-all duration-300"
                          onClick={() => openLightbox(project.screenshotImages, imgIndex)}
                        >
                          <img
                            src={img}
                            alt={project.screenshotCaptions?.[imgIndex] || `${t.screenshot} ${imgIndex + 1}`}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23222" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold">{t.clickToEnlarge}</span>
                          </div>
                        </motion.div>
                        {project.screenshotCaptions?.[imgIndex] && (
                          <p className="text-text-secondary text-sm text-center mt-2">
                            {project.screenshotCaptions[imgIndex]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.links.pdf && (
                  <button
                    disabled
                    className="flex items-center gap-2 px-6 py-3 bg-dark-bg/50 text-text-secondary/50 font-semibold rounded-lg border border-white/10 cursor-not-allowed"
                    title={t.pdfOnRequest}
                  >
                    <FileText className="w-5 h-5" />
                    {t.pdfButton}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        index={lightboxIndex}
      />
    </div>
  );
};

export default ITProjects;
