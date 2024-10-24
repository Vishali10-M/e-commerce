import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ product, cartItem, handleAddToCart, handleIncrease, handleDecrease, handleRemoveFromCart }) => {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <p>${product.price}</p>
        <h3>{product.title}</h3>
      </Link>
    </div>
  );
};

export default ProductItem;
