import React, { FC } from "react";
import styles from "./styles.module.scss";

type IPropsType = {
  children: any;
};

const TimelineHeader: FC<IPropsType> = (props) => {
  const { children } = props;

  return (
    <header className={styles.timelineHeader}>
      <span>{children}</span>
    </header>
  );
};

export default TimelineHeader;
