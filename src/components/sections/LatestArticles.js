import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
    <section className="latest-articles">
      <div className="latest-articles__wrapper container">
        <div className="latest-articles__header">
          <h2 className="latest-articles__title">{"✏️ <Latest Articles/>"}</h2>

          <Link to="/blog" className="link" aria-label="View blog page">
            Read more
          </Link>
        </div>

        <ul className="latest-articles__grid">
          {data.allMdx.nodes.map((node) => (
            <li key={node.id} className="article-small">
              <GatsbyImage
                image={getImage(node.frontmatter.hero_image)}
                className="article-small__image"
              />

              <div>
                <Link to={`/blog/${node.slug}`}>
                  <h3 className="article-small__title">
                    {node.frontmatter.title}
                  </h3>
                </Link>
                <p className="article-small__date">
                  {node.frontmatter.date} - {node.timeToRead} min.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LatestArticles;
