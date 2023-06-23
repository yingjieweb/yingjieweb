import React from "react";
// components
import Masonry from "react-masonry-css";
import Title from "../../components/Title";
import Section from "../../components/Section";
import Item from "./Item";
// constants
import { projects } from "./constants";
// styles
import styles from "./styles.module.scss";

const Project: React.FC = () => {
  return (
    <Section id="project" className={styles.project}>
      <Title tag="h2">个人项目</Title>
      <Title tag="h3">超多好玩、有趣的项目和文章 👻</Title>

      <Masonry
        className={styles.projectList}
        columnClassName={styles.projectListColumn}
        breakpointCols={{ default: 3, 992: 2, 786: 1 }}
      >
        {projects.map((project) => (
          <Item {...project} key={project.logo} />
        ))}
      </Masonry>

      <Title className={styles.footerTitle} tag="h3">
        更多好玩、有趣的项目和文章正在路上 🐒
      </Title>
    </Section>
  );
};

export default Project;
