import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import styles from "../styles/TestimonialCard.module.css";
import { FaUserAlt } from "react-icons/fa";
function TestimonialCard({ content, name, img, position }) {
  return (
    <div className={styles.TestimonialCard}>
      <ImQuotesLeft className={styles.quotesIcon} />
      <div className={styles.TestimonialFooter}>
        <img src={img} alt="" />
        <div className={styles.TestimonialUser}>
          <header>{name}</header>
          <p>{position}</p>
        </div>
      </div>
      <span className={styles.TestimonialContent}>{content}</span>
    </div>
  );
}

export default TestimonialCard;
