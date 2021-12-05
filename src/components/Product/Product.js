import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock, star, features, key } =
    props.product;
  return (
    <div className="product">
      <div className="col-left">
        <img className="product-image" src={img} alt="" />
      </div>
      <div className="col-right">
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <div>
          <div>
            <p>
              <small>by: {seller}</small>
            </p>
            <p className="product-price">${price}</p>
            <p>only {stock} left in stock - order soon</p>
            {props.showAddToCart && (
              <button
                onClick={() => props.handleAddProduct(props.product)}
                className="cart-button"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                add to cart
              </button>
            )}
          </div>
          <div>
            <p>
              Rating: <b>{star}</b>
            </p>
            <h3>Features</h3>
            <ul>
              {features.map((feature) => (
                <li className="feature-list">
                  {feature.description} <b>{feature.value}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
