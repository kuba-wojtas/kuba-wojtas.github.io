import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ title, icon, technologies, color, hint = 'Hover to see technologies' }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-72 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="
          absolute inset-0
          bg-gradient-to-br from-white/[0.05] to-white/[0.01]
          backdrop-blur-xl
          border border-white/[0.08]
          rounded-3xl
          p-8
          flex flex-col items-center justify-center
          backface-hidden
          overflow-hidden
        ">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5`} />

          {/* Border Glow */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-0 hover:opacity-20 blur-xl transition-opacity duration-500`} />

          <div className="relative z-10 text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br ${color} text-white mb-4 shadow-lg`}>
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{hint}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br from-blue-500/15 to-purple-500/15
            backdrop-blur-xl
            border border-blue-400/30
            rounded-3xl
            p-6
            flex flex-col items-center justify-center
            backface-hidden
            overflow-hidden
          "
          style={{ transform: 'rotateY(180deg)' }}
        >
          {/* Border Glow */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-10`} />

          <div className="relative z-10 text-center">
            <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isFlipped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-gray-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
