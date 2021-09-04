import React from "react";

import SEO from "../components/common/Seo";
import Layout from "../components/common/Layout";
import FrontHeader from "../components/sections/FrontHeader";
import LatestArticles from "../components/sections/LatestArticles";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="I'm Natalia, a frontend developer that loves to code"
      />

      <FrontHeader />
      <LatestArticles />
    </Layout>
  );
};

export default IndexPage;
