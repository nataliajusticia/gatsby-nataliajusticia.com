import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/common/Seo";
import Layout from "../components/common/Layout";

const ProjectsPage = ({ data }) => {
  const width = 1200;
  const height = (width * 9) / 16;

  return (
    <Layout>
      <SEO
        title="Projects"
        description="This is the projects page. Here you will find all the projects that I have done"
      />

      <section className="projects">
        <div className="container">
          <h1 className="projects__title">{"<All Projects/>"}</h1>

          <ul className="projects__grid">
            {data.allMdx.nodes.map((node) => (
              <li key={node.id}>
                <a
                  href={node.frontmatter.url}
                  rel="noreferrer"
                  target="_blank"
                  className="project"
                >
                  <h3 className="project__title">{node.frontmatter.title}</h3>
                  <p className="project__date">
                    {node.frontmatter.description}
                  </p>
                  <p className="project__date">{node.frontmatter.tag}</p>
                </a>
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
          description
          url
          tag
        }
        id
        slug
      }
    }
  }
`;

export default ProjectsPage;
