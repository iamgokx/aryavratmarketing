import React from "react";
import styles from "../styles/Whatsapp.module.css";
import whatsappicon from "/assets/whatsapp.png";
function WhatsApp() {
  return (
    <div className={styles.whatsappContainer}>
      <a href="https://wa.me/919209016102" target="_blank">
        <img src={whatsappicon} alt="aryavrat-marketing-contact-whatsapp" />
      </a>
    </div>
  );
}

export default WhatsApp;
