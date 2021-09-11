import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../../components/Seo";
import Layout from "../../components/Layout/Layout";

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
                <Link to={`/blog/${node.slug}`} className="article">
                  <GatsbyImage
                    image={getImage(node.frontmatter.hero_image)}
                    className="article__image"
                  />
                  <h3 className="article__title">{node.frontmatter.title}</h3>
                  <p className="article__date">{node.frontmatter.date}</p>
                </Link>
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
