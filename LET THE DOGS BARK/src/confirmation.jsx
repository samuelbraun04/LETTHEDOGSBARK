import React from 'react';
import './Confirmation.css';

const ConfirmationPage = ({ formData }) => {
  return (
    <div className="confirmation-page">
      <h2>ORDER CONFIRMED</h2>
      <div className="info-container">
        <div className="area1">
          <p>Total Cost: ${formData.totalCostTwo}</p>
          <p>Email: {formData.email}</p>
          <p>Full Name: {formData.fullName}</p>
          <p>Address: {formData.address}</p>
        </div>
        <div className="area2">
          <p>City: {formData.city}</p>
          <p>Postal Code: {formData.postalCode}</p>
          <p>Province: {formData.province}</p>
          <p>Country: {formData.country}</p>
        </div>
      </div>
      <p>Track your order here:    <a href="https://track.machool.com/track?tn=7389578385">Track Order</a> </p>
      <p>Link has also been sent to your email.</p>
      <img src="./src/assets/confirm.png" alt="Your image description" className="thatImage" />
    </div>
  );
};

export default ConfirmationPage;
