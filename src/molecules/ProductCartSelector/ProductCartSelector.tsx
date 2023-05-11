import React from "react";
import styles from "./ProductCartSelector.module.scss";
import { ProductDto } from "../../pages/products/api";
import { ActionButton, Select } from "../../atoms";

type TProductCartSelectorProps = {
  selectProductId: string;
  products: ProductDto[];
  setSelectProduct: (e: string) => void;
  setSelectProductId: (e: string) => void;
};

export const ProductCartSelector = (props: TProductCartSelectorProps) => {
  const { setSelectProductId, selectProductId, products, setSelectProduct } =
    props;
  return (
    <>
      <div className={styles.productSelectorWrapper}>
        <Select
          selectProductId={selectProductId}
          products={products}
          setSelectProductId={setSelectProductId}
        />
        <ActionButton
          onClick={() => {
            setSelectProduct(selectProductId);
          }}
          selectProductId={selectProductId}
          text={"Add"}
        />
      </div>
    </>
  );
};
