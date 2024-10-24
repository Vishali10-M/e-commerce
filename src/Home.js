import React from 'react';
import { Link } from 'react-router-dom';
import home from '../src/Home.jpg';
import cardDetail from './cardDetail.jpg';
import comingSoon from './comingSoon.png';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-img">
                <Link to="/products">
                    <img style={{ width: '100%' }} src={home} alt='home' />
                </Link>
            </div>


            <div className="mt-4">
                <div className="card" style={{ width: '100%', padding:'20px'}}>
                    <h1>Welcome to the E-Commerce Store</h1>
                    <p>Explore the latest products and add them to your cart!</p>
                    <div className="shop-now-btn-main">
                    <Link to="/products" className="shop-now-btn">
                        Shop Now
                    </Link>
                    </div>
                </div>
            </div>
            <div className='cardDetail'>
                <img src={cardDetail} alt='cardDetail'/>
            </div>
            <div className='comingSoon'>
                <img src={comingSoon} alt='comingSoon'/>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Home;
