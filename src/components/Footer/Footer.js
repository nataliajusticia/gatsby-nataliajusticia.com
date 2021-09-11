import React from "react";

import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <p className={`${styles.text} h3`}>Hope you enjoyed!</p>
        <p className={styles.textRights}>© 2021 Developed by Natalia J.</p>
      </div>
    </footer>
  );
};

export default Footer;
