import React from "react";
import useLottie from "../../../hooks/useLottie";
// components
import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import Paragraph from "../../../components/Paragraph";
import HighLight from "../../../components/HighLight";
// styles
import styles from "./styles.module.scss";
import avatar from "../../../assets/images/avatar.jpg";

const cubeLottie =
  "https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json";

const Profile: React.FC = () => {
  const cubeRef = useLottie(cubeLottie);

  return (
    <Row gutter={36} className={styles.profile}>
      <Col lg={{ span: 24, order: 1 }} span={24} order={3}>
        <Fade direction="up">
          <img className={styles.avatar} src={avatar} alt="头像" />
        </Fade>

        <Fade  direction="up">
          <Paragraph>
            一名 <HighLight>前端爱好者</HighLight> ，山东烟台人。 目前在{" "}
            <HighLight>搜狐 @ 北京</HighLight> 从事前端开发 🧱
          </Paragraph>
          <Paragraph>
            本科就读于省内的 <HighLight>曲阜师范大学 @ 济宁</HighLight>{" "}
            软件工程专业 。大学期间，参加过学校的{" "}
            <HighLight>国旗护卫队</HighLight> 🇨🇳
            ，担任过新生军训教官，后悔没去当兵历练一下 😕。
          </Paragraph>
          <Paragraph>
            毕业之后去 <HighLight>东北大学 @ 沈阳</HighLight> 读了 3
            年研究生。相比后端和算法，个人感觉还是{" "}
            <HighLight>更喜欢前端</HighLight>
            ，觉得做喜欢的事情是不会有错的 🤔
          </Paragraph>
        </Fade>

        <div className={styles.lottie} ref={cubeRef} />

        <Fade direction="up">
          <Paragraph>
            平时除了喜欢写点代码之外，还喜欢和小伙伴们打打篮球 🏀 ，健健身 🏋
            ...
          </Paragraph>
          <Paragraph>
            小时候的梦想是当宇航员
            👨‍🚀，当下这个年纪好像没什么大的梦想，而是一个个阶段性的{" "}
            <HighLight>小目标</HighLight> 🌟
          </Paragraph>
          <Paragraph>希望自己能不忘初心，踏踏实实学点前端 🤔</Paragraph>
          <Paragraph>
            持续学习前端知识 🎯，争取三到五年能够成为一名{" "}
            <HighLight>高级前端工程师</HighLight>！👷
          </Paragraph>
        </Fade>
      </Col>

      {/* <Col
        lg={{ span: 7, order: 2 }}
        span={14}
        order={1}
        className={styles.avatar}
      >
        <Fade direction="up">
          <img src={avatar} alt="头像" />
        </Fade>
      </Col> */}
    </Row>
  );
};

export default Profile;
