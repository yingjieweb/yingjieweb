"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
// components
import Highlight from "@/app/_components/common/highlight";
import Timeline from "@/app/_components/common/timeline";
import TimelineHeader from "@/app/_components/common/timeline/header";
import TimelineItem from "@/app/_components/common/timeline/item";
// constants
import ammo from "@/public/assets/icons/ammo.jpeg";
import fta from "@/public/assets/icons/fta.png";
import neu from "@/public/assets/icons/neu.png";
import qfnu from "@/public/assets/icons/qfnu.png";
import sohu from "@/public/assets/icons/sohu.png";
// hooks
import useTyped from "@/app/hooks/useTyped";

function Life() {
  const { t } = useTranslation();
  const strings = useMemo(
    () => t("timeline.roles", { returnObjects: true }) as string[],
    [t],
  );
  const typedElement = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1995</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.september")}
        header="👶🏻"
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header={t("timeline.study")} />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.june")}
        header={t("timeline.bachelorGraduation")}
        node={
          <span className="text-[2em]">
            <Image
              className="rounded-full"
              width={46}
              src={qfnu}
              alt="Qufu Normal University"
            />
          </span>
        }
        content={[
          t("timeline.jining"),
          <span key="qfnu">
            <Highlight>{t("timeline.qfnu")}</Highlight> @{" "}
            {t("timeline.softwareEngineering")}
          </span>,
          t("timeline.codingJourney"),
        ]}
      />
      <TimelineItem
        time={t("timeline.month.september")}
        node={
          <span className="text-[2em]">
            <Image
              className="rounded-full"
              width={72}
              src={neu}
              alt="Northeastern University"
            />
          </span>
        }
        header={[
          t("timeline.shenyang"),
          <span key="neu">
            {t("timeline.graduateAdmission")} {" "}
            <Highlight>{t("timeline.neu")}</Highlight>
          </span>,
        ]}
        content={t("timeline.graduateStudy")}
      />
      <TimelineHeader>2021</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.june")}
        header={t("timeline.masterGraduation")}
        content={t("timeline.lab")}
      />
      <TimelineItem
        time={t("timeline.month.july")}
        node={
          <span className="text-[2em]">
            <Image className="rounded-full" width={70} src={sohu} alt="Sohu" />
          </span>
        }
        header={[
          t("timeline.beijing"),
          <span className="whitespace-nowrap" key="sohu">
            {t("timeline.joined")} <Highlight>{t("timeline.sohu")}</Highlight>{" "}
            🦊
          </span>,
        ]}
      />
      <TimelineHeader>2023</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.september")}
        node={
          <span className="text-[2em]">
            <Image
              className="rounded-full"
              width={70}
              src={fta}
              alt="Full Truck Alliance"
            />
          </span>
        }
        header={[
          t("timeline.nanjing"),
          <span className="whitespace-nowrap" key="fta">
            {t("timeline.joined")} <Highlight>{t("timeline.fta")}</Highlight>{" "}
            🚚
          </span>,
        ]}
        content={t("timeline.reunion")}
      />
      <TimelineHeader>2025</TimelineHeader>
      <TimelineItem
        time={t("timeline.month.march")}
        node={
          <span className="text-[2em]">
            <Image width={48} src={ammo} alt="AMMO" />
          </span>
        }
        header={[
          t("timeline.newChapter"),
          <span className="whitespace-nowrap" key="ammo">
            {t("timeline.startedBuilding")} {" "}
            <Highlight>{t("timeline.ammo")}</Highlight>{" "}
            {t("timeline.entrepreneurship")}
            <span className="italic text-[#409eff]" ref={typedElement} />
          </span>,
        ]}
        content={[t("timeline.fullStack"), t("timeline.aiAgent")]}
      />
      <TimelineHeader>2026</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.march")}
        node={<span className="text-[2em]">💒</span>}
        header={[
          t("timeline.sanya"),
          <span key="married">
            <Highlight>{t("timeline.married")}</Highlight> 💍
          </span>,
        ]}
        content={[t("timeline.loveJourney"), t("timeline.loveOfMyLife")]}
      />
      <TimelineHeader>🤔...</TimelineHeader>
    </Timeline>
  );
}

export default Life;
