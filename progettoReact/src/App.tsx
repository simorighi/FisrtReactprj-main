import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SubjectPage from './pages/subjectPage'
import SpotlightCard from './components/Card/SpotlightCard'
import SpotlightCardUsage from './components/Card/SpotlightCardUsage'
import CircularGallery from './components/Gallery/CircularGallery'

function App() {

  const location = useLocation();

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spotlight" element={<SpotlightCardUsage />} />
          <Route path="/subject/:name" element={<SubjectPage />} />
          <Route path="/" element={<SpotlightCardUsage />} />
        </Routes>
        {location.pathname === "/" && <CircularGallery />}
      
    </>
  )
};

export default App;
