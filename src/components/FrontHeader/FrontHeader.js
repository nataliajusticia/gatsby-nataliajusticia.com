import React from "react";

import * as styles from "./frontHeader.module.scss";

const FrontHeader = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.wrapper} container`}>
        <h1 className={styles.title}>
          I’m Natalia,
          <br /> a <span>{"frontendDev"}</span>
          <br />
          that loves to code
        </h1>

        <p className={styles.subtitle}>
          I love my profession and the possibility to be free doing what I like.
        </p>
      </div>
    </section>
  );
};

export default FrontHeader;
