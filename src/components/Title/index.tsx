import React, { AllHTMLAttributes, createElement } from "react";
import Fade from "react-reveal/Fade";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  tag: "h1" | "h2" | "h3";
}

const Title: React.FC<IProps> = (props) => {
  const { tag, children, className, ...restProps } = props;

  return (
    <Fade bottom>
      <div {...restProps} className={classNames(className, styles.title)}>
        {createElement(`${tag}`, { children })}
      </div>
    </Fade>
  );
};

export default Title;
