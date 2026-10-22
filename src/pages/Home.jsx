import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import FeaturedProjects from '../sections/FeaturedProjects';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Contact />
      <FeaturedProjects />
      <Skills />
    </div>
  );
};

export default Home;
