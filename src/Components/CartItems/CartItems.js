import React, { useContext } from 'react'
import './CartItems.css'
import ShopCategory from '../../pages/ShopCategory'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItems = () => {
    const {all_product,getTotalCartAmount,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className='cartitems-format cartitems-format-main'>
                    <img src={e.image} className='carticon-product-icon'></img>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}}></img>
                </div>
            </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                    <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
                <p>If you have a promo code, Enter it here</p>:
                <div className='cartitems-promobox'>
                    <input type='text' placeholder='promo code'></input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
