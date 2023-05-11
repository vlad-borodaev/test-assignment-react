import React from "react";
import styles from "./CountButton.module.scss";

type TCountButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent) => any;
};

export const CountButton = (props: TCountButtonProps) => {
  const { text, onClick } = props;
  return (
    <button className={styles.countButton} onClick={onClick}>
      {text}
    </button>
  );
};
