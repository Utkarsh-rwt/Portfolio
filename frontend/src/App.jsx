import { AnimatePresence, motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'

import About from './components/HomePageComponents/About.jsx'

import Projects from './pages/projects.jsx'
import Skills from './pages/skills.jsx'
import Blogs from './pages/blogs.jsx'
import Blog1 from './components/blogscomponents/Blog1.jsx'
import Blog2 from './components/blogscomponents/Blog2.jsx'
import OpenSource from './pages/open-source.jsx'

const App = () => {
  const location = useLocation()

  return (
    <div className="app-shell min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main className="page-content w-full pt-16 sm:pt-20 lg:pt-24">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="min-h-[calc(100vh-4rem)]"
          >
            <Routes location={location}>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/blog1" element={<Blog1 />} />
              <Route path="/blogs/blog2" element={<Blog2 />} />
              <Route path="/open-source" element={<OpenSource />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App
