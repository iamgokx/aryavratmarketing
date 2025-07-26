import React, { useState } from "react";
import styles from "../styles/ImageGallery.module.css";
import PageHeading from "../Components/PageHeading";
import { IoClose } from "react-icons/io5";
import gallery from "../../siteData/gallery.json";

function ImageGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const handleOpen = (img) => {
    setCurrentImg(img);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentImg("");
  };

  return (
    <>
      <PageHeading
        title="Gallery"
        contentOne="Take a scroll through some of our most eye-catching sites and standout campaigns across Goa!"
      />

      <div className={styles.container}>
        <div className={styles.gallery}>
          {gallery.map((imgpath, index) => (
            <img
              key={`${imgpath}-${index}`}
              alt="aryavrat-marketing"
              className={styles.galleryImg}
              src={imgpath}
              onClick={() => handleOpen(imgpath)}
            />
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modal} onClick={handleClose}>
          <span className={styles.closeIcon} onClick={handleClose}>
            <IoClose size={30} />
          </span>
          <img
            src={currentImg}
            alt="full view"
            className={styles.modalImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default ImageGallery;
