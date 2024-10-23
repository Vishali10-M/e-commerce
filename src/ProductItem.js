import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, cartItem, handleAddToCart, handleIncrease, handleDecrease, handleRemoveFromCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.description.substring(0, 100)}...</p>
      <p><strong>Price:</strong> ${product.price}</p>

      {cartItem ? (
        <div className="cart-actions">
          <button onClick={() => handleDecrease(product)} className="cart-btn">-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => handleIncrease(product)} className="cart-btn">+</button>
          <button onClick={() => handleRemoveFromCart(product.id)} className="remove-btn">
            Delete
          </button>
        </div>
      ) : (
        <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
