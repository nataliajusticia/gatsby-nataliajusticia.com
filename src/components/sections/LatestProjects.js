import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
        filter: { fields: { sourceName: { eq: "project" } } }
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            url
            description
          }
          id
          slug
        }
      }
    }
  `);

  return (
    <section className="latest-projects">
      <div className="latest-projects__wrapper container">
        <h2 className="latest-projects__title">{"<Latest Projects/>"}</h2>

        <ul className="latest-projects__grid">
          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <a
                href={node.frontmatter.url}
                rel="noreferrer"
                target="_blank"
                className="project-small"
              >
                <h3 className="project-small__title">
                  {node.frontmatter.title}
                </h3>
                <p className="project-small__description">
                  {node.frontmatter.description}
                </p>
              </a>
            </li>
          ))}
        </ul>

        <div className="latest-projects__button">
          <Link
            to="/projects"
            className="button"
            aria-label="View projects page"
          >
            Check all my projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
