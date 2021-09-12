import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./project.module.scss";

const Project = ({ title, description, url, heroImage, tags, bigVersion }) => {
  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      className={
        bigVersion === true
          ? `${styles.project} ${styles.projectBig}`
          : styles.project
      }
    >
      <GatsbyImage
        image={getImage(heroImage)}
        className={styles.image}
        alt={title}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags ? tags.map((tag) => <span>{tag}</span>) : ""}
        </div>
      </div>
    </a>
  );
};

export default Project;
