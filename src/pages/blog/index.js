import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout/Layout";

import Article from "../../components/Article/Article";

import * as styles from "./blog.module.scss";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Blog"
        description="This is the blog page. Here you will find all the articles that I have wrote"
      />

      <section className={styles.section}>
        <div className={`container`}>
          <h1 className={styles.title}>{"<All Articles/>"}</h1>

          <ul className={styles.grid}>
            {data.allMdx.nodes.map((node) => (
              <li key={node.id}>
                <Article
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  timeToRead={node.timeToRead}
                  url={node.slug}
                  heroImage={node.frontmatter.hero_image}
                />
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
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { sourceName: { eq: "blog" } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
