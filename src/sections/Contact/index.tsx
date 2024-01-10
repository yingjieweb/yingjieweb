import React, { useEffect, useRef } from "react";
// components
import { Button, Input } from "antd";
import Fade from "react-reveal/Fade";
import Section from "../../components/Section";
import Title from "../../components/Title";
// utils
import { detectMobile } from "../../utils";
// constants
import { contacts } from "./constants";
// styles
import styles from "./styles.module.scss";
import AudioContainer from "./AudioContainer";

const isMobile = detectMobile();
const emailStr =
  "mailto:yingjieweb@qq.com?subject=想说啥就说啥吧&body=大胆说出你的想法~";

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      className={styles.contact}
      style={{ backgroundAttachment: isMobile ? "initial" : "fixed" }}
    >
      <Title tag="h2">How to find me? 😉</Title>

      <Fade bottom>
        <div className={styles.container}>
          <ul className={styles.contactList}>
            {contacts.map((contact) => (
              <li key={contact.image}>
                <a href={contact.url} target="_blank" rel="noreferrer">
                  <img src={contact.image} alt="contactImage" />
                </a>
              </li>
            ))}
            <li onClick={() => (window.location.href = emailStr)}>
              <div>📮</div>
            </li>
          </ul>
        </div>
      </Fade>

      <AudioContainer></AudioContainer>

      {/* read some message about self introduction？ */}
      {/* <div>
        I am a software developer with a passion for creating beautiful and
        functional web applications. I have experience in a variety of
        programming languages and frameworks, and I am always eager to learn new
        technologies.
      </div> */}

      {/* <Fade bottom>
        <div className={styles.footer}>
          <Input placeholder="随便讲两句吧 😉"></Input>
          <Button
            type="primary"
            className={styles.btn}
            onClick={() => {
              fetch("http://10.190.170.76:3000/messages/getAllMessages", {
                method: "GET",
              }).then((res) => {
                console.log(res);
              });
            }}
          >
            发送
          </Button>
        </div>
      </Fade> */}
    </Section>
  );
};

export default Contact;
