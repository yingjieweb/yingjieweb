"use client";

import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import { Trans } from "react-i18next";
// components
import Highlight from "@/app/_components/common/highlight";
import Paragraph from "@/app/_components/common/paragraph";
// constants
import avatar from "@/public/assets/images/avatar.jpg";
// hooks
import useLottie from "@/app/hooks/useLottie";

const cubeLottie =
  "https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json";

function Profile() {
  const cubeRef = useLottie(cubeLottie);

  return (
    <Row gutter={36} className="text-center">
      <Col span={24}>
        <Fade direction="up">
          <div className="relative mx-auto mb-5 aspect-square w-[300px] max-w-[90%]">
            <Image
              className="rounded-full object-cover shadow-profile"
              src={avatar}
              alt="Yingjieweb"
              fill
              sizes="300px"
            />
          </div>
        </Fade>

        <Fade direction="up">
          <Paragraph className="mb-4">
            <Trans
              i18nKey="about.profile.intro"
              components={{ highlight: <Highlight /> }}
            />
          </Paragraph>
          <Paragraph className="mb-4">
            <Trans
              i18nKey="about.profile.undergraduate"
              components={{ highlight: <Highlight /> }}
            />
          </Paragraph>
          <Paragraph className="mb-4">
            <Trans
              i18nKey="about.profile.graduate"
              components={{ highlight: <Highlight /> }}
            />
          </Paragraph>
        </Fade>

        <div className="h-[200px]" ref={cubeRef} />

        <Fade direction="up">
          <Paragraph className="mb-4">
            <Trans i18nKey="about.profile.hobbies" />
          </Paragraph>
          <Paragraph className="mb-4">
            <Trans
              i18nKey="about.profile.dream"
              components={{ highlight: <Highlight /> }}
            />
          </Paragraph>
          <Paragraph className="mb-4">
            <Trans
              i18nKey="about.profile.career"
              components={{ highlight: <Highlight /> }}
            />
          </Paragraph>
        </Fade>
      </Col>
    </Row>
  );
}

export default Profile;
