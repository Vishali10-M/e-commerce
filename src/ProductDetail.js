import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products, cart, handleAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); 

  const cartItem = cart.find(item => item.id === parseInt(id));

  const handleButtonClick = () => {
    if (cartItem) {
      navigate('/cart');
    } else {
      handleAddToCart(product);
    }
  };

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, products]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={handleButtonClick}>
          {cartItem ? 'Go to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
