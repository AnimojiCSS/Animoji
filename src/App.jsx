import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Collections from './components/Collections';
import Documentation from './components/Documentation';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </Router>
    </>
  )
}