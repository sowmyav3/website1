import React from 'react'
import './DescriptionBox.css';

export const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122) </div>
            </div>
            <div className='descriptionbox-description'>
                <p>
                    An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet.
                </p>
                <p>
                    An e-commerce website serves as a digital storefront where businesses can sell products or services to customers online. It enables transactions, payments, and order processing to occur electronically
                </p>
            </div>
        </div>
    )
}
