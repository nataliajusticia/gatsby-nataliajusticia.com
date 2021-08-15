import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/common/Layout";

import * as styles from "./blogpost.module.css";

const BlogPostPage = ({ data }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <div className={styles.blogPost}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p className={styles.blogPostDate}>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;
export default BlogPostPage;
