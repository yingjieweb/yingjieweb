"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { useTranslation } from "react-i18next";
// components
import Title from "@/app/_components/common/title";
import Item from "./item";
// constants
import { getProjects } from "./constants";
// i18n
import "@/app/i18n";

function Project() {
  const { t } = useTranslation();
  const projects = getProjects(t);

  return (
    <section id="project" className="bg-[#170707] px-6 py-12">
      <div className="mx-auto max-w-[1200px] py-[30px]">
        <Title tag="h2">{t("projects.title")}</Title>
        <Title tag="h3">{t("projects.subtitle")}</Title>

        <Masonry
          className="flex"
          columnClassName="bg-clip-padding"
          breakpointCols={{ default: 3, 992: 2, 786: 1 }}
        >
          {projects.map((project) => (
            <Item {...project} key={project.id} />
          ))}
        </Masonry>

        <Title className="mt-[60px]" tag="h3">
          {t("projects.more")}
        </Title>
      </div>
    </section>
  );
}

export default Project;
