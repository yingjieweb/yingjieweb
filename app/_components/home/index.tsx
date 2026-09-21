"use client";

import React, { useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
// constants
import dragonLottieData from "@/public/assets/lotties/dragon.json";
import arrowLottieData from "@/public/assets/lotties/arrow.json";
// hooks
import useLottie from "@/app/hooks/useLottie";
import useTyped from "@/app/hooks/useTyped";
// i18n
import "@/app/i18n";

const ammoUrl = "https://www.linkedin.com/company/ammo-ai/";

function Home() {
  const { t } = useTranslation();
  const introStrings = useMemo(
    () => [t("home.typed.tech"), t("home.typed.blog"), t("home.typed.sports")],
    [t],
  );
  const typedElement = useTyped(introStrings, { loop: true });
  const dragonLottieRef = useLottie(dragonLottieData);
  const arrowDownLottieRef = useLottie(arrowLottieData);

  const scrollToAbout = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen px-6 pt-14 pb-12 bg-white flex justify-center relative transform translate-z-0"
      style={{
        backgroundImage: "url('/assets/svgs/home-bg.svg')",
      }}
    >
      <Row className="h-4/5 flex flex-wrap justify-center">
        <Col
          span={24}
          md={15}
          className="pt-[10px] pl-0
                     [&>p]:whitespace-normal [&>p]:text-left [&>p]:text-[1.7em]
                     [&>p]:font-semibold [&>p]:leading-[1.4] [&>p]:tracking-[2px] [&>p]:text-[#002245]
                     min-[769px]:pt-[4vh] min-[769px]:pl-7 min-[769px]:[&>p]:text-[2em]
                     min-[993px]:pt-[8vh] min-[993px]:[&>p]:whitespace-nowrap
                     min-[993px]:[&>p]:text-[clamp(38px,3.6vw,54px)]"
        >
          <p>{t("home.greeting")}</p>
          <p>{t("home.role")}</p>
          <p>
            {t("home.workingPrefix")}{" "}
            <a
              className="font-bold text-[#fd6060] transition-opacity duration-300 hover:underline hover:opacity-75"
              href={ammoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.company")}
            </a>{" "}
            {t("home.workingSuffix")}
          </p>
          <p>{t("home.aiFocus")}</p>
          <p>
            ✍ <span className="text-[#3776ab]"> Python </span> ·{" "}
            <span className="text-black">Next.js</span> ·{" "}
            <span className="text-[#61dafb]">React</span> ·{" "}
            <span className="text-[#40b883]">Vue</span>
            {t("punctuation.comma")}
          </p>
          <p>
            {t("home.sometimes")}
            <span
              className="[&_.typed-cursor]:text-[#409eff]"
              ref={typedElement}
            />
          </p>
        </Col>
        <Col
          span={24}
          md={9}
          className="flex items-center justify-center p-0 min-[993px]:pt-3 min-[993px]:pr-3 min-[993px]:pb-3 min-[993px]:pl-[50px]"
        >
          <Fade direction="up">
            <div
              className="w-[200px] h-[200px] min-[993px]:w-[340px] min-[993px]:h-[340px] rounded-full
                        relative before:content-[''] before:absolute 
                        before:inset-0 before:w-full before:h-full
                        before:z-[1] before:border-4 before:border-[#409eff]
                        before:rounded-full before:bg-transparent before:animate-avatar-pulse"
            >
              <div
                ref={dragonLottieRef}
                className="w-full h-full rounded-full overflow-hidden"
              />
            </div>
          </Fade>
        </Col>
      </Row>

      <div className="absolute left-1/2 top-[80%] transform -translate-x-1/2">
        <Fade direction="up">
          <div
            className="relative h-[120px] w-[120px] cursor-pointer
                    after:absolute after:inset-0 after:scale-0 after:rounded-full after:transition-all after:duration-300
                    hover:after:scale-110 hover:after:bg-[#8cc5ff] hover:after:opacity-20"
            onClick={scrollToAbout}
          >
            <div ref={arrowDownLottieRef} />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Home;
