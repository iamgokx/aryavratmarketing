import React from "react";
import styles from "../../styles/Home/HomeLandingScreen.module.css";
import homeLoopClip from "/assets/videos/homeLandingScreen.mp4";
import homeLandingLogo from "/assets/logos/homeLanding.png";
import homePoster from "/assets/videos/loadingBanner.png";
import { BsWhatsapp } from "react-icons/bs";
function HomeLandingScreen({ scrollWithOffset }) {
  return (
    <div className={styles.homeLandingContainer}>
      <video muted autoPlay loop poster={homePoster}>
        <source src={homeLoopClip}></source>
      </video>

      <div className={styles.homeLandingContentContainer}>
        <div data-aos="fade-right" className={styles.landingContent}>
          <h4>Visibility Matters and We Own it in Goa!</h4>
          <p>
            Aryavrat Marketing offers exclusive Billboard spaces at Goa’s most
            high-traffic zones.
          </p>
          <p>
            Whether it’s brand launches or top-of-mind recall, our sites deliver
            visibility that sticks.
          </p>
          <div className={styles.callToActionContainer}>
            <a href="#" onClick={() => scrollWithOffset("getstarted")}>
              Get Started
            </a>
            <a href="https://wa.me/919209016102" target="_blank">
              Contact Us <BsWhatsapp className={styles.whatsappIcon} />
            </a>
          </div>
        </div>
        <img
          data-aos="fade-left"
          src={homeLandingLogo}
          alt="aryavrat-marketing-logo"
        />
      </div>
    </div>
  );
}

export default HomeLandingScreen;
