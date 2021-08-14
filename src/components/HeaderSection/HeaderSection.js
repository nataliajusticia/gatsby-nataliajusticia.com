import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./headersection.module.css";

const HeaderSection = () => {
  return (
    <section className={styles.wrapper}>
      <StaticImage alt="Avatar of nj" src="./../../images/me.jpg" />

      <div>
        <h1 className={styles.title}>
          I’m natalia, a{" "}
          <span className={styles.label}>frontend developer</span> that loves to
          code.
        </h1>

        <p className={styles.subtitle}>
          I love my profession and the possibility to be free doing what I like.
          I have found my passion and I work hard to keep working as what I
          love.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
