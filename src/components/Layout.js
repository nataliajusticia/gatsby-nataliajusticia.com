import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import * as styles from "../styles/layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.mainWrapper}>
      <title>{pageTitle}</title>

      <Header />

      <main className={styles.container}>
        <h1>{pageTitle}</h1>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
