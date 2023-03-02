import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Shared/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex h-screen flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add Projects, Resume Components*/}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
