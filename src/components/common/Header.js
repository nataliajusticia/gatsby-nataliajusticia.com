import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <Link to="/">{"<nj />"}.</Link>
        </div>

        <nav className="header__navbar">
          <button className="header__navbar-btn" onClick={showSidebar}>
            MENU
          </button>

          <ul
            className={
              sidebar ? "header__navbar-menu is-active" : "header__navbar-menu"
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a
                href="mailto:nataliajusticia@gmail.com"
                className="button--secondary"
              >
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
