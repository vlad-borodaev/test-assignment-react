import React from "react";
import styles from "./Header.module.scss";

type THeaderProps = {
  title: string;
};

export const Header = (props: THeaderProps) => {
  const { title } = props;
  return (
    <>
      <div className={styles.headerWrapper}>
        <p className={styles.headerTitle}>{title}</p>
      </div>
    </>
  );
};
