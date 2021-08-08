import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";

import * as styles from "../styles/layout.module.css";

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
    <div className={styles.mainWrapper}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <Header />

      <main className={styles.container}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
