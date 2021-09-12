import React from "react";

import Seo from "../components/Seo";
import Layout from "../components/Layout/Layout";
import FrontHeader from "../components/FrontHeader/FrontHeader";
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
    </Layout>
  );
};

export default IndexPage;
