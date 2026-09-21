"use client"

import { checkIsMobileDevice } from "@/app/utils/device";
import React, { useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import Paragraph from "@/app/_components/common/paragraph";
interface IProps {
  direction?: "left" | "right";
  time?: string | string[];
  header?: string | (string | React.ReactNode)[];
  content?: string | (string | React.ReactNode)[];
  node?: React.ReactNode;
}

const isMobile = checkIsMobileDevice();

function TimelineItem(props: IProps) {
  const { direction = "left", time, header, content, node } = props;

  const times = useMemo(() => (Array.isArray(time) ? time : [time]), [time]);
  const headers = useMemo(
    () => (Array.isArray(header) ? header : [header]),
    [header]
  );
  const contents = useMemo(
    () => (Array.isArray(content) ? content : [content]),
    [content]
  );

  return (
    <div
      className={`w-1/2 pb-6 text-lg relative
                before:content-[''] before:absolute before:block before:w-[2px] before:h-full before:bg-[#409eff]
                ${
                  direction === "left"
                    ? "text-right self-start before:right-[-1px]"
                    : "text-left self-end before:left-[-1px]"
                }`}
    >
      <div
        className={`absolute top-[1.2rem] ${
          direction === "left"
            ? "translate-x-1/2 right-[0px]"
            : "-translate-x-1/2 left-[0px]"
        }`}
      >
        {node || (
          <div className="h-3 w-3 rounded-full bg-[#409eff] border border-[#409eff]" />
        )}
      </div>

      <Fade
        direction={isMobile ? "up" : direction === "left" ? "left" : "right"}
      >
        <div
          className={`pt-[18px] ${
            direction === "left"
              ? "pr-9 text-right self-start"
              : "pl-9 text-left self-end"
          }`}
        >
          {times &&
            times.map((timeItem) => (
              <Paragraph
                key={timeItem ? timeItem.toString() : 0}
                className="text-xs mb-[5px]"
              >
                {timeItem}
              </Paragraph>
            ))}
          {headers &&
            headers.map((headerItem) => (
              <Paragraph
                key={headerItem ? headerItem.toString() : 0}
                className="text-[1em]"
              >
                {headerItem}
              </Paragraph>
            ))}
          {contents &&
            contents.map((contentItem) => (
              <Paragraph
                key={contentItem ? contentItem.toString() : 0}
                className="text-xs mb-[5px]"
              >
                {contentItem}
              </Paragraph>
            ))}
        </div>
      </Fade>
    </div>
  );
}

export default TimelineItem;
