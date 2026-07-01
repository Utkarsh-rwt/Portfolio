import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="app-shell">
      <About/>
      <Navbar />
      

      <main className="page-content">
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App