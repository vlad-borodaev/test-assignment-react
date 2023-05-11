import React from "react";
import styles from "./EmptyCart.module.scss";
import { ImageContant } from "../../atoms";

type TEmptyCartProps = {
  src: string;
};

export const EmptyCart = (props: TEmptyCartProps) => {
  const { src } = props;
  return (
    <div className={styles.productCartEmpty}>
      <ImageContant src={src} />
      <p className={styles.productCartEmptyText}>
        No products have been added.
      </p>
    </div>
  );
};
