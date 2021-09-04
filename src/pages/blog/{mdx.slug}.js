import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../../components/common/Seo";
import Layout from "../../components/common/Layout";

const BlogPostPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description="This is a blogpost"
      />

      <div className="blogpost">
        <div className="blogpost__header container-small">
          <h1 className="blogpost__title">{data.mdx.frontmatter.title}</h1>
          <p className="blogpost__date">{data.mdx.frontmatter.date}</p>
        </div>

        <div className="blogpost__image container">
          <GatsbyImage
            image={getImage(data.mdx.frontmatter.hero_image)}
            width={1200}
            aspectRatio={4 / 3}
          />
        </div>

        <div className="blogpost__content container-small">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default BlogPostPage;
