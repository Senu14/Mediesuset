import React from 'react';
import './productCard.scss';

const ProductCard = ({ item }) => {
    return (
        <div className='product-card'>
            <img src={item.image} alt="Product" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    );
}

export default ProductCard;
