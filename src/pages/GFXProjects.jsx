import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GFXProjects = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const graphicsImages = [
    '/projects/grafiki/glosniej 233.jpg',
    '/projects/grafiki/glosniej1x123.jpg'
  ];

  const videos = [
    { id: 'IowSFTEwUjE' },
    { id: 'EIRRhrnJM6Q' },
    { id: '1Mm65TWHQBY' },
    { id: 'czQxy1xsxW8' },
    { id: 'aM_m6vKUab4' },
    { id: 'NJf6e1EecNc' },
    { id: 'gy1IzesWRtc' }
  ];

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images.map(img => ({ src: img })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-container"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Graphics & <span className="gradient-text">Video Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Creative multimedia work including graphics design and 3D models for video animations.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-baby-blue text-dark-bg shadow-lg shadow-baby-blue/50 border-2 border-baby-blue'
                : 'bg-dark-bg/50 text-text-secondary border-2 border-white/10 hover:border-baby-blue/50'
            }`}
          >
            <span className="mr-2">🎥</span>
            Videos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('graphics')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === 'graphics'
                ? 'bg-baby-blue text-dark-bg shadow-lg shadow-baby-blue/50 border-2 border-baby-blue'
                : 'bg-dark-bg/50 text-text-secondary border-2 border-white/10 hover:border-baby-blue/50'
            }`}
          >
            <span className="mr-2">📷</span>
            Graphics
          </motion.button>
        </div>

        {/* Graphics Tab */}
        {activeTab === 'graphics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {graphicsImages.map((img, index) => {
              console.log('Loading graphics image:', img);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-baby-blue/50 transition-all duration-300"
                  onClick={() => openLightbox(graphicsImages, index)}
                >
                  <img
                    src={img}
                    alt={`Graphics ${index + 1}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Failed to load graphics image:', img);
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23222" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                    }}
                    onLoad={() => {
                      console.log('Successfully loaded graphics image:', img);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-baby-blue/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-8 h-8 text-baby-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold text-sm">Click to enlarge</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="
                  relative
                  bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                  backdrop-blur-xl
                  border border-white/[0.08]
                  rounded-2xl
                  overflow-hidden
                  hover:border-baby-blue/30
                  transition-all duration-500
                  group
                "
                onMouseEnter={() => setHoveredVideo(index)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Shimmer effect */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-white/5 to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-1000
                  z-30
                  pointer-events-none
                " />

                {/* Video container with aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  {/* YouTube Thumbnail - shown when not hovered */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    className={`
                      absolute top-0 left-0 w-full h-full object-cover
                      transition-opacity duration-300
                      ${hoveredVideo === index ? 'opacity-0' : 'opacity-100'}
                    `}
                  />

                  {/* Play icon overlay on thumbnail */}
                  <div className={`
                    absolute inset-0 flex items-center justify-center
                    transition-opacity duration-300
                    ${hoveredVideo === index ? 'opacity-0' : 'opacity-100'}
                  `}>
                    <div className="w-20 h-20 rounded-full bg-baby-blue/80 backdrop-blur-sm flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* YouTube iframe - LOCKED - only loads on hover */}
                  {hoveredVideo === index && (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&loop=1&playlist=${video.id}&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&quality=highres`}
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ pointerEvents: 'none' }}
                    />
                  )}

                  {/* Invisible overlay - blocks all clicks */}
                  <div
                    className="absolute inset-0 cursor-pointer z-10"
                    style={{ pointerEvents: 'all' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
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

export default GFXProjects;
