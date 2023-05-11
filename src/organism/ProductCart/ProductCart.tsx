import React, { useEffect } from "react";
import styles from "./ProductCart.module.scss";
import { Counter, EmptyCart } from "../../molecules";
import { ProductDto } from "../../pages/products/api";

type TProductCartProps = {
  addedProduct: ProductDto[];
  itemCount: number;
  setItemCount: (value: number) => void;
  setAddedProduct: (value: ProductDto[]) => void;
};

export const ProductCart = (props: TProductCartProps) => {
  const { addedProduct, itemCount, setItemCount, setAddedProduct } = props;

  return (
    <>
      <div className={styles.productCartWrapper}>
        <div className={styles.productCartContent}>
          {addedProduct.length !== 0 ? (
            addedProduct.map((product: ProductDto) => (
              <div key={product.id} className={styles.productCartAddItem}>
                {product.name}
                <div className={styles.productCartCounter}>
                  <Counter setItemCount={setItemCount} totalCount={itemCount} />
                </div>
              </div>
            ))
          ) : (
            <EmptyCart src={"src/assets/img/emptyCart.jpeg"} />
          )}
        </div>
      </div>
    </>
  );
};
