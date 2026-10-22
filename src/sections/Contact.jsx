import { useLanguage } from '../i18n/LanguageContext';

const content = {
  en: {
    heading: 'Get in touch',
    intro: "Let's discuss your next project",
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    locationValue: 'Warsaw, Poland',
    elsewhere: 'Elsewhere',
  },
  pl: {
    heading: 'Bądźmy w kontakcie',
    intro: 'Porozmawiajmy o Twoim kolejnym projekcie',
    email: 'E-mail',
    phone: 'Telefon',
    location: 'Lokalizacja',
    locationValue: 'Warszawa, Polska',
    elsewhere: 'Profile',
  },
};

const EMAIL = 'contact@jakubwojtas.com';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/kuba-wojtas' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jakub-wojtas-220b503a5/' },
];

const Contact = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="contact" className="section bg-ink text-paper scroll-mt-16">
      <div className="grid-12 gap-y-12">
        <div className="col-span-4">
          <h2 className="heading-mark font-display font-normal text-heading mb-6">{t.heading}</h2>
          <p className="text-stone">{t.intro}</p>
        </div>

        <div className="section-body">
          <p className="meta-label !text-stone mb-2">{t.email}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="block font-display font-bold text-[clamp(1.75rem,5.2vw,5rem)] leading-none tracking-tight break-all sm:break-normal hover:text-signal transition-colors"
          >
            {EMAIL}
          </a>

          <dl className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-8 mt-16 border-t border-paper/30 pt-5">
            <div className="col-span-4 md:col-span-3">
              <dt className="text-label text-stone mb-1">{t.phone}</dt>
              <dd>
                <a href="tel:+48518607005" className="link">+48 518 607 005</a>
              </dd>
            </div>
            <div className="col-span-2 md:col-span-2">
              <dt className="text-label text-stone mb-1">{t.location}</dt>
              <dd>{t.locationValue}</dd>
            </div>
            <div className="col-span-2 md:col-span-3">
              <dt className="text-label text-stone mb-1">{t.elsewhere}</dt>
              <dd className="flex flex-col">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="link w-fit">
                    {link.name}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Contact;
