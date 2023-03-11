import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Map from './components/Map';
import Media from './components/Media';

const App = () => {
  return (
    <div className="font-cormorant w-full min-h-screen bg-[#f9f9f9] grid grid-rows-[min-content_1fr_min-content]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
