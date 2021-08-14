import React from "react";
import { Link } from "gatsby";

import * as styles from "./navbar.module.css";

const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/">nj.</Link>
        </div>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="mailto:nataliajusticia@gmail.com" className="btn">
                Contact 👋
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
