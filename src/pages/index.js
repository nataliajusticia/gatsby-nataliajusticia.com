import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <TitleSection
        title="I’m natalia, a frontend developer that loves to code."
        subtitle="I love my profession and the possibility to be free doing what I like. 
                  I have found my passion and I work hard to keep working as what I love."
      />

      {/* <StaticImage alt="Development" src="../images/development.jpg" /> */}
    </Layout>
  );
};

export default IndexPage;
