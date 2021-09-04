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
        }
      }
    }
  `);

  return (
    <section className="latest-articles">
      <div className="latest-articles__wrapper container">
        <h2 className="latest-articles__title">{"<Latest Articles/>"}</h2>

        <ul className="latest-articles__grid">
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

        <div className="latest-articles__button">
          <Link to="/blog" className="button">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
