import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Shared/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Shared/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add Projects, Resume Components*/}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
