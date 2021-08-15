import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./latestarticles.module.css";

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 6) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          id
          slug
        }
      }
    }
  `);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Latest Articles</h2>

      <div>
        <ul className={styles.grid}>
          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <StaticImage
                alt="Post Image"
                src="./../../../images/css-variables.png"
                aspectRatio={16 / 9}
              />
              <h3 className={styles.titlePost}>
                <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
              </h3>
              <p className={styles.datePost}>{node.frontmatter.date}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.btnWrapper}>
        <Link to="/blog" className="btn-secondary">
          Read more
        </Link>
      </div>
    </section>
  );
};

export default LatestArticles;
