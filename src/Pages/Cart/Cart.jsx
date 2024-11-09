import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
const Cart = () => {
  const {cartItems,food_list,removeFromCart} = useContext(StoreContext)
  return (
    <div className='Cart'>
    <div className="Cart_items">
      <div className="Cart-item-title">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item,index)=>{
        if(cartItems[item._id]>0)
        {
          return(
            <div className='cart-items-title cart-items-item'>
              <p>{item.name}</p>

            </div>
          )
        }

      })}
    </div>


    </div>
  )
}

export default Cart