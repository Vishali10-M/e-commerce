import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart, handleIncrease, handleDecrease }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.title}</p>
                  <p>
                    <strong>Price:</strong> ${item.price}
                  </p>
                  <div className="cart-actions">
                    <button onClick={() => handleDecrease(item)} className="cart-btn">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)} className="cart-btn">+</button>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
