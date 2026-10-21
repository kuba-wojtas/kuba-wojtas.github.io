import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Code2,
  Sparkles,
  Music,
  Database,
  Languages,
  Users
} from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'Skills &',
    headingAccent: 'Expertise',
    hoverHint: 'Hover to see technologies',
    titles: {
      dataScience: 'DATA SCIENCE & ML',
      web: 'WEB DEVELOPMENT',
      ai: 'AI & LLM ENGINEERING',
      audio: 'AUDIO ENGINEERING',
      databases: 'DATABASES & TOOLS',
      languages: 'LANGUAGES',
      softSkills: 'SOFT SKILLS',
    },
    languages: [
      'Polish (Native)',
      'English (Full Professional)',
      'German (Basic)',
      'Italian (Beginner)'
    ],
    softSkills: [
      'Problem Solving',
      'Fast Learner',
      'Team Collaboration',
      'Communication',
      'Project Management'
    ],
  },
  pl: {
    heading: 'Umiejętności i',
    headingAccent: 'Kompetencje',
    hoverHint: 'Najedź, aby zobaczyć technologie',
    titles: {
      dataScience: 'DATA SCIENCE I ML',
      web: 'WEB DEVELOPMENT',
      ai: 'AI I INŻYNIERIA LLM',
      audio: 'INŻYNIERIA DŹWIĘKU',
      databases: 'BAZY DANYCH I NARZĘDZIA',
      languages: 'JĘZYKI',
      softSkills: 'UMIEJĘTNOŚCI MIĘKKIE',
    },
    languages: [
      'Polski (ojczysty)',
      'Angielski (biegły, zawodowy)',
      'Niemiecki (podstawowy)',
      'Włoski (początkujący)'
    ],
    softSkills: [
      'Rozwiązywanie problemów',
      'Szybka nauka',
      'Praca zespołowa',
      'Komunikacja',
      'Zarządzanie projektami'
    ],
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = content[language];

  const skillCategories = [
    {
      title: t.titles.dataScience,
      icon: <Brain className="w-8 h-8" />,
      color: 'from-baby-blue to-blue-500',
      skills: [
        'Python',
        'PyTorch',
        'TensorFlow',
        'NumPy',
        'Pandas',
        'Machine Learning',
        'Deep Learning',
        'CNN',
        'scikit-learn',
        'Grad-CAM'
      ]
    },
    {
      title: t.titles.web,
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'FastAPI',
        'REST API',
        'Firebase (Auth, Firestore, Hosting)',
        'Shopify',
        'HTML5',
        'CSS3',
        'Responsive Design'
      ]
    },
    {
      title: t.titles.ai,
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        'LangChain',
        'RAG',
        'Vector Databases',
        'OpenAI API',
        'Gemini API',
        'Prompt Engineering'
      ]
    },
    {
      title: t.titles.audio,
      icon: <Music className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'C++',
        'JUCE Framework',
        'VST3',
        'Digital Signal Processing (DSP)',
        'Real-time Audio Processing'
      ]
    },
    {
      title: t.titles.databases,
      icon: <Database className="w-8 h-8" />,
      color: 'from-pink-500 to-red-500',
      skills: [
        'SQL',
        'PostgreSQL',
        'MongoDB',
        'Firestore',
        'Pydantic',
        'Docker',
        'Git',
        'GitHub',
        'GitHub Actions (CI/CD)',
        'Power BI',
        'Linux',
        'Apache Spark',
        'Hadoop'
      ]
    },
    {
      title: t.titles.languages,
      icon: <Languages className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      skills: t.languages
    },
    {
      title: t.titles.softSkills,
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      skills: t.softSkills
    }
  ];

  // Center the last card when it ends up alone in the final row of the 3-column grid
  const isLoneLastCard = (index) =>
    index === skillCategories.length - 1 && skillCategories.length % 3 === 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-container bg-gray-900/20 backdrop-blur-sm">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={isLoneLastCard(index) ? 'lg:col-start-2' : ''}
            >
              <SkillCard
                title={category.title}
                icon={category.icon}
                technologies={category.skills}
                color={category.color}
                hint={t.hoverHint}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
