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
            <a href="">
              <LuInstagram className={styles.icon} />
            </a>
            <a href="">
              <TiSocialFacebookCircular className={styles.icon} />
            </a>
            <a href="">
              <LuLinkedin className={styles.icon} />
            </a>
            <a href="">
              <SiWhatsapp className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.LinksContainer}>
          <h5>Quick Links</h5>

          <Link to={"/"} className={styles.link}>
            Home
          </Link>

          <Link to={"/"} className={styles.link}>
            Portfolio
          </Link>

          <Link to={"/"} className={styles.link}>
            Clients
          </Link>
          <Link to={"/"} className={styles.link}>
            Contact Us
          </Link>
          <Link to={"/gallery"} className={styles.link}>
            Gallery
          </Link>
        </div>
        <div className={styles.LinksContainer}>
          <h5>Our Service</h5>

          <p>BillBoard</p>
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
          <a href="">
            <IoMdCall className={styles.icon} />
            +91 9209016102
          </a>
          <a href="">
            <CiMail className={styles.icon} />
            hello@aryavratmarketing.com
          </a>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <span>Aryavrat Marketing. All rights reserved</span>

        <div>
          <Link to={"/"} className={styles.link}>
            Privacy Policy
          </Link>
          <Link to={"/"} className={styles.link}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
