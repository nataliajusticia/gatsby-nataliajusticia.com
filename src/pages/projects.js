import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout/Layout";
import Project from "../components/Project/Project";

import * as styles from "./projects.module.scss";

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Projects"
        description="This is the projects page. Here you will find all the projects that I have done"
      />

      <section className={styles.section}>
        <div className={`container`}>
          <h1 className={styles.title}>{"<Projects/>"}</h1>

          <ul className={styles.grid}>
            {data.allMdx.nodes.map((node) => (
              <li key={node.id}>
                <Project
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  url={node.frontmatter.url}
                  heroImage={node.frontmatter.hero_image}
                  tags={node.frontmatter.tags}
                  bigVersion={true}
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
  query ProjectList {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { sourceName: { eq: "project" } } }
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
          description
          url
          tags
        }
        id
        slug
      }
    }
  }
`;

export default ProjectsPage;
