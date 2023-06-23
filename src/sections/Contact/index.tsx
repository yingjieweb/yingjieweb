import React from "react";
// components
import Fade from "react-reveal/Fade";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Title from "../../components/Title";
// utils
import { detectMobile } from "../../utils";
// constants
import { contacts } from "./constants";
// styles
import styles from "./styles.module.scss";

const isMobile = detectMobile();
const emailStr =
  "mailto:yingjieweb@qq.com?subject=想说啥就说啥吧&body=大胆说出你的想法~";

const Contact: React.FC = () => (
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
        </ul>

        <p className={styles.subTitle}>👍 求赞，求关注，求转发，一键三连！</p>

        <Button
          onClick={() => (window.location.href = emailStr)}
          className={styles.emailBtn}
          bg="#53A8FF"
        >
          yingjieweb@qq.com
        </Button>
      </div>
    </Fade>
  </Section>
);

export default Contact;
