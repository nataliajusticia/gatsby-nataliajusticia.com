import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./article.module.scss";

const Article = ({ title, date, timeToRead, url, heroImage }) => {
  return (
    <>
      <GatsbyImage
        image={getImage(heroImage)}
        className={styles.image}
        alt={title}
      />

      <div>
        <Link to={`/blog/${url}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p className={styles.date}>
          {date} - {timeToRead} min.
        </p>
      </div>
    </>
  );
};

export default Article;
