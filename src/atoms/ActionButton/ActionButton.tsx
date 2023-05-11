import React from "react";
import styles from "./ActionButton.module.scss";
import classNames from "classnames";

type TImageContantProps = {
  text: string;
  onClick: () => void;
  selectProductId: string;
};

export const ActionButton = (props: TImageContantProps) => {
  const { text, onClick, selectProductId } = props;
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.actionButton,
        selectProductId ? styles.activeButton : ""
      )}
      disabled={!selectProductId}
    >
      {text}
    </button>
  );
};
