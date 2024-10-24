import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

  const [quantities, setQuantities] = useState(() => {
    const savedQuantities = JSON.parse(localStorage.getItem('cartQuantities'));
    return savedQuantities ? savedQuantities : cart.map(item => item.quantity);
  });
  useEffect(() => {
    localStorage.setItem('cartQuantities', JSON.stringify(quantities));
  }, [quantities]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(1, newQuantity);
    setQuantities(updatedQuantities);
  };

  const total = cart.reduce((acc, item, index) => acc + item.price * quantities[index], 0);
  const discount = 0;
  const orderTotal = total - discount;

  return (
    <div className="cart-page">
      <h2>My Bag ({cart.length} items)</h2>
      <div className="cart-content">
        <div className="cart-items col-8">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={item.id} className="cart-item">
                  <span className="serial-number">{index + 1}.</span> {/* Display serial number */}
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.title}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <div className="cart-actions">
                      <input
                        type="number"
                        value={quantities[index]}
                        min="1"
                        onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                        style={{ width: '50px', textAlign: 'center' }}
                      />
                      <button onClick={() => handleRemoveFromCart(item.id)} className="remove-btn">Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="order-summary col-4">
          <div className="summary-content">
            <p>Order Details</p>
            <div className="summary-line"><span>Bag Total:</span> ${total.toFixed(2)}</div>
            <div className="summary-line"><span>Bag Discount:</span> - ${discount.toFixed(2)}</div>
            <div className="summary-line"><span>Delivery Fee:</span> Free</div>
            <div className="summary-total"><strong>Order Total:</strong> ${orderTotal.toFixed(2)}</div>
            <div className="apply-coupon">
              <h4>Apply Coupon</h4>
              <div className='coupon-main'>
              <input type="text" placeholder="Enter coupon code" />
              <button className="apply-btn">Apply</button>
              </div>
            </div>
            <button className="proceed-btn">Proceed to Shipping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
