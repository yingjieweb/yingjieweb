import React from "react";
// common comps
import Title from "../../components/Title";

// components
import Profile from "./Profile";
import Life from "./Life";
import { Fade } from "react-awesome-reveal";

import Paragraph from "../../components/Paragraph";
import Section from "../../components/Section";
import HighLight from "../../components/HighLight";
// import Button from "../../components/Button";

// styles
import styles from "./styles.module.scss";

// const resumeUrl = "https://github.yingjieweb.com/resume";

const About: React.FC = () => (
  <Section id="about" className={styles.about}>
    <Title tag="h2">关于自己</Title>

    <Title tag="h3">👋，我是 yingjieweb 👻</Title>

    <Profile />

    <Life />

    <Fade direction="up">
      <Paragraph className={styles.goal}>
        喜欢 <HighLight>写代码</HighLight>， 并不是为了做一个 🐂 🍺 的项目
        <br />
        而是可以把那些好玩的想法实现出来 👉{" "}
        <span className={styles.justForFun}>Just for fun ~</span>
      </Paragraph>
    </Fade>

    {/* <Fade direction="up">
      <div>
        <Button
          onClick={() => window.open(resumeUrl, "_blank")}
          className={styles.pulse}
        >
          我的简历
        </Button>
      </div>
    </Fade> */}
  </Section>
);

export default About;
