import React from "react";

import SEO from "../components/common/Seo";
import Layout from "../components/common/Layout";
import FrontHeader from "../components/sections/FrontHeader";
import LatestArticles from "../components/sections/LatestArticles";
import LatestProjects from "../components/sections/LatestProjects";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="I'm Natalia, a frontend developer that loves to code"
      />

      <FrontHeader />
      <LatestArticles />
      <LatestProjects />
    </Layout>
  );
};

export default IndexPage;
