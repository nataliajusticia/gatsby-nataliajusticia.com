import React from "react";
import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <TitleSection
        title="About"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo nisi, dapibus ac auctor in, tempus vel turpis."
      />
    </Layout>
  );
};

export default AboutPage;
