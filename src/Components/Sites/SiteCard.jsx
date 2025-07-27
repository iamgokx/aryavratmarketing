import React from "react";
import styles from "../../styles/Sites/SiteCard.module.css";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";

function SiteCard({ img, locationid, district, openSite }) {
  return (
    <div className={styles.siteCardContainer} onClick={()=> openSite(locationid)}>
      <img src={img} alt={`${location}-billboard-img`} />

      <div className={styles.contentContainer}>
        <h4>{locationid}</h4>

        <p>
          <TiLocation className={styles.pinIcon} />
          {locationid}, {district}
        </p>
      </div>
    </div>
  );
}

export default SiteCard;
