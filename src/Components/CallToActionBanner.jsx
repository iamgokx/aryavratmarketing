import React from "react";
import styles from "../styles/CallToActionBanner.module.css";
import nets from "/assets/svgs/nests.svg";
import microphone from "/assets/svgs/microphone.svg";
import eye from "/assets/svgs/eye.svg";
import ellipse from "/assets/svgs/Ellipse.svg";

import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
function CallToActionBanner() {
  return (
    <div className={styles.callToActionBannerContainer}>
      <div className={styles.svgsContainerOne}>
        <img className={styles.nets} src={nets} alt="" />
        <img className={styles.eye} src={eye} alt="" />
        <img className={styles.ellipse} src={ellipse} alt="" />
      </div>
      <div className={styles.bannerContentContainer}>
        <h2>Premium Advertising Sites Across Goa</h2>
        <p>
          Discover our extensive network of high-impact advertising locations
          strategically positioned throughout Goa
        </p>

        <Link className={styles.link} to={'/sites'}>
          Explore Sites <IoArrowForward className={styles.arrowIcon} />
        </Link>
      </div>
      <div className={styles.svgsContainerTwo}>
        <img className={styles.nets} src={nets} alt="" />
        <img className={styles.microphone} src={microphone} alt="" />
        <img className={styles.ellipse} src={ellipse} alt="" />
      </div>
    </div>
  );
}

export default CallToActionBanner;
