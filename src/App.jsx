import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Map from './components/Map';
import About from './components/About';
import Costs from './components/Costs';
import SignIn from './components/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="font-cormorant w-full min-h-screen bg-[#f9f9f9] grid grid-rows-[min-content_1fr_min-content]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zapisy" element={<SignIn />} />
        <Route path="/cennik" element={<Costs />} />
        <Route path="/o_nas" element={<About />} />
        <Route path="/mapa" element={<Map />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
