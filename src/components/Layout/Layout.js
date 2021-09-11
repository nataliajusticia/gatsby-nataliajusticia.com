import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import * as styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
