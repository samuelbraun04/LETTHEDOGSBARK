import React, { useState } from 'react';
import './CheckoutPage.css';
import ConfirmationPage from './confirmation';
import CartPage from './cart'

const CheckoutPage = ({ totalCost }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    totalCost: totalCost,
    email: '',
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    province: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleBeginCheckout = () => {
    if(validateForm()) {
      setIsCheckingOut(true);
    }
  };

  const validateForm = () => {
    const emailPattern = /\S+@\S+\.\S+/;
    const fullNamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const cvvPattern = /^\d{3}$/;
    const postalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;

    for (let field in formData) {
      if (formData[field] === '') {
        alert("Please ensure all fields are filled out.");
        return false;
      }
    }

    if(!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if(!fullNamePattern.test(formData.fullName)) {
      alert("Please enter a valid full name.");
      return false;
    }

    if(!cardNumberPattern.test(formData.cardNumber)) {
      alert("Please enter a valid 16-digit credit card number without spaces or hyphens.");
      return false;
    }

    if(!expiryDatePattern.test(formData.expiryDate)) {
      alert("Please enter a valid expiry date in the format MM/YYYY.");
      return false;
    }

    if(!cvvPattern.test(formData.cvv)) {
      alert("Please enter a valid 3-digit CVV code.");
      return false;
    }

    if(!postalCodePattern.test(formData.postalCode)) {
      alert("Please enter a valid postal code in the format A5A 5A5.");
      return false;
    }

    return true;
  };

  return (
    <>
      {isCheckingOut ? (
        <ConfirmationPage formData={getInputValues()} />
      ) : (
        <div className="checkout-page">
          <h2>Checkout</h2>
          <div className="info-container">
            <div className="customer-info">
              <h3>Customer Information</h3>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email (ex: johnsmith@gmail.com)" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name (ex: John Smith)" name="fullName" value={formData.fullName} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" placeholder="Enter your address (ex: 1234 Hemmingsworth Drive)" name="address" value={formData.address} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>City</label>
                <input type="text" placeholder="Enter your city (ex: Oshawa)" name="city" value={formData.city} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Postal Code</label>
                <input type="text" placeholder="Enter your postal code (ex: A5N 5A5)" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Province</label>
                <input type="text" placeholder="Enter your province (ex: Ontario)" name="province" value={formData.province} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Country</label>
                <input type="text" placeholder="Enter your country (ex: Canada)" name="country" value={formData.country} onChange={handleInputChange} />
              </div>
            </div>
            <div className="payment-info">
              <h3>Payment Information</h3>
              <div className="input-group">
                <label>Credit Card Number</label>
                <input type="text" placeholder="Enter credit card number (16 digits. no spaces. ex: 1234567891011123)" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="Enter expiry date (MM/YYYY. ex: 07/2023)" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>CVV Code</label>
                <input type="text" placeholder="Enter CVV code (ex: 123)" name="cvv" value={formData.cvv} onChange={handleInputChange} />
              </div>
              
            </div>
            <div className="order-summary">
              <p className="cost">Total Cost: ${totalCost}</p>
              <img src="./src/assets/checkout.png" alt="Let The Dogs Bark logo" className="chickenFingers" />
            </div>
          </div>
          <button className="pay-now-button" onClick={handleBeginCheckout}>PAY NOW</button>
        </div>
      )}
    </>

    
  );

  
};

export default CheckoutPage;
