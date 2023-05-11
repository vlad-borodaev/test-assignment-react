import React from "react";
import styles from "./Select.module.scss";
import { ProductDto } from "../../pages/products/api";

type TSelectProps = {
  selectProductId: string;
  products: ProductDto[];
  setSelectProductId: (value: string) => void;
};

export const Select = (props: TSelectProps) => {
  const { selectProductId, products, setSelectProductId } = props;
  return (
    <select
      onChange={(e) => {
        setSelectProductId(e.target.value);
      }}
      className={styles.select}
    >
      {selectProductId ? null : (
        <option key={0} value={""}>
          Select product
        </option>
      )}
      {products.map((product: ProductDto) => (
        <option value={product.id} key={product.id}>
          {product.name}
        </option>
      ))}
    </select>
  );
};
