import React, { AllHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IProps extends AllHTMLAttributes<HTMLSpanElement> {
  isDark?: boolean;
}

const HighLight: React.FC<IProps> = (props) => {
  const { isDark, children, className, ...restProps } = props;

  const darkStyle = {
    backgroundImage: "linear-gradient(0deg ,#00ff19,#00fff7 90%)",
  };

  return (
    <span
      {...restProps}
      className={classNames(className, styles.highlight)}
      style={isDark ? darkStyle : undefined}
    >
      {children}
    </span>
  );
};

export default HighLight;
