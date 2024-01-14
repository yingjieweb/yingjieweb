import React from "react";
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
import AudioVisualization from "./AudioVisualization";

const isMobile = detectMobile();
const emailStr =
  "mailto:yingjieweb@qq.com?subject=想说啥就说啥吧&body=大胆说出你的想法~";

const Contact: React.FC = () => {
  const [audioPlaySwitch, setAudioPlaySwitch] = React.useState(false);

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

      <div className={styles.audioBgCanvas}>
        <AudioVisualization
          audioPlaySwitch={audioPlaySwitch}
        ></AudioVisualization>
      </div>

      <div className={styles.footer}>
        <Input
          placeholder="随便讲两句吧！点我有惊喜！🎵"
          onFocus={() => setAudioPlaySwitch(true)}
          onBlur={() => setAudioPlaySwitch(false)}
        ></Input>
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
    </Section>
  );
};

export default Contact;
