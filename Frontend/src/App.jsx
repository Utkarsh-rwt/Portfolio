import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import About from './components/About.jsx'
import ContactMe from './components/ContactMe.jsx'
import Projects from './pages/projects.jsx'
import Skills from './pages/skills.jsx'
import Blogs from './pages/blogs.jsx'

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
    </div>
  );
};

export default App