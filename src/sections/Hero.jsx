import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const EMAIL = 'contact@jakubwojtas.com';

const content = {
  en: {
    fullStack: 'Full-Stack Developer',
    dataScientist: 'Data Scientist',
    emailLabel: 'Email',
    basedLabel: 'Based in',
    basedValue: 'Warsaw, Poland',
    viewProjects: 'View projects',
    contactMe: 'Contact me',
  },
  pl: {
    fullStack: 'Full-Stack Developer',
    dataScientist: 'Data Scientist',
    emailLabel: 'E-mail',
    basedLabel: 'Lokalizacja',
    basedValue: 'Warszawa, Polska',
    viewProjects: 'Zobacz projekty',
    contactMe: 'Skontaktuj się',
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];
  const reduceMotion = useReducedMotion();

  // The one orchestrated moment on the page: the name rises out of its baseline
  const line = (delay) => ({
    initial: reduceMotion ? false : { y: '100%' },
    animate: { y: 0 },
    transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.1, 1] },
  });

  return (
    <section className="bg-paper page-x pt-24 md:pt-28 pb-6">
      <div className="grid-12 w-full">
        <div className="col-span-4 md:col-span-12">
          <h1 className="font-display font-bold text-hero">
            <span className="block overflow-hidden pb-[0.2em] -mb-[0.14em]">
              <motion.span className="block" {...line(0.1)}>Jakub</motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.2em] -mb-[0.14em]">
              <motion.span className="block" {...line(0.22)}>Wojtas</motion.span>
            </span>
          </h1>
          <p className="font-display text-lead md:text-title mt-4">
            {t.fullStack}
            <br />
            {t.dataScientist}
          </p>
        </div>
      </div>

      <div className="grid-12 w-full rule pt-4 mt-10 gap-y-6">
        <dl className="col-span-4 md:col-span-3">
          <dt className="meta-label">{t.emailLabel}</dt>
          <dd>
            <a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a>
          </dd>
        </dl>
        <dl className="col-span-4 md:col-span-3">
          <dt className="meta-label">{t.basedLabel}</dt>
          <dd>{t.basedValue}</dd>
        </dl>
        <div className="col-span-4 md:col-start-7 md:col-span-6 flex flex-wrap gap-3 md:justify-end items-start [&>*]:whitespace-nowrap">
          <a href="#featured-projects" className="btn-primary">{t.viewProjects}</a>
          <Link to="/#contact" className="btn-secondary">{t.contactMe}</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
