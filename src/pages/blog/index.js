import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/common/Layout";

import * as styles from "./blog.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <section className={styles.wrapper}>
        <h1>All articles</h1>

        <ul className={styles.blogList}>
          {data.allMdx.nodes.map((node) => (
            <li key={node.id} className={styles.blogPost}>
              <h2>
                <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
              </h2>
              <p>{node.frontmatter.teaser}</p>
              <p className={styles.blogPostAuthor}>
                Author: {node.frontmatter.author}
              </p>
              <p className={styles.blogPostDate}>
                Posted: {node.frontmatter.date}
              </p>
            </li>
          ))}
        </ul>
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
          teaser
          date(formatString: "MMMM D, YYYY")
          author
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
