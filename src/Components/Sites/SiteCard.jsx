import React from "react";
import styles from "../../styles/Sites/SiteCard.module.css";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";

function SiteCard({ img, locationid, district, openSite, locationDesc }) {
  return (
    <div
      className={styles.siteCardContainer}
      onClick={() => openSite(locationid)}>
      <img src={img} alt={`${location}-Billboard-img`} />

      <div className={styles.contentContainer}>
        <h4>{locationid}</h4>

        <p>
          <TiLocation className={styles.pinIcon} />
          {locationid}, {district}
        </p>

        <span>{locationDesc}</span>
      </div>
    </div>
  );
}

export default SiteCard;
