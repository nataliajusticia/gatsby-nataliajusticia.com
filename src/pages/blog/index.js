import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/common/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <section className="blog">
        <div className="container">
          <h1 className="blog__title">{"<All Articles/>"}</h1>

          <ul className="blog__grid">
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
