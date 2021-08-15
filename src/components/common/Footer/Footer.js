import React from "react";

import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.logo}>nj.</p>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://github.com/nataliajusticia"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/natalia-justicia/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <p className={styles.rights}>© 2021 Developed by Natalia J.</p>
      </div>
    </footer>
  );
};

export default Footer;
