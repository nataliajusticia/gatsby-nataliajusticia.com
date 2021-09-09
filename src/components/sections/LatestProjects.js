import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  className="project-small__image"
                />

                <div className="project-small__info">
                  <h3 className="project-small__title">
                    {node.frontmatter.title}
                  </h3>
                  <p className="project-small__description">
                    {node.frontmatter.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="latest-projects__button">
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

export default LatestArticles;
