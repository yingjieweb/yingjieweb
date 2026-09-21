"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
// components
import Highlight from "@/app/_components/common/highlight";
import Paragraph from "@/app/_components/common/paragraph";
import Title from "@/app/_components/common/title";
import Life from "./life";
import Profile from "./profile";
// i18n
import "@/app/i18n";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-screen box-border overflow-hidden bg-white px-6 py-12 text-center text-[#002245] transform translate-z-0
                 [&_p]:!text-[#002245] [&_p]:![text-shadow:none]"
      style={{
        backgroundImage: "url('/assets/svgs/about-bg.svg')",
      }}
    >
      <div className="mx-auto max-w-[1200px] py-[30px]">
        <Title tag="h2" className="!text-[#002245] ![text-shadow:none]">
          {t("about.title")}
        </Title>

        <Title tag="h3" className="!text-[#002245] ![text-shadow:none]">
          {t("about.subtitle")}
        </Title>

        <Profile />

        <Life />

        <Fade direction="up">
          <Paragraph className="my-[75px] text-[1.1em] !leading-[1.75]">
            {t("about.goal.prefix")}{" "}
            <Highlight>{t("about.goal.code")}</Highlight>
            {t("about.goal.middle")}
            <br />
            {t("about.goal.suffix")} 👉{" "}
            <span className="font-bold text-[#409eff]">Just for fun ~</span>
          </Paragraph>
        </Fade>
      </div>
    </section>
  );
}

export default About;
