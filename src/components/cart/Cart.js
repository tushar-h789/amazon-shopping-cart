import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart, children } = props;
//   console.log(cart);

  let total = 0;
  let shipping = 0;
  let quentity = 0;
  for (const product of cart) {
    quentity = quentity + product.quentity;
    total = total + product.price * product.quentity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2))

  const grandTotal = total + shipping + tax

  return (
    <div className="cart">
      <h4 className="cart-text">Older Summary</h4>
      <p>Selected Items: {quentity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>

      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
