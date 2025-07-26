import React, { useState } from "react";
import styles from "../../styles/Clients/Campaign.module.css";
import { IoClose } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

function Campaign() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer} onClick={() => setIsModalOpen(true)}>
          <img src={imgSrc} alt={title} className={styles.image} />
          <div className={styles.roadName}>Cansaulim Panchayat Road</div>
        </div>

        <div className={styles.details}>
          <h3>{title}</h3>
          <p className={styles.location}>
            <FaMapMarkerAlt style={{ marginRight: "5px" }} />
            {location}
          </p>
          <p><strong>Client:</strong> {client}</p>
          <p><strong>Board Size:</strong> {size}</p>

          <button className={styles.viewBtn}>View Details</button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <span className={styles.closeBtn}>
            <IoClose size={32} />
          </span>
          <img
            src={imgSrc}
            alt="Full View"
            className={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};


export default Campaign
