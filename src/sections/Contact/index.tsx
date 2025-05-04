import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
// components
import { Fade } from "react-awesome-reveal";
import Section from "../../components/Section";
import Title from "../../components/Title";
// utils
import emailjs from "@emailjs/browser";
import { detectMobile } from "../../utils";
// constants
import { contacts } from "./constants";
import { EMAILJS_CONFIG } from "../../config/emailjs";
// styles
import styles from "./styles.module.scss";

const isMobile = detectMobile();

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onFinish = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    const dataToSend = { ...values, reply_to: values.email };
    setIsLoading(true);
    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        dataToSend,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => {
        message.success("邮件已成功发送！");
        form.resetFields();
      })
      .catch(() => {
        message.error("发送失败，请稍后再试。");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Section
      id="contact"
      className={styles.contact}
      style={{ backgroundAttachment: isMobile ? "initial" : "fixed" }}
    >
      <Fade direction="up">
        <div className={styles.container}>
          <Title tag="h2">How to find me? 😉</Title>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              rules={[{ required: true, message: "敢问阁下尊姓大名？" }]}
            >
              <Input placeholder="阁下怎么称呼？" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "敢问阁下的邮箱是？",
                },
              ]}
            >
              <Input placeholder="邮箱，方便联系" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "多少说几句是个意思？" }]}
            >
              <Input.TextArea placeholder="留言，想说啥就说啥~" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
                disabled={isLoading}
              >
                发送消息
              </Button>
            </Form.Item>
          </Form>

          <ul className={styles.contactList}>
            {contacts.map((contact) => (
              <li key={contact.image}>
                <a href={contact.url} target="_blank" rel="noreferrer">
                  <img src={contact.image} alt="contactImage" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Fade>
    </Section>
  );
};

export default Contact;
