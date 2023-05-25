import React from "react";
import "./Product.css";
import {BsFillCartCheckFill} from 'react-icons/bs'

const Product = (props) => {
    const {handleAddToCart, product} =props
  const { name, img, price, ratings, seller } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ${price}</p>
      <div className="product-detail">
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="cart-btn"
      >
        <h5>Add To Cart</h5>
        <BsFillCartCheckFill className="cart-icn"/>
      </button>
    </div>
  );
};

export default Product;
