import React from "react";
import styles from "./ImageContant.module.scss";

type TImageContantProps = {
  src: string;
};

export const ImageContant = (props: TImageContantProps) => {
  const { src } = props;
  return (
    <div className={styles.productCartImageWrapper}>
      <img className={styles.productCartImage} src={src} />
    </div>
  );
};
