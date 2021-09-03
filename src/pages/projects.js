import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/common/Layout";

const ProjectsPage = () => {
  const width = 1200;
  const height = (width * 9) / 16;

  return (
    <Layout pageTitle="Projects">
      <section className="projects">
        <div className="container">
          <h1 className="projects__title">{"<All Projects/>"}</h1>

          <ul className="projects__grid">
            <li>
              <a className="project-teaser">
                <StaticImage
                  src="../assets/images/vue-pokedex.png"
                  width={width}
                  height={height}
                  className="project-teaser__image"
                />
                <h3 className="project-teaser__title">vue-pokedex</h3>
                <p className="project-teaser__date">
                  Pokedex built with Vue.js (pwa)
                </p>
              </a>
            </li>
            <li>
              <a className="project-teaser">
                <StaticImage
                  src="../assets/images/uocify.png"
                  width={width}
                  height={height}
                  className="project-teaser__image"
                />
                <h3 className="project-teaser__title">uocify</h3>
                <p className="project-teaser__date">
                  Deezer client built with Vue.js (pwa)
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
