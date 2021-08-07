import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <p>Hi there!</p>
      <StaticImage alt="Development" src="../images/development.jpg" />
    </Layout>
  );
};

export default IndexPage;
