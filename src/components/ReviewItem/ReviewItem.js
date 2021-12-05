import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = (props) => {
  // console.log(props)
  const { name, quantity, key, price } = props.product;
  const handleRemoveReviewProduct = props.handleRemoveReviewProduct;
  return (
    <div
      style={{
        margin: "5rem 5rem 5rem 0",
        padding: "3rem",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <h4 className="product-name">
        <Link to={"/product/" + key}>{name}</Link>
      </h4>
      <p>Quantity: {quantity}</p>
      <p>
        <small>${price}</small>
      </p>
      <button
        onClick={() => handleRemoveReviewProduct(key)}
        className="cart-button"
      >
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
