import React, { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import logo from "/assets/logos/logo.svg";
import { Link } from "react-router-dom";
import { GoDownload } from "react-icons/go";
import portfolio from "/assets/Aryavrat Marketing Brochure.pdf";
function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navLogoContainer}>
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="aryavrat-marketing-logo" />
        </Link>
      </div>

      <div className={styles.navLinksContainer}>
        <a href={portfolio} target="_blank" rel="noopener noreferrer">
          Portfolio <GoDownload className={styles.portfolioDownloadbutton} />
        </a>

        <Link className={styles.link} to={"/"}>
          Home
        </Link>
        <Link className={styles.link} to={"/"}>
          Sites
        </Link>

        <Link className={styles.link} to={"/clients"}>
          Clients
        </Link>
        <Link className={styles.link} to={"/gallery"}>
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
