import React, { useEffect, useState } from "react";
import styles from "../styles/VideoBackground.module.css";
import videoBg from "/assets/videos/bgEffect.mp4"
const VideoBackground = () => {
  return (
    <>
      <video autoPlay loop muted playsInline className={styles.bgvideo}>
        <source src={videoBg} type="video/mp4" />

      </video>
    </>
  );
};

export default VideoBackground;
