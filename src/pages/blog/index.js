import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/common/Layout";

import * as styles from "./blog.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <section className="">
        <div className="container">
          <h1>All articles</h1>

          <ul className={styles.blogList}>
            {data.allMdx.nodes.map((node) => (
              <li key={node.id} className={styles.blogPost}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p className={styles.blogPostDate}>
                  {node.frontmatter.date} - Natalia J.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
