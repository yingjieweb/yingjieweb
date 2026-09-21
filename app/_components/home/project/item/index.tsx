"use client";

import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { Tooltip } from "antd";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

interface ProjectImage {
  image: StaticImageData;
  content: string;
}

export type ProjectItem = {
  id: string;
  logo?: StaticImageData;
  logoFont?: string;
  title?: string | ReactNode;
  badges?: string[];
  content?: string | ReactNode;
  description?: string | ReactNode;
  links?: ProjectImage[];
  techUsed?: ProjectImage[];
};

const getLinkLabel = (url: string) => {
  if (url.includes("github.com")) return "GitHub";
  if (url.includes("juejin.cn")) return "Juejin";
  if (url.includes("csdn.net")) return "CSDN";
  return "Live preview";
};

const Item: React.FC<ProjectItem> = (props) => {
  const { t } = useTranslation();
  const {
    logo,
    logoFont,
    title,
    badges,
    content,
    description,
    links,
    techUsed,
  } = props;

  return (
    <div className="p-6 transition-transform duration-300 max-[786px]:px-0">
      <Fade>
        <div className="rounded-[6px] bg-white p-5 text-center hover:z-[3] hover:shadow-[0_5px_15px_0_rgb(0_0_0_/_35%)]">
          {logo && (
            <Image
              className="mx-auto mb-3 h-20 w-auto"
              src={logo}
              alt={typeof title === "string" ? `${title} logo` : "Project logo"}
            />
          )}
          {logoFont && <div className="mb-3 h-20 text-[70px] leading-none">{logoFont}</div>}

          {title && (
            <h4 className="mb-3 font-sans text-2xl font-bold leading-[1.125] text-[#002245] [text-shadow:0_1px_1px_rgb(0_34_69_/_32%)]">
              {title}
            </h4>
          )}

          {badges && (
            <div className="mb-2 flex justify-center gap-2">
              {badges.map((badge) => (
                <Image key={badge} src={badge} height={32} alt="badge" />
              ))}
            </div>
          )}

          {content && (
            <div className="[&_img]:h-auto [&_img]:max-h-full [&_img]:max-w-full [&_img]:cursor-zoom-in [&_img]:shadow-[0_5px_15px_0_rgb(0_0_0_/_35%)]">
              {content}
            </div>
          )}

          {description && (
            <div className="mx-0 mb-[25px] mt-[35px] inline-block text-left text-[15px] leading-normal tracking-[1px] text-[#151515] [text-shadow:0_1px_1px_#e0e0e0] [&_p]:mb-2 [&_p:last-child]:mb-0">
              {description}
            </div>
          )}

          {links && (
            <div className="mb-[15px] flex h-12 items-center justify-center">
              {links.map((link) => (
                <a
                  key={link.content}
                  href={link.content}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={getLinkLabel(link.content)}
                  className="inline-flex h-12 items-center px-2 hover:animate-energy"
                >
                  <Image className="h-[80%] w-auto" src={link.image} alt="" />
                </a>
              ))}
            </div>
          )}

          {techUsed && (
            <div className="leading-normal">
              <h4 className="inline-block w-4/5 border-t border-[#cacaca] pb-3 pt-4 text-2xl font-bold text-[#151515]">
                {t("projects.techStack")}
              </h4>
              <ul className="flex flex-wrap justify-center">
                {techUsed.map((tech, index) => (
                  <li
                    key={tech.content}
                    style={{ animationDelay: `${index * 300}ms` }}
                    className="my-[3px] px-[10px]"
                  >
                    <Tooltip placement="top" title={tech.content} color="black">
                      <Image className="h-8 w-auto" src={tech.image} alt={tech.content} />
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Item;
