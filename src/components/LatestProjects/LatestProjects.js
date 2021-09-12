import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Project from "../Project/Project";

import * as styles from "./latestProjects.module.scss";

const LatestProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 4
        filter: { fields: { sourceName: { eq: "project" } } }
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            url
            description
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
  `);

  return (
    <section className={styles.section}>
      <div className={`container`}>
        <h2 className={styles.title}>{"<Latest Projects/>"}</h2>

        <ul className={styles.grid}>
          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <Project
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                url={node.frontmatter.url}
                heroImage={node.frontmatter.hero_image}
              />
            </li>
          ))}
        </ul>

        <div className={styles.button}>
          <Link
            to="/projects"
            className="button--secondary"
            aria-label="View projects page"
          >
            Check all my projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
