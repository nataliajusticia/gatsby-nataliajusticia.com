import React from "react";

import * as styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.backgroundColor}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contact me</h2>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          mauris orci, id interdum nulla hendrerit in.
        </p>

        <a href="#" className="btn">
          Get in touch 👋
        </a>
      </div>
    </section>
  );
};

export default Contact;
