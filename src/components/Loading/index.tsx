import React from "react";
import styles from "./styles.module.scss";
import loadingIcon from "../../assets/svgs/loading.svg";

interface Props {
  title?: string;
}

const Loading: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div className={styles.loading}>
      <img src={loadingIcon} alt="loading" />
      {title && <p>{title}</p>}
    </div>
  );
};

export default Loading;
