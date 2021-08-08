import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not found">
      <TitleSection
        title="Page not found"
        subtitle="Sorry, we couldn’t find what you were looking for."
      />

      <Link to="/">Go home</Link>
    </Layout>
  );
};

export default NotFoundPage;
