import React from "react";
import styles from "../styles/PageHeading.module.css";
function PageHeading({
  title,
  contentOne,
  contentTwo,
  contentThree,
  contentFour,
}) {
  return (
    <div className={styles.pageHeadingContainer}>
      <h2>{title}</h2>
      <p>{contentOne}</p>
      <p>{contentTwo}</p>
      <p>{contentThree}</p>
      <p>{contentFour}</p>
    </div>
  );
}

export default PageHeading;
