import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Analysis from './pages/Analysis';
import Control from './pages/Control';
import Surveillance from './pages/Surveillance';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/control" element={<Control />} />
        <Route path="/surveillance" element={<Surveillance />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
