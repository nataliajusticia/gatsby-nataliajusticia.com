import React from "react";

import Layout from "../components/common/Layout";
import Header from "../components/sections/Header/Header";
import SeparatorLine from "../components/sections/SeparatorLine/SeparatorLine";
import LatestArticles from "../components/sections/LatestArticles/LatestArticles";

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <Header />
      <SeparatorLine />
      <LatestArticles />
    </Layout>
  );
};

export default IndexPage;
