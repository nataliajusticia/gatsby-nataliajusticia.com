import React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/header.module.css";

const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">nj.</Link>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a
              href="mailto:nataliajusticia@gmail.com"
              className={styles.contactBtn}
            >
              Contact 👋
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
