import React, { useEffect, useState } from "react";
import styles from "../styles/VideoBackground.module.css";

const VideoBackground = () => {
  return (
    <>
      <video autoPlay loop muted playsInline className={styles.bgvideo}>
        <source src={"/public/assets/videos/bgEffect.mp4"} type="video/mp4" />

      </video>
    </>
  );
};

export default VideoBackground;
