import React, { AllHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Paragraph: React.FC<AllHTMLAttributes<HTMLParagraphElement>> = (
  props
) => {
  const { children, className, ...restProps } = props;

  return (
    <p {...restProps} className={classNames(className, styles.paragraph)}>
      {children}
    </p>
  );
};

export default Paragraph;
