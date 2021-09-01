import React from "react";

import Layout from "../components/common/Layout";
import FrontHeader from "../components/sections/FrontHeader";
import LatestArticles from "../components/sections/LatestArticles";

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <FrontHeader />
      <LatestArticles />
    </Layout>
  );
};

export default IndexPage;
