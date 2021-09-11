import React from "react";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo
        title="Not Found"
        description="I'm Natalia, a frontend developer that loves to code"
      />

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
