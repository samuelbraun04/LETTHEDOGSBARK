import React, { useState } from 'react';
import './CartPage.css';
import CheckoutPage from './checkout';

const CartPage = ({ cartItems }) => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleShippingAddressChange = (event) => {
    setShippingAddress(event.target.value);
    calculateShippingCost(event.target.value);
  };

  const calculateShippingCost = (address) => {
    let cost = 10;
    setShippingCost(cost);
  };

  const getTotalCost = () => {
    const totalItemsCost = cartItems.reduce((sum, item) => sum + item.price, 0);
    return totalItemsCost + shippingCost;
  };

  const handleBeginCheckout = () => {
    if (!shippingAddress) {
      window.alert('Please enter a shipping address before proceeding to checkout.');
    } else {
      setIsCheckingOut(true);
    }
  };

  return (
    <div className="cart-page">
      {isCheckingOut ? (
        <CheckoutPage cartItems={cartItems} totalCost={getTotalCost()} shippingAddress={shippingAddress} />
      ) : (
        <>
          <div className="cart-items">
            <h2 className="centered-text">Cart</h2>
            {cartItems.length > 0 ? cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <p>Size: {item.size}</p>
                </div>
                <img className="myImage" src={item.photo} alt={item.name} />
              </div>
            )) : (
              <h3 className="centered-text">The cart is currently empty.</h3>
            )}
          </div>
          <div className="cart-summary">
            <h2>Summary</h2>
            <div className="shipping-section">
              <h3>Shipping Address</h3>
              <input
                type="text"
                value={shippingAddress}
                onChange={handleShippingAddressChange}
                placeholder="Enter your shipping address"
              />
              <p>Shipping Cost: ${shippingCost}</p>
            </div>
            <div className="total-cost">
              <h3>Total Cost</h3>
              <p>${getTotalCost()}</p>
            </div>
            <button 
              className="checkout-button" 
              onClick={handleBeginCheckout} 
            >
              Begin Checkout
            </button>
            <div className="cart-image-section">
              <img src="./src/assets/cart.png" className="indicator" alt="Cart" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
