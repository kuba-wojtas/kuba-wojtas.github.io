import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'Skills & expertise',
    titles: {
      dataScience: 'Data science & ML',
      web: 'Web development',
      ai: 'AI & LLM engineering',
      audio: 'Audio engineering',
      databases: 'Databases & tools',
      languages: 'Languages',
      softSkills: 'Soft skills',
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
    heading: 'Umiejętności i kompetencje',
    titles: {
      dataScience: 'Data science i ML',
      web: 'Web development',
      ai: 'AI i inżynieria LLM',
      audio: 'Inżynieria dźwięku',
      databases: 'Bazy danych i narzędzia',
      languages: 'Języki',
      softSkills: 'Umiejętności miękkie',
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
  const { language } = useLanguage();
  const t = content[language];

  const skillCategories = [
    {
      title: t.titles.dataScience,
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
      skills: t.languages
    },
    {
      title: t.titles.softSkills,
      skills: t.softSkills
    }
  ];

  return (
    <section id="skills" className="section bg-ink-soft text-paper">
      <div className="grid-12">
        <h2 className="section-heading">{t.heading}</h2>

        <div className="section-body grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="border-t-2 border-signal pt-4">
              <h3 className="font-display font-bold text-lead mb-4">{category.title}</h3>
              <ul className="text-stone space-y-1">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
