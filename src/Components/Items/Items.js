import './Item.css'
import React from 'react'

const Items = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt=""></img>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>
                <div className='item-price-old'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}
export default Items