import React, { useState } from "react";
import { Link } from "gatsby";

import * as styles from "./header.module.scss";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.logo}>
          <Link to="/">{"<nj />"}</Link>
        </div>

        <nav>
          <button className={styles.navbarButton} onClick={showSidebar}>
            <div
              className={
                sidebar
                  ? `${styles.hamburger} ${styles.hamburgerActive}`
                  : `${styles.hamburger}`
              }
            >
              <div className={styles.hamburgerBox}>
                <div className={styles.hamburgerInner}></div>
              </div>
            </div>
          </button>

          <ul
            className={
              sidebar
                ? `${styles.navbarMenu} ${styles.navbarMenuActive}`
                : `${styles.navbarMenu}`
            }
          >
            <li>
              <Link
                to="/"
                aria-label="Go to homepage"
                activeClassName={`active`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="View blog page"
                activeClassName={`active`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                aria-label="View projects page"
                activeClassName={`active`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
