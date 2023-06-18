import React, { FC } from "react";
import styles from "./styles.module.scss";

type IPropsType = {
  children: any;
};

const Timeline: FC<IPropsType> = (props) => {
  const { children } = props;

  return <div className={styles.timeline}>{children}</div>;
};

export default Timeline;
