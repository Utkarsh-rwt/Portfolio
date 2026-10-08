import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import About from './components/HomePageComponents/About.jsx'

import Projects from './pages/projects.jsx'
import Skills from './pages/skills.jsx'
import Blogs from './pages/blogs.jsx'
import Blog1 from './components/blogscomponents/Blog1.jsx'

const App = () => {
  return (
    <div className="app-shell min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main className="page-content w-full pt-16 sm:pt-20 lg:pt-24">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/blog1" element={<Blog1 />} />
        </Routes>
      </main>
    </div>
  );
};

export default App