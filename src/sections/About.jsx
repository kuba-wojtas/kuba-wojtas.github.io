import { useLanguage } from '../i18n/LanguageContext';
import Experience from './Experience';

const content = {
  en: {
    heading: 'About me',
    paragraphs: [
      'I\'m a Full-Stack Developer and Data Scientist with a Master\'s degree in Computer Science (Data Science specialization) from the Polish-Japanese Academy of Information Technology. My background in mechatronics engineering gives me a unique perspective on solving complex problems that bridge theoretical knowledge with practical applications.',
      'My passion lies in machine learning, audio processing, and full-stack development. I love creating innovative solutions that combine AI with seamless user experiences, whether it\'s building intelligent systems or crafting beautiful web applications.',
    ],
    educationTitle: 'Education',
    completed: 'Completed',
    education: [
      {
        school: 'Polish-Japanese Academy of Information Technology',
        degree: 'Computer Science M.Sc (Data Science)',
      },
      {
        school: 'Warsaw University of Technology',
        degree: 'Mechatronics B.Eng',
      },
    ],
    stats: {
      projects: 'Projects completed',
      clients: 'Happy clients',
      experience: 'Years of experience',
    },
  },
  pl: {
    heading: 'O mnie',
    paragraphs: [
      'Jestem Full-Stack Developerem i Data Scientistem z tytułem magistra informatyki (specjalizacja Data Science) Polsko-Japońskiej Akademii Technik Komputerowych. Wykształcenie inżynierskie z mechatroniki daje mi unikalne spojrzenie na rozwiązywanie złożonych problemów, łącząc wiedzę teoretyczną z praktycznym zastosowaniem.',
      'Moją pasją są uczenie maszynowe, przetwarzanie dźwięku i full-stack development. Uwielbiam tworzyć innowacyjne rozwiązania łączące AI z dopracowanym doświadczeniem użytkownika - zarówno przy budowie inteligentnych systemów, jak i estetycznych aplikacji webowych.',
    ],
    educationTitle: 'Wykształcenie',
    completed: 'Ukończone',
    education: [
      {
        school: 'Polsko-Japońska Akademia Technik Komputerowych',
        degree: 'Informatyka, studia magisterskie (Data Science)',
      },
      {
        school: 'Politechnika Warszawska',
        degree: 'Mechatronika, studia inżynierskie',
      },
    ],
    stats: {
      projects: 'Zrealizowanych projektów',
      clients: 'Zadowolonych klientów',
      experience: 'Lata doświadczenia',
    },
  },
};

// Language-independent properties, matched by index with content[language].education
const educationMeta = [
  { period: '2024-2025', completed: true },
  { period: '2020-2024', completed: true },
];

const About = () => {
  const { language } = useLanguage();
  const t = content[language];

  const education = t.education.map((edu, index) => ({ ...edu, ...educationMeta[index] }));

  const stats = [
    { value: '20+', label: t.stats.projects },
    { value: '10+', label: t.stats.clients },
    { value: '3+', label: t.stats.experience },
  ];

  return (
    <section id="about" className="section rule">
      <div className="grid-12">
        <h2 className="section-heading">{t.heading}</h2>

        <div className="section-body">
          <p className="font-display font-normal text-lead md:text-title max-w-[46rem] mb-8">
            {t.paragraphs[0]}
          </p>
          <p className="max-w-measure text-ink/75">
            {t.paragraphs[1]}
          </p>

          <dl className="grid grid-cols-3 gap-6 mt-16 rule pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end gap-2">
                <dt className="meta-label">{stat.label}</dt>
                <dd className="font-display font-bold text-heading text-signal">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="font-display font-normal text-lead mt-20 mb-4">{t.educationTitle}</h3>
          <ul>
            {education.map((edu) => (
              <li key={edu.school} className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-1 rule py-4">
                <span className="col-span-4 md:col-span-2 meta-label pt-0.5">
                  {edu.period}
                  {edu.completed && <span className="ml-3">{t.completed}</span>}
                </span>
                <span className="col-span-4 md:col-span-3 font-bold">{edu.school}</span>
                <span className="col-span-4 md:col-span-3 text-ink/75">{edu.degree}</span>
              </li>
            ))}
          </ul>

          <Experience />
        </div>
      </div>
    </section>
  );
};

export default About;
