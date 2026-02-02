import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Code2,
  Music,
  Database,
  Languages,
  Users
} from 'lucide-react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'DATA SCIENCE & ML',
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
      title: 'WEB DEVELOPMENT',
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      skills: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Firebase (Auth, Firestore, Hosting)',
        'HTML5',
        'CSS3',
        'Responsive Design'
      ]
    },
    {
      title: 'AUDIO ENGINEERING',
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
      title: 'DATABASES & TOOLS',
      icon: <Database className="w-8 h-8" />,
      color: 'from-pink-500 to-red-500',
      skills: [
        'SQL',
        'MongoDB',
        'Firestore',
        'Git',
        'GitHub',
        'Power BI',
        'Linux',
        'Apache Spark',
        'Hadoop'
      ]
    },
    {
      title: 'LANGUAGES',
      icon: <Languages className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      skills: [
        'Polish (Native)',
        'English (Full Professional)',
        'German (Basic)',
        'Italian (Beginner)'
      ]
    },
    {
      title: 'SOFT SKILLS',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        'Problem Solving',
        'Fast Learner',
        'Team Collaboration',
        'Communication',
        'Project Management'
      ]
    }
  ];

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
            Skills & <span className="gradient-text">Expertise</span>
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
            >
              <SkillCard
                title={category.title}
                icon={category.icon}
                technologies={category.skills}
                color={category.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
