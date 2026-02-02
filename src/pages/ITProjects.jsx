import { motion } from 'framer-motion';
import { FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ITProjects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images.map(img => ({ src: img })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const projects = [
    {
      title: 'Spotify Music Insights & Recommendation Engine',
      subtitle: 'Python Application with AI Integration',
      description: 'Python application leveraging Spotify Web API for personalized music analysis. Aggregates listening habits, genre distribution, and temporal patterns. Generates song recommendations using collaborative filtering. Features interactive dashboard with visualizations and AI-generated natural language summaries via OpenAI API.',
      additionalInfo: 'Comprehensive music analytics platform that provides deep insights into user listening patterns. Implements collaborative filtering algorithms for personalized recommendations. Features include temporal analysis of listening habits, genre distribution visualization, top artists and tracks analysis, and AI-powered natural language summaries of user preferences.',
      tech: ['Python', 'Spotify API', 'OpenAI API', 'Pandas', 'Streamlit', 'Plotly', 'scikit-learn'],
      gradient: 'from-green-400 to-blue-500',
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
      links: {
        github: '#',
      },
      screenshots: 3,
      screenshotImages: [
        '/projects/spotify/wyniki1.png',
        '/projects/spotify/wyniki2.png',
        '/projects/spotify/wyniki3.png'
      ],
      screenshotCaptions: [
        'Music Analysis Dashboard',
        'Recommendation Results',
        'Genre Distribution & Insights'
      ]
    },
    {
      title: 'Deep Learning Music Genre Classifier',
      subtitle: 'CNN-Based Audio Analysis - Master\'s Thesis',
      description: 'Convolutional Neural Network achieving 71.52% accuracy on GTZAN dataset. Processes Mel-spectrograms to classify 10 music genres. Features BatchNorm, Dropout, LeakyReLU activation, and Adam optimizer. Includes Grad-CAM visualizations for model interpretability and comprehensive hyperparameter tuning.',
      additionalInfo: 'Master\'s thesis project implementing deep learning for audio classification. Model trained on 1000 audio samples, using Mel-spectrogram preprocessing with 128 frequency bands. Achieved 71.52% test accuracy with best performance on classical (100% recall) and metal (93% recall) genres. Implemented advanced regularization techniques including dropout (0.15), batch normalization, and early stopping.',
      tech: ['Python', 'PyTorch', 'CNN', 'Grad-CAM', 'GTZAN', 'NumPy', 'Librosa', 'Matplotlib'],
      gradient: 'from-purple-500 to-pink-600',
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
      links: {
        github: '#',
        pdf: '#',
      },
      screenshots: 3,
      screenshotImages: [
        '/projects/magisterka/mel_przykl.png',
        '/projects/magisterka/top_dokl.png',
        '/projects/magisterka/top_matrix.png'
      ],
      screenshotCaptions: [
        'Mel Spectrogram Example',
        'Training Accuracy Curves',
        'Confusion Matrix'
      ]
    },
    {
      title: 'RolnictwoToMy Agricultural Marketplace',
      subtitle: 'Full-Stack Web & Mobile Platform',
      description: 'Comprehensive two-sided marketplace platform connecting farmers with buyers. Built with React and Firebase, featuring real-time search with autocomplete, user authentication, product filtering across multiple categories, guest browsing, and favorites system. Successfully deployed to production with Firebase Hosting. Mobile app completed and available. Future plans include subscription-based contact access model.',
      additionalInfo: 'Implemented comprehensive user dashboard with profile management, offer tracking, and favorites system. Built responsive design supporting desktop and mobile browsers. Integrated phone number validation with country codes, flexible pricing options, and quality parameter filtering.',
      tech: ['React', 'Firebase', 'Firestore', 'Tailwind CSS', 'Firebase Auth', 'Firebase Hosting'],
      gradient: 'from-green-500 to-emerald-600',
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
      ],
      links: {
        demo: '#',
        github: '#',
      },
      screenshots: 3,
      screenshotImages: []
    },
    {
      title: 'Professional Audio Equalizer Plugin',
      subtitle: 'VST3 Plugin - Bachelor\'s Thesis',
      description: 'Three-band parametric equalizer plugin in VST3 standard using JUCE framework. Features real-time spectrum analyzer, adjustable slopes (12-48dB/Oct), peak filter with variable Q-factor, and low-latency processing. Supports major DAWs including FL Studio, Logic Pro, and Ableton Live.',
      additionalInfo: 'Professional-grade audio plugin implementing three-band parametric equalization. Bachelor\'s thesis project demonstrating advanced DSP techniques and real-time audio processing capabilities.',
      tech: ['C++', 'JUCE Framework', 'VST3', 'DSP', 'Real-time Audio', 'FFT Analysis'],
      gradient: 'from-blue-500 to-cyan-600',
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
      ],
      links: {
        github: '#',
        pdf: '#',
      },
      screenshots: 3,
      screenshotImages: [
        '/projects/inzynierka/EQ 1.png',
        '/projects/inzynierka/EQ 2.png',
        '/projects/inzynierka/EQ 3.png'
      ]
    }
  ];

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
            IT Projects & <span className="gradient-text">Data Science Work</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Showcase of my work in machine learning, web development, and data analysis
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                  <h3 className="text-xl font-bold mb-4 gradient-text">Key Features</h3>
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
                  <h3 className="text-xl font-bold mb-4 gradient-text">Key Achievements</h3>
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
                <h3 className="text-xl font-bold mb-4 gradient-text">Technologies Used</h3>
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
                  <h3 className="text-xl font-bold mb-4 gradient-text">Screenshots</h3>
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
                            alt={project.screenshotCaptions?.[imgIndex] || `Screenshot ${imgIndex + 1}`}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23222" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold">Click to enlarge</span>
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
                    title="PDF available on request"
                  >
                    <FileText className="w-5 h-5" />
                    PDF (Available on request)
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
