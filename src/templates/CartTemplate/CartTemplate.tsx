import React, { useEffect, useState } from "react";
import styles from "./CartTemplate.module.scss";
import { Header, ProductCart, ProductSelector } from "../../organism";
import axios from "axios";

export const CartTemplate = () => {
  const [products, setProducts] = useState([]);

  const [itemCount, setItemCount] = useState(1);

  const [selectProduct, setSelectProduct] = useState("");

  const [selectProductId, setSelectProductId] = useState("");

  const [addedProduct, setAddedProduct] = useState<any>([]);

  const getAllFruitsUrl = "https://fruityvice.com/api/fruit/all";

  useEffect(() => {
    axios.get("/api/all").then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    if (selectProductId) {
      axios.get(`/api/${selectProduct}`).then((response) => {
        const selectedRows = {
          id: response.data.id,
          name: response.data.name,
        };

        setAddedProduct([...addedProduct, selectedRows]);
      });
    }
  }, [selectProduct]);

  return (
    <div className={styles.contentWrapper}>
      <Header title={"Add Products."} />
      <div className={styles.mainContainer}>
        <ProductSelector
          title={"Product"}
          selectProductId={selectProductId}
          products={products}
          setSelectProduct={setSelectProduct}
          setSelectProductId={setSelectProductId}
        />
        <ProductCart
          addedProduct={addedProduct}
          itemCount={itemCount}
          setItemCount={setItemCount}
          setAddedProduct={setAddedProduct}
        />
      </div>
    </div>
  );
};
