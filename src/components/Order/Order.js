import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Cart from '../cart/Cart'
import ReviewItem from '../reviewItem/ReviewItem'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb'

const Order = () => {
  const {products, initialCart} = useLoaderData()      //{products: products, initialCart: initialCart };
  const [cart, setCart] = useState(initialCart)

  const clearCart = ()=>{
    setCart([]);
    deleteShoppingCart()
  }

  const handleRemoveItem = (id)=>{
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  }
  return (
    <div className='shop-container'>
      <div className='orders-container'>
          {
            cart.map(product => <ReviewItem 
              key={product.id}
              product = {product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>)
          }
          {
            cart.length === 0 && <h2>No Item for Review. Please <Link to='/shop'>Shop More</Link></h2>
          }
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Order