"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Form, Input, message } from "antd";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
// constants
import { EMAILJS_CONFIG } from "@/app/config/emailjs";
import dragonLottieData from "@/public/assets/lotties/dragon.json";
import { contacts } from "./constants";
// hooks
import useLottie from "@/app/hooks/useLottie";
// i18n
import "@/app/i18n";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [form] = Form.useForm<ContactFormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const dragonLottieRef = useLottie(dragonLottieData);

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onFinish = (values: ContactFormValues) => {
    const dataToSend = { ...values, reply_to: values.email };

    setIsLoading(true);
    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        dataToSend,
        EMAILJS_CONFIG.PUBLIC_KEY,
      )
      .then(() => {
        message.success(t("contact.messages.success"));
        form.resetFields();
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error);
        message.error(t("contact.messages.error"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-[#07111f] px-8 pb-7 pt-[72px]
                 max-[900px]:h-auto max-[900px]:px-5 max-[900px]:pb-9 max-[900px]:pt-[86px]
                 max-[520px]:px-3"
      style={{ backgroundImage: "url('/assets/svgs/home-bg.svg')" }}
    >
      <div className="mx-auto w-full max-w-[1020px] py-[30px]">
        <div className="mx-auto grid min-h-[600px] w-full max-w-[1000px] grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-[40px] border-2 border-white shadow-[0_24px_70px_rgb(0_0_0_/_35%)]
                        max-[900px]:grid-cols-1 max-[900px]:rounded-[28px]">
          <div className="bg-[#f5f1e8] px-[58px] pb-[30px] pt-[34px] text-[#002245]
                          max-[900px]:p-[38px_30px] max-[520px]:p-[30px_20px]">
            <h2 className="my-3 mb-2 whitespace-nowrap text-[clamp(38px,4vw,54px)] font-bold leading-none tracking-[-0.045em]
                           max-[520px]:mt-3 max-[520px]:text-[clamp(29px,9vw,42px)]">
              {t("contact.title")}
            </h2>
            <p className="mb-5 text-base leading-[1.6]">{t("contact.subtitle")}</p>

            <Form
              className="[&_.ant-form-item]:mb-3 [&_.ant-form-item-label]:pb-[6px]
                         [&_.ant-form-item-label>label]:h-auto [&_.ant-form-item-label>label]:text-sm
                         [&_.ant-form-item-label>label]:font-extrabold [&_.ant-form-item-label>label]:text-[#002245]
                         [&_.ant-input]:border-[3px] [&_.ant-input]:border-[#002245] [&_.ant-input]:bg-white
                         [&_.ant-input]:text-[#002245] [&_.ant-input]:shadow-none
                         [&_.ant-input:hover]:border-[#002245] [&_.ant-input:hover]:shadow-[4px_4px_0_#002245]
                         [&_.ant-input:focus]:border-[#002245] [&_.ant-input:focus]:shadow-[4px_4px_0_#002245]
                         [&_.ant-form-item-explain-error]:font-semibold [&_.ant-form-item-explain-error]:text-[#8b1538]
                         [&_input.ant-input]:h-[46px] [&_input.ant-input]:rounded-full [&_input.ant-input]:px-5 [&_input.ant-input]:py-2
                         [&_textarea.ant-input]:min-h-[94px] [&_textarea.ant-input]:resize-none [&_textarea.ant-input]:rounded-3xl
                         [&_textarea.ant-input]:px-[18px] [&_textarea.ant-input]:py-[14px]"
              form={form}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                label={t("contact.form.name.label")}
                name="name"
                rules={[{ required: true, message: t("contact.form.name.required") }]}
              >
                <Input placeholder={t("contact.form.name.placeholder")} />
              </Form.Item>
              <Form.Item
                label={t("contact.form.email.label")}
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: t("contact.form.email.required"),
                  },
                ]}
              >
                <Input placeholder={t("contact.form.email.placeholder")} />
              </Form.Item>
              <Form.Item
                label={t("contact.form.message.label")}
                name="message"
                rules={[
                  {
                    required: true,
                    message: t("contact.form.message.required"),
                  },
                ]}
              >
                <Input.TextArea
                  placeholder={t("contact.form.message.placeholder")}
                  rows={4}
                />
              </Form.Item>
              <Form.Item className="!mb-0 mt-4 text-right">
                <Button
                  className="h-11 rounded-full border-[3px] border-[#002245] bg-[#002245] px-6 font-extrabold text-white shadow-[5px_5px_0_#fff]
                             hover:!-translate-x-0.5 hover:!-translate-y-0.5 hover:!border-[#002245] hover:!bg-white hover:!text-[#002245]
                             hover:!shadow-[7px_7px_0_#002245] focus:!border-[#002245] focus:!bg-white focus:!text-[#002245]"
                  htmlType="submit"
                  loading={isLoading}
                  disabled={isLoading}
                >
                  {t("contact.form.submit")}
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="relative flex flex-col items-center justify-between bg-[#07111f] px-12 pb-[26px] pt-[34px] text-white
                          max-[900px]:min-h-[600px] max-[900px]:justify-start max-[900px]:gap-[18px] max-[900px]:p-[38px_30px]
                          max-[520px]:p-[30px_20px]">
            <div className="relative self-start rounded-[24px_24px_24px_5px] border-2 border-[#8cc5ff] px-5 py-[13px] text-lg font-extrabold text-[#8cc5ff]">
              {t("contact.panelTitle")}
            </div>
            <div
              className="mx-auto h-[220px] w-[min(320px,90%)] max-[520px]:h-[210px]"
              ref={dragonLottieRef}
            />
            <p className="mx-auto mb-[14px] mt-[-8px] max-w-[440px] text-center leading-[1.7] text-white/80 [&_span]:block">
              <span>{t("contact.panelDescription.line1")}</span>
              <span>{t("contact.panelDescription.line2")}</span>
            </p>
            <p className="mb-2 self-stretch text-[13px] font-extrabold uppercase tracking-[0.06em] text-[#8cc5ff]">
              {t("contact.socialTitle")}
            </p>
            <ul className="grid w-full grid-cols-5 gap-3 max-[520px]:gap-2">
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={contact.label}
                    title={contact.label}
                    className="flex aspect-square items-center justify-center rounded-2xl border border-white/30 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[#8cc5ff]"
                  >
                    <Image
                      className="h-7 w-7 object-contain"
                      src={contact.image}
                      alt=""
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="m-0 pt-[10px] text-xs text-white/55 max-[900px]:mt-4">
              {t("contact.footer")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
