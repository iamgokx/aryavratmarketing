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
import ScrollToTop from "./Components/ScrollToTop";
import SiteLoader from "./Components/SiteLoader";
import { useState } from "react";
import Sites from "./pages/Sites";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Router>
        <VideoBackground />

        {/* <SiteLoader /> */}
        <NavBar></NavBar>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        <WhatsApp></WhatsApp>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
