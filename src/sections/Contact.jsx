import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: 'contact@jakubwojtas.com',
      href: 'mailto:contact@jakubwojtas.com',
      color: 'from-baby-blue to-blue-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: 'Phone',
      value: '+48 518 607 005',
      href: 'tel:+48518607005',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      label: 'Location',
      value: 'Warsaw, Poland',
      href: null,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/kuba-wojtas',
      hoverColor: 'hover:text-white hover:bg-gray-800',
      glowColor: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/jakub-wojtas-220b503a5/',
      hoverColor: 'hover:text-blue-400 hover:bg-blue-500/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:contact@jakubwojtas.com',
      hoverColor: 'hover:text-green-400 hover:bg-green-500/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]'
    }
  ];

  return (
    <section id="contact" className="section-container bg-gray-900/20 backdrop-blur-sm">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="
                  bg-gradient-to-br from-white/[0.05] to-white/[0.01]
                  backdrop-blur-xl
                  border border-white/[0.08]
                  rounded-2xl
                  p-6
                  text-center
                  transition-all duration-300
                  hover:border-blue-400/30
                  hover:shadow-[0_8px_32px_rgba(178,217,255,0.15)]
                "
              >
                {info.href ? (
                  <a href={info.href} className="block">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${info.color} text-white mx-auto mb-3`}>
                      {info.icon}
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                    <p className="text-white hover:text-blue-400 transition font-medium">
                      {info.value}
                    </p>
                  </a>
                ) : (
                  <>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${info.color} text-white mx-auto mb-3`}>
                      {info.icon}
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Animated Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative
                  w-16 h-16
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-400
                  transition-all duration-300
                  ${link.hoverColor}
                  ${link.glowColor}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  rotate: [0, -10, 10, 0]
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}

                {/* Tooltip */}
                <span className="
                  absolute -top-10
                  px-3 py-1
                  rounded-lg
                  bg-gray-800
                  text-white text-sm
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                  whitespace-nowrap
                ">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="group"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-start gap-4 p-4 rounded-xl bg-dark-bg/50 hover:bg-dark-bg transition-all duration-300 hover:scale-105"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary mb-1">{info.label}</p>
                          <p className="text-text-primary font-semibold group-hover:text-baby-blue transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-bg/50">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white flex-shrink-0 shadow-lg`}>
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary mb-1">{info.label}</p>
                          <p className="text-text-primary font-semibold">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
