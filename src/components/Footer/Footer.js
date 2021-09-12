import React from "react";

import { Link } from "gatsby";

import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <ul className={styles.menu}>
          <li>
            <Link to="/" aria-label="Go to homepage">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" aria-label="View blog page">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/projects" aria-label="View projects page">
              Projects
            </Link>
          </li>
          <li>
            <Link to="mailto:nataliajusticia@gmail.com" aria-label="Contact me">
              Contact
            </Link>
          </li>
        </ul>
        <p className={styles.textRights}>© 2021 Developed by Natalia J.</p>
      </div>
    </footer>
  );
};

export default Footer;
