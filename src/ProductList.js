import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ products, cart, handleAddToCart }) => {
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
          />
        );
      })}
    </div>
  );
};

export default ProductList;
