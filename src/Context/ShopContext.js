import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {

    const [cartItems,setcartItems]=useState(getDefaultCart());
    
    const addToCart =(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart =(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount =()=>{
        let totalAmount=0;
        for(const items in cartItems)
        {
            if(cartItems[items]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(items))
                    totalAmount+= itemInfo.new_price*cartItems[items];
            }
            return totalAmount;
        }
    }

    const contextValue = { all_product,getTotalCartAmount, cartItems,addToCart,removeFromCart };
    return (
        <ShopContext.Provider value={(contextValue)}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;