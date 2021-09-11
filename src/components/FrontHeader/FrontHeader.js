import React from "react";

import * as styles from "./frontHeader.module.scss";

const FrontHeader = () => {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <h1 className={styles.title}>
          I’m natalia, a <span>frontend&nbsp;dev</span>
          <br /> that loves to code
        </h1>

        <p className={styles.subtitle}>
          👋 I love my profession and the possibility to be free doing what I
          like.
        </p>
      </div>
    </section>
  );
};

export default FrontHeader;
