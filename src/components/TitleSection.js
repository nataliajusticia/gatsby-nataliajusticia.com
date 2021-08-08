import React from "react";

import * as styles from "../styles/titlesection.module.css";

const TitleSection = (props) => {
  return (
    <section className={styles.titleSectionWrapper}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </section>
  );
};

export default TitleSection;
