import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const products = useLoaderData()

  // const [products, setProducts] = useState([]);
  const [cart, setCart] =useState([])

  const clearCart = ()=>{
    setCart([]);
    deleteShoppingCart()
  }

  /*
  ae process tai nice clean kore deoa holo.
  useEffect(() => {
    // console.log("product load before fetch");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      // console.log('products loaded');
      });
  }, []);

  useEffect(()=>{
    // console.log('loacal storage first line', products);
    const shoppingCart= getShoppingCart()
    const savedCart =[];
    for (const id in shoppingCart){
      const addedProduct = products.find(product => product.id === id)
      if(addedProduct){
        const quentity = shoppingCart[id];
        addedProduct.quentity = quentity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart)
    // console.log('local storage finished');
  },[products])
  */

  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) =>setProducts(data));
  // }, []);


  useEffect(()=>{
    const shoppingCart = getShoppingCart();
    const saveCart =[];
    for(const id in shoppingCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quentity = shoppingCart[id];
        addedProduct.quentity = quentity;
        saveCart.push(addedProduct)
      }
    }
    setCart(saveCart)
  },[products])


  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = []; 
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists){
      selectedProduct.quentity = 1;
      newCart = [...cart, selectedProduct];
    }else{
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quentity = exists.quentity + 1;
      newCart = [...rest, exists];
    }
    
    setCart(newCart)
    addToDb(selectedProduct.id)
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to='/order'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
