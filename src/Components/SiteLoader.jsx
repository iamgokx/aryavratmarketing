import React, { useEffect, useState } from "react";
import styles from "../styles/SiteLoader.module.css";
import logoanimation from "/assets/videos/siteLoader.mp4";

const SiteLoader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
      setShowLoader(true);
      sessionStorage.setItem("hasSeenLoader", "true");
    }
  }, []);

  const handleVideoEnd = () => {
    const loaderDiv = document.getElementById("site-loader");
    if (loaderDiv) {
      loaderDiv.classList.add(styles.fadeOut);
      setTimeout(() => setShowLoader(false), 1000);
    } else {
      setShowLoader(false);
    }
  };

  if (!showLoader) return null;

  return (
    <div id="site-loader" className={styles.videoloader}>
      <video
        autoPlay
        muted
        playsInline
        onEnded={() => {
          handleVideoEnd();
        }}
        className={styles.loadervideo}>
        <source src={logoanimation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SiteLoader;
