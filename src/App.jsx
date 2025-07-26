import "./styles/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./Components/NavBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import Clients from "./pages/Clients";
import ContactUs from "./pages/ContactUs";
import ImageGallery from "./pages/ImageGallery";
import VideoBackground from "./Components/VideoBackground";
import WhatsApp from "./Components/whatsApp";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<ImageGallery />} />
      </Routes>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </Router>
  );
}

export default App;
