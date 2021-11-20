import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  //   const totalPrice = cart.reduce((total, pd) => total + pd.price, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  let shippingCost = 0;
  if (total > 35) {
    shippingCost = 0;
  } else if (total > 15) {
    shippingCost = 3.99;
  } else if (total > 0) {
    shippingCost = 9.99;
  }
  const tax = total / 10;

  const grandTotal = shippingCost + total + tax;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>
        Items Ordered: <span className="items-count">{cart.length}</span>
      </p>
      <div className="cart-price-info">
        <p>
          <small>
            Items: <b>${formatNumber(total)}</b>
          </small>
        </p>

        <p>
          <small>
            Tax + VAT: <b>${formatNumber(tax)}</b>
          </small>
        </p>
        <p
          style={{
            borderBottom: "1px solid lightgray",
            paddingBottom: ".5rem",
          }}
        >
          <small>
            Shipping Cost: <b>${formatNumber(shippingCost)}</b>
          </small>
        </p>
        <p className="total-price">
          Total Price: <b>${formatNumber(grandTotal)}</b>
        </p>
        <button className="review-button">Review your order</button>
      </div>
    </div>
  );
};

export default Cart;
