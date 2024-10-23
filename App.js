import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const handleIncrease = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrease = (product) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: Math.max(item.quantity - 1, 1) }; 
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
