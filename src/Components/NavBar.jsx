import React, { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import logo from "/assets/logos/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { GoDownload } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & close icons
import portfolio from "/assets/Aryavrat Marketing Brochure.pdf";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav data-aos="fade-down" className={styles.navbar}>
      <div className={styles.navLogoContainer}>
        <Link to={"/"}>
          <img src={logo} alt="aryavrat-marketing-logo" />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <div
        className={`${styles.navLinksContainer} ${
          menuOpen ? styles.activeMenu : ""
        }`}>
        {menuOpen ? (
          <a
          href={portfolio}
         download="Aryavrat-Marketing-Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Brochure Download<GoDownload className={styles.portfolioDownloadbutton} />
        </a>

        
        ) : (
          <a href={portfolio} target="_blank" rel="noopener noreferrer">
            Brochure <GoDownload className={styles.portfolioDownloadbutton} />
          </a>  
        )}

        <Link
          className={`${styles.link} ${
            location.pathname === "/" ? styles.activeLink : ""
          }`}
          to="/">
          Home
        </Link>

        <Link
          className={`${styles.link} ${
            location.pathname === "/sites" ? styles.activeLink : ""
          }`}
          to="/sites">
          Sites
        </Link>

        <Link
          className={`${styles.link} ${
            location.pathname === "/clients" ? styles.activeLink : ""
          }`}
          to="/clients">
          Clients
        </Link>

        <Link
          className={`${styles.link} ${
            location.pathname === "/gallery" ? styles.activeLink : ""
          }`}
          to="/gallery">
          Gallery
        </Link>

        <Link
          className={`${styles.link} ${styles.contactUsButton}`}
          to={"/contact-us"}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
