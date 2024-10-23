import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ products, cart, handleAddToCart, handleIncrease, handleDecrease, handleRemoveFromCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        const cartItem = cart.find(item => item.id === product.id);
        return (
          <ProductItem
            key={product.id}
            product={product}
            cartItem={cartItem}
            handleAddToCart={handleAddToCart}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
