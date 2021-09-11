import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Seo from "../../components/Seo";
import Layout from "../../components/Layout/Layout";

import * as styles from "./blogpost.module.scss";

const BlogPostPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.mdx.frontmatter.title}
        description="This is a blogpost"
      />

      <article className={styles.article}>
        <div className={`container-small`}>
          <h1 className={styles.title}>{data.mdx.frontmatter.title}</h1>
          <p className={styles.date}>{data.mdx.frontmatter.date}</p>
        </div>

        <div className={`${styles.imageWrapper} container`}>
          <GatsbyImage
            image={getImage(data.mdx.frontmatter.hero_image)}
            width={1200}
            aspectRatio={4 / 3}
            className={styles.image}
          />
        </div>

        <div className={`container-small`}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default BlogPostPage;
