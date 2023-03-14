import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Map from './components/Map';
import About from './components/About';
import Gallery from './components/Gallery';
import Costs from './components/Costs';

const App = () => {
  return (
    <div className="font-cormorant w-full min-h-screen bg-[#f9f9f9] grid grid-rows-[min-content_1fr_min-content]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/cennik" element={<Costs />} />
        <Route path="/o_nas" element={<About />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/mapa" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
