import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./project.module.scss";

const Project = ({ title, description, url, heroImage }) => {
  return (
    <a href={url} rel="noreferrer" target="_blank" className={styles.project}>
      <GatsbyImage
        image={getImage(heroImage)}
        className={styles.image}
        alt={title}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export default Project;
