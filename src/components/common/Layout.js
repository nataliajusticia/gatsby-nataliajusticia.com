import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import "../../styles/global.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="mainWrapper">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
