import React from "react";
import styles from "./ProductSelector.module.scss";
import { ProductDto } from "../../pages/products/api";
import { ProductCartSelector } from "../../molecules";

type TProductSelectorProps = {
  selectProductId: string;
  products: ProductDto[];
  setSelectProduct: (e: string) => void;
  setSelectProductId: (e: string) => void;
  title: string;
};

export const ProductSelector = (props: TProductSelectorProps) => {
  const {
    setSelectProductId,
    selectProductId,
    products,
    setSelectProduct,
    title,
  } = props;
  return (
    <>
      <div className={styles.productSelectWrapper}>
        <div className={styles.productSelectContainer}>
          <div className={styles.productSelector}>
            <p className={styles.productText}>{title}</p>
            <ProductCartSelector
              selectProductId={selectProductId}
              products={products}
              setSelectProduct={setSelectProduct}
              setSelectProductId={setSelectProductId}
            />
          </div>
        </div>
      </div>
    </>
  );
};
