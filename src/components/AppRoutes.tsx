import { Routes, Route } from 'react-router-dom'
import Hero from '../pages/Hero'
import Home from '../pages/Home'
import About from '../pages/About'
import Analysis from '../pages/Analysis'
import Control from '../pages/Control'
import Surveillance from '../pages/Surveillance'
import Search from '../pages/Search'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="/control" element={<Control />} />
            <Route path="/search" element={<Search />} />
            <Route path="/surveillance" element={<Surveillance />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default AppRoutes