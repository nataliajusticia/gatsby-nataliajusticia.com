import React from "react";
import { Link } from "gatsby";

import Layout from "../components/common/Layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not found">
      <div className="container">
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find what you were looking for.</p>

        <Link to="/" className="button">
          Go home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
