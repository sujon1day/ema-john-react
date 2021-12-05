import React from "react";
import { useParams } from "react-router";
import data from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const product = data.find((product) => product.key === productKey);
  console.log(product);
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Your Product Details
      </h2>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
