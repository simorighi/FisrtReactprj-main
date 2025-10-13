import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SubjectPage from './pages/subjectPage'

function App() {

  return (
    <>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:name" element={<SubjectPage />} />
        </Routes>
      </div>
    </>
  )
};

export default App;
