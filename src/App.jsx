import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Unit from './components/Unit'
import Condominium from './components/Condominium'
import ScrollToTop from './scroll/ScrollToTop'
import './index.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/Real-Estate-Site/' element={<Home />} />
        <Route path='/Real-Estate-Site/unit/:id'
          element={<Unit />} />
        <Route path='/Real-Estate-Site/type/:name'
          element={<Condominium />} />
        <Route path='/Real-Estate-Site/Contact/' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
