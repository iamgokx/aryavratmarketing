import React from "react";
import styles from "../styles/CallToActionBannerTwo.module.css";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa6";

import bgImg from "/assets/videos/banner.gif";
import { Link } from "react-router-dom";
function CallToActionBannerTwo() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bgContainer}>
        <img src={bgImg} alt="" />
      </div>
      <div className={styles.blurContainer}>
        <div className={styles.bannerTopContainer}>
          <h2>
            Ready to Boost Your <span>Brand Visibility</span> In Goa?
          </h2>

          <p>
            Contact Aryavrat Marketing today to book premium advertising sites
            tailored to your marketing objectives.
          </p>

          <div className={styles.btnContainer}>
            <Link className={styles.link} to={"/sites"}>
              Book a Site Now
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=919209016102&text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20site%20with%20Aryavrat%20Marketing."
              target="_blank">
              Request a Callback
            </a>
          </div>
        </div>

        <div className={styles.linksContainerMain}>
          <div className={styles.linksContainer}>
            <a href="tel:+919209016102">
              <IoMdCall className={styles.icon} />
            </a>
            <div className={styles.linkContent}>
              <span>Call Us</span>
              <a href="tel:+919209016102">+91 9209016102</a>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <a href="mailto:hello@aryavratmarketing.com" target="_blank">
              <CiMail className={styles.icon} />
            </a>
            <div className={styles.linkContent}>
              <span>Email Us</span>
              <a href="mailto:hello@aryavratmarketing.com" target="_blank">
                hello@aryavratmarketing.com
              </a>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <a
              href="https://www.instagram.com/aryavrat.marketing?igsh=cHVzM2N6MjcxOHdi"
              target="_blank">
              <FaInstagram className={styles.icon} />
            </a>
            <div className={styles.linkContent}>
              <span>Follow Us</span>
              <a
                href="https://www.instagram.com/aryavrat.marketing?igsh=cHVzM2N6MjcxOHdi"
                target="_blank">
                @aryavrat.marketing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToActionBannerTwo;
