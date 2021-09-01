import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

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
    <div className="main-wrapper">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
