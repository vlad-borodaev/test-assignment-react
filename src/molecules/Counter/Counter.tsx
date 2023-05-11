import React, { useEffect, useState } from "react";
import styles from "./Counter.module.scss";
import { CountButton } from "../../atoms";

type TCounterProps = {
  totalCount: number;
  setItemCount: (count: number) => void;
};

export const Counter = (props: TCounterProps) => {
  const { totalCount, setItemCount } = props;

  const [count, setCount] = useState(totalCount || 1);

  const addProduct = () => {
    setCount((count) => count + 1);
  };

  const removeProduct = () => {
    setCount((count) => count - 1);
  };

  useEffect(() => {
    setItemCount(count);
  }, [count]);

  return (
    <div className={styles.counterWrapper}>
      <CountButton text={"+"} onClick={addProduct} />
      <p className={styles.counterText}>{count}</p>
      <CountButton text={"-"} onClick={removeProduct} />
    </div>
  );
};
