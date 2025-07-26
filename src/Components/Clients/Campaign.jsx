import React, { useState } from "react";
import styles from "../../styles/Clients/Campaign.module.css";
import { IoClose } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

function Campaign({ client, size, imgSrc, location, descripton }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.imageContainer}
          onClick={() => setIsModalOpen(true)}>
          <img src={imgSrc} alt={'campaignImage'} className={styles.image} />
          <p className={styles.location}>
            <FaMapMarkerAlt style={{ marginRight: "5px" }} />
            {location}
          </p>
        </div>

        <div className={styles.details}>
        
          <p className={styles.client}>{client}</p>
          <p className={styles.size}>{size}</p>

          <p className={styles.descripton}>{descripton}</p>
          
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
}

export default Campaign;
