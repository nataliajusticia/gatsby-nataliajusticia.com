import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer__separator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          ></path>
        </svg>
      </div>

      <footer className="footer">
        <div className="footer__wrapper container">
          <p className="footer__text h3">Hope you enjoyed!</p>
          <p className="footer__rights">© 2021 Developed by Natalia J.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
