import React from "react";
import useTyped from "../../hooks/useTyped";
import useLottie from "../../hooks/useLottie";
// components
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
// constants
import { arrowDownLottie, dragonLottie } from "./constants";
// styles
import styles from "./styles.module.scss";

const strings = ["聊聊技术。", "写写博客。", "打打球。"];

const Home: React.FC = () => {
  const typedElement = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const dragonLottieRef = useLottie(dragonLottie);

  const next = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>👋 我是 Yingjieweb，</p>
          <p>一名前端爱好者 🤩，</p>
          <p>
            目前在<span className={styles.sohu}> 搜 狐 🧱</span>，
          </p>
          <p>
            ✍ <span className={styles.react}> React </span>
            <span className={styles.vue}> Vue</span>，
          </p>
          <p>
            偶尔
            <span className={styles.sometime} ref={typedElement} />
          </p>
        </Col>

        <Col span={24} md={9} className={styles.avatarWrapper}>
          <Fade bottom>
            <div className={styles.avatar}>
              <div ref={dragonLottieRef} />
            </div>
          </Fade>
        </Col>
      </Row>

      <div className={styles.arrowWrapper}>
        <Fade top>
          <div className={styles.arrow}>
            <div ref={arrowDownLottieRef} onClick={next} />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Home;
