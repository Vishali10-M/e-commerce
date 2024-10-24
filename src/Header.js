import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="nav-links-head">
        <Link to="/">
        <img src={logo} alt='logo' />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/products">MEN</Link>
        <Link to="/products">WOMEN</Link>
        <Link to="/products">KIDS</Link>
        <Link to="/products">BEAUTY</Link>
        <Link to="/products">OTHERS</Link>
      </nav>
      <div className="icons">
        <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
        <span className="icon"><i className="fas fa-search"></i></span>
        <span className="icon"><i className="fas fa-user"></i></span>
        <span className="icon"><i className="fas fa-heart"></i></span>
        <Link to="/cart" className="cart-link">
        <span className="icon">
          <i className="fas fa-shopping-bag"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
