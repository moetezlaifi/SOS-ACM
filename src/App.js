import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home'; 
import EnstaArchive from './pages/EnstaArchive/Enstarchive';
import FirstSemester from './pages/1S1/premiere1';
import SecondSemester from './pages/1S2/premiere2';
import FirstSemester2 from './pages/2S1/desieme1';
import SecondSemester2 from './pages/2S2/desieme2';
import LastSemester from './pages/3S/troisieme';
import SubjectResources from './pages/Matiere/matiere';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EnstaArchive" element={<EnstaArchive/>} />
          <Route path="/premiere1" element={<FirstSemester/>} />
          <Route path="/premiere2" element={<SecondSemester/>} />
          <Route path="/desieme1" element={<FirstSemester2/>} />
          <Route path="/desieme2" element={<SecondSemester2/>} />
          <Route path="/troisieme" element={<LastSemester/>} />
          <Route path="/matiere" element={<SubjectResources/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;