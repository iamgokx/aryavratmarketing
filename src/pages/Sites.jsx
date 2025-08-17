import React, { useEffect, useState } from "react";
import styles from "../styles/Sites/sites.module.css";
import PageHeading from "../Components/PageHeading";
import northSites from "../../siteData/SitesNorth.json";
import southSites from "../../siteData/SitesSouth.json";
import { useNavigate } from "react-router-dom";
import SiteCard from "../Components/Sites/SiteCard";
import { RiCloseCircleLine } from "react-icons/ri";
import { SlSizeFullscreen } from "react-icons/sl";
import { HiLocationMarker } from "react-icons/hi";
import { IoEye } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { LuUtilityPole } from "react-icons/lu";
import { GrFormClose } from "react-icons/gr";
import { TiTick } from "react-icons/ti";

import Slider from "react-slick";
function Sites() {
  const [activeTab, setActiveTab] = useState("north");
  const navigate = useNavigate();
  const sitesData = activeTab === "north" ? northSites : southSites;
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);

  const groupedSites = [];
  const seen = new Set();

  const locationGroups = sitesData.reduce((groups, site) => {
    if (!groups[site.locationid]) {
      groups[site.locationid] = [];
    }
    groups[site.locationid].push(site);
    return groups;
  }, {});

  useEffect(() => {
    if (selectedLocationId) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  
    return () => document.body.classList.remove("no-scroll");
  }, [selectedLocationId]);
  
 

  for (const locationId in locationGroups) {
    const group = locationGroups[locationId];

    const allOnLease = group.every((site) => site.lease === "true");

    if (!allOnLease) {
      groupedSites.push(group[0]);
      seen.add(locationId);
    }
  }

  const handleCardClick = (locationid) => {
    setSelectedLocationId(locationid);
  };

  const handleClosePopup = () => {
    setSelectedLocationId(null);
    setSelectedSite(null);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <>
      <PageHeading
        title={"Premium Advertising Sites Across Goa"}
        contentOne={
          "Discover our extensive network of high-impact advertising sites across"
        }
        contentTwo={"locations strategically positioned throughout Goa"}
      />
      <section className={styles.sitesSection}>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "north" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("north")}>
            North Goa
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "south" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("south")}>
            South Goa
          </button>
        </div>
        <p className={styles.locationsubHeading}>Click any location to view sties</p>
        <h3 className={styles.locationHeading}>{activeTab} Goa Locations</h3>
       
        <div className={styles.siteList}>
          {groupedSites.map((site, index) => (
            <SiteCard
              img={site.media[0]}
              locationid={site.locationid}
              district={site.district}
              description={site.location}
              openSite={handleCardClick}
              locationDesc={site.locationDescription}
              key={`${site.locationid} ${index}`}
            />
          ))}
        </div>

        {selectedLocationId && (
          <div className={styles.popUpOverlay}>
            <div className={styles.popUpContainer}>
              <div className={styles.popUpHeader}>
                <div className={styles.iconContainerCloseBtn}>
                <RiCloseCircleLine
                  className={styles.closePopUpIcon}
                  onClick={handleClosePopup}
                />
                </div>
                <h2>Premium Advertising Sites Across Goa</h2>
              </div>

              <div className={styles.sitesMainContainer}>
                <div className={styles.sitesListContainer}>
                  <h4>{activeTab} Goa Locations</h4>
                  <h3>{selectedLocationId}</h3>

                  {sitesData
                    .filter(
                      (site) =>
                        site.locationid === selectedLocationId &&
                        site.lease == "false"
                    )
                    .map((site, idx) => (
                      <p
                        key={idx}
                        className={styles.siteNameButton}
                        onClick={() => setSelectedSite(site)}>
                        {site.name} - {site.size}
                      </p>
                    ))}
                </div>

                <div className={styles.sitesDetailContainer}>
                  {selectedSite ? (
                    <>
                      {selectedSite.lease == "false" && (
                        <>
                          <div className={styles.sliderWrapper}>
                            {selectedSite.media &&
                            selectedSite.media.length > 0 ? (
                              <Slider {...settings} className={styles.slider}>
                                {selectedSite.media.map((img, index) => (
                                  <div key={`${index} ${img}`}>
                                    <img src={img} alt={`Slide ${index}`} />
                                  </div>
                                ))}
                              </Slider>
                            ) : (
                              <div className={styles.noImgMsg}>
                                No images available right now
                              </div>
                            )}
                          </div>

                          <div className={styles.selectedSiteContentContainer}>
                            <p>
                              <span className={styles.siteIconContianer}>

                              <SlSizeFullscreen className={styles.siteIcon} />
                              </span>
                              {selectedSite.size}
                            </p>
                            {selectedSite.quantity > 1 && (
                              <p>
                                <div className={styles.siteIconContianer}>
                                <LuUtilityPole className={styles.siteIcon} />
                                </div>
                                {selectedSite.quantity} Poles
                              </p>
                            )}
                            <p>
                            <span className={styles.siteIconContianer}>
                              <HiLocationMarker className={styles.siteIcon} />
                            </span>
                              {selectedSite.location}
                            </p>
                            <p>
                            <span className={styles.siteIconContianer}>
                              <IoEye className={styles.siteIcon} />
                            </span>
                              {selectedSite.sides || ""} {selectedSite.lit}
                            </p>
                            <p>
                              {selectedSite.availability === "Available" ? (
                                <span className={styles.siteIconContianer}>
                                <TiTick className={styles.siteIcon} />
                                </span>
                              ) : (
                                <GrFormClose className={styles.siteIcon} />
                              )}
                              {selectedSite.availability}
                            </p>
                          </div>

                          <div className={styles.btnContainer}>
                            <a href={selectedSite.link} target="_blank">
                              Map Link
                              <FaMapLocationDot className={styles.siteIcon} />
                            </a>
                            <a
                              href="https://wa.me/919209016102"
                              target="_blank">
                              Know More
                              <FaWhatsapp className={styles.siteIcon} />
                            </a>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <p className={styles.selectSiteText}>
                      Select a site to view details
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Sites;
