import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "/assets/logos/logo.png";
import { LuInstagram } from "react-icons/lu";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { LuLinkedin } from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import portfolio from "/assets/Aryavrat Marketing Brochure.pdf";
function Footer() {
  return (
    <footer>
      <div className={styles.footerTopContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="aryavrat-marketing-logo" />
          <p>
            Goa’s leading outdoor advertising company since 2008, delivering OOH
            solutions that show results
          </p>
          <div className={styles.linksContainer}>
            <a
              href="https://www.instagram.com/aryavrat.marketing?igsh=cHVzM2N6MjcxOHdi"
              target="_blank">
              <LuInstagram className={styles.icon} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566116916506&mibextid=ZbWKwL"
              target="_blank">
              <TiSocialFacebookCircular
                className={`${styles.icon} ${styles.fbIcon}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/aryavrat-marketing/"
              target="_blank">
              <LuLinkedin className={styles.icon} />
            </a>
            <a href="https://wa.me/919209016102" target="_blank">
              <SiWhatsapp className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.LinksContainer}>
          <h5>Quick Links</h5>

          <Link to={"/"} className={styles.link}>
            Home
          </Link>
          <Link to={"/sites"} className={styles.link}>
            Sites
          </Link>

          <a
    href={portfolio}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.link} ${styles.desktopOnly}`}
  >
    Preview Brochure 
  </a>

 
  <a
    href={portfolio}
    download="Aryavrat-Marketing-Brochure.pdf"
    className={`${styles.link} ${styles.mobileOnly}`}
  >
    Download Brochure <GoDownload className={styles.link} />
  </a>

          <Link to={"/clients"} className={styles.link}>
            Clients
          </Link>
          <Link to={"/contact-us"} className={styles.link}>
            Contact Us
          </Link>
          <Link to={"/gallery"} className={styles.link}>
            Gallery
          </Link>
        </div>
        <div className={styles.LinksContainer}>
          <h5>Our Services</h5>

          <p>Billboard</p>
          <p>Display</p>
          <p>Bus Stand</p>
          <p>Poles</p>
        </div>
        <div className={styles.LinksContainer}>
          <h5>Contact Us</h5>

          <a href="">
            <TiLocation className={styles.icon} />
            Vasco
          </a>
          <a href="tel:+919209016102">
            <IoMdCall className={styles.icon} />
            +91 9209016102
          </a>
          <a href="mailto:hello@aryavratmarketing.com">
            <CiMail className={styles.icon} />
            hello@aryavratmarketing.com
          </a>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <span>Aryavrat Marketing. All rights reserved</span>

        <div>
          <Link to={"/privacy-policy"} className={styles.link}>
            Privacy Policy
          </Link>
          <Link to={"/terms-of-use"} className={styles.link}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
