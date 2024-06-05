import React, { useState } from 'react';
import {Button, Input } from 'reactstrap';

const CartPage = ({ cartItems, removeFromCart,updateQuantity }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckout = () => {
    setShowMessage(true);
  };

  return (
    <div className="cart-page container">
      <h2 className="my-4">NovelNest</h2>
      <ul className="list-group cart-items">

        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
            <span>{item.name} - ${item.price}</span>
            <Input type="number" value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value))} min="1" className="mr-2" style={{ width: '70px' }} />
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleCheckout}>Checkout</button>
      {showMessage && <p className="mt-3">Thank you for your purchase!</p>}
    </div>
  );
};

export default CartPage;