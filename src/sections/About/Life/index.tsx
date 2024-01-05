import React from "react";
import useTyped from "../../../hooks/useTyped";
// components
import Timeline from "../../../components/Timeline";
import TimelineHeader from "../../../components/Timeline/Header";
import TimelineItem from "../../../components/Timeline/Item";
import HighLight from "../../../components/HighLight";
// Icons
import qfnu from "../../../assets/icons/qfnu.png";
import neu from "../../../assets/icons/neu.png";
import sohu from "../../../assets/icons/sohu.png";
import fta from "../../../assets/icons/fta.png";
// styles
import styles from "./styles.module.scss";

const strings = ["码农", "打工人", "程序员", "工程师", "前端开发"];

const Life: React.FC = () => {
  const el = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1995</TimelineHeader>
      <TimelineItem direction="right" time="9月" header="👶🏻" />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="🙇‍♂️ 好好学习..." />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={["🎓 本科毕业 🎉"]}
        node={
          <span className={styles.customNode}>
            <img width={46} src={qfnu} alt="qfnu" />
          </span>
        }
        content={[
          "济宁，山东",
          <span>
            <HighLight>曲阜师范大学</HighLight> @ 软件工程
          </span>,
          "最初写 C 和 Java，慢慢转写 JavaScript，前端真好玩！",
        ]}
      />
      <TimelineItem
        time="9月"
        node={
          <span className={styles.customNode}>
            <img width={72} src={neu} alt="neu" />
          </span>
        }
        header={[
          "✈️ 沈阳",
          <span>
            研究生入学 <HighLight>东北大学</HighLight>
          </span>,
        ]}
        content={["在校学人工智能，自己搞前端、秋招刷题... 面试..."]}
      />
      <TimelineHeader>2021</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={["🎓 研究生毕业 🎉"]}
        content={["大数据分析与人工智能实验室 @ 人工智能"]}
      />
      <TimelineItem
        time="7月"
        node={
          <span className={styles.customNode}>
            <img width={70} src={sohu} alt="sohu" />
          </span>
        }
        header={[
          "海淀，北京",
          <span className={styles.position}>
            入职 <HighLight>@搜狐</HighLight> 🦊
            <span className={styles.typed} />
          </span>,
        ]}
      />
      <TimelineHeader>2023</TimelineHeader>
      <TimelineItem
        direction="right"
        time="9月"
        node={
          <span className={styles.customNode}>
            <img width={70} src={fta} alt="FTA" />
          </span>
        }
        header={[
          "南京，江苏",
          <span className={styles.position}>
            入职 <HighLight>@满帮</HighLight> 🚚 {" "}
            <span className={styles.typed} ref={el} />
          </span>,
        ]}
        content={["和女朋友结束异地恋啦！🎉"]}
      />
      <TimelineHeader>🤔...</TimelineHeader>
    </Timeline>
  );
};

export default Life;
