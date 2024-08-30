import logo from './logo.svg';
import './App.css';
import Navbar from './compouent/Navbar';
import Hero from './compouent/Hero';
import Date_hero from './compouent/Date_hero';
import Place_body from './compouent/Place_body';
import Bali_body from './compouent/Bali_body';
import Top_body from './compouent/Top_body';
import Rating_body from './compouent/Rating_body';
import Offered_body from './compouent/Offered_body';
import Footer from './compouent/Footer';
import Home from './compouent/Home';
import About from './compouent/About_us';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About_us from './compouent/About_us';
import Packages from './compouent/Packages';
import Places from './compouent/Place';
import Contact from './compouent/Contact';



function App() {
  // let arr1 = ["Home", "About", "Packages", "Places", "Contact"];

  return (
    
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/places" element={<Places />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
