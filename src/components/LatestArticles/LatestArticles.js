import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Article from "../Article/Article";

import * as styles from "./latestArticles.module.scss";

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
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
          timeToRead
        }
      }
    }
  `);

  return (
    <section className={styles.section}>
      <div className={`container`}>
        <h2 className={styles.title}>{"<Latest Articles/>"}</h2>

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
  );
};

export default LatestArticles;
