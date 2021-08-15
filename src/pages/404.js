import React from "react";
import { Link } from "gatsby";

import Layout from "../components/common/Layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not found">
      <h1>Page not found</h1>
      <p>Sorry, we couldn’t find what you were looking for.</p>

      <Link to="/">Go home</Link>
    </Layout>
  );
};

export default NotFoundPage;
