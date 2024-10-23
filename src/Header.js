import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
        <Link to="/" className="home-link">
        <h1>E-Commerce Store</h1>
        </Link>
      <Link to="/cart" className="cart-link">
        <FaShoppingCart size={30} />
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
};

export default Header;
