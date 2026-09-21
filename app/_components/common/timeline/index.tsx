import React from "react";

type IPropsType = {
  children: React.ReactNode;
};

function Timeline(props: IPropsType) {
  const { children } = props;

  return <div className="my-[60px] flex flex-col">{children}</div>;
}

export default Timeline;
