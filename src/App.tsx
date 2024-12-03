import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white dark:bg-gray-900 min-h-screen relative"
      >
        <ThemeToggle />
        <main className="relative z-10">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;