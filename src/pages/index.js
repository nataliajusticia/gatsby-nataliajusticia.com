import React from "react";

import Seo from "../components/Seo";
import Layout from "../components/Layout/Layout";
import FrontHeader from "../components/FrontHeader/FrontHeader";
import LatestArticles from "../components/LatestArticles/LatestArticles";
import LatestProjects from "../components/LatestProjects/LatestProjects";

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="I'm Natalia, a frontend developer that loves to code"
      />

      <FrontHeader />
      <LatestProjects />
      <LatestArticles />
    </Layout>
  );
};

export default IndexPage;
