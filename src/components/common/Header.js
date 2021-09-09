import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <Link to="/">{"<nj />"}</Link>
        </div>

        <nav className="header__navbar">
          <button className="header__navbar-btn" onClick={showSidebar}>
            <div
              className={
                sidebar
                  ? "hamburger hamburger--spin is-active"
                  : "hamburger hamburger--spin"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </button>

          <ul
            className={
              sidebar ? "header__navbar-menu is-active" : "header__navbar-menu"
            }
          >
            <li>
              <Link to="/" aria-label="Go to homepage" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="View blog page"
                activeClassName="active"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                aria-label="View projects page"
                activeClassName="active"
              >
                Projects
              </Link>
            </li>
            <li>
              <a href="mailto:nataliajusticia@gmail.com" className="button">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
