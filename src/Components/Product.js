import React, { useState } from 'react';
import { Card, Button, Input } from 'reactstrap';

const Product = ({ id, name, description, price, image, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({ id, image, name, price, quantity: parseInt(quantity) });
      setIsInCart(true);
    } else {
      alert('This item is already in the cart!');
    }
  };

  return (
    <div className="card h-100 product d-flex flex-column justify-content-between">
      <img src={image} className="card-img-top product-img" alt={name} style={{ height: '400px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
      </div>
      <div className="card-footer">
      <Input type="number" value={quantity} onChange={handleQuantityChange} min="1" className="mr-2" style={{ width: '70px', marginRight: '10px' }} />
        <button className="btn btn-primary w-100" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
