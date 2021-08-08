import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";

import * as styles from "../styles/blog.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <TitleSection
        title="Articles"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo nisi, dapibus ac auctor in, tempus vel turpis."
      />

      <ul className={styles.blogList}>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id} className={styles.blogPost}>
            <h2>{node.frontmatter.title}</h2>
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
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          teaser
          date(formatString: "MMMM D, YYYY")
          author
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
