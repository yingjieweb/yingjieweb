"use client";

import React from "react";
import classNames from "classnames";

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({
  children,
  className,
  ...restProps
}) => (
  <span
    className={classNames(
      "px-1 bg-gradient-to-r from-[#409eff] bg-[length:100%_20%] hover:bg-[length:100%_100%] bg-[position:0_92%] bg-no-repeat transition-[background-size] duration-200 ease-in-out",
      className
    )}
    {...restProps}
  >
    {children}
  </span>
);

export default Highlight;
