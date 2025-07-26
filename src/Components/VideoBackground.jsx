import React from "react";
import styles from "../styles/VideoBackground.module.css";
// import clip from "/assets/";
const VideoBackground = () => {
  return (
    <video autoPlay loop muted playsInline className={styles.bgvideo}>
      <source src={"/assets/videos/homeLandingScreen.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
