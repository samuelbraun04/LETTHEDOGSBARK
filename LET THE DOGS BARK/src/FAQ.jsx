import React from 'react';
import './FAQ.css';

const FAQPage = () => {
  return (
    <div>
      <h2>FAQ (Frequently Asked Questions)</h2>
      <div className='stuff'>
      <div>
        <h3>1. What is your return policy?</h3>
        <p>We accept returns within 30 days of the delivery date. Items must be in new and unworn condition with tags attached. Please note that customers are responsible for return shipping costs.</p>
      </div>
      <div>
        <h3>2. How does shipping work?</h3>
        <p>We offer free standard shipping on orders over $50. For orders under $50, a flat rate of $5 is applied. Expedited shipping is available at an additional cost. Please allow 1-2 business days for processing and 5-7 business days for standard shipping.</p>
      </div>
      <div>
        <h3>3. Do you offer international shipping?</h3>
        <p>Yes, we ship worldwide! International shipping costs vary based on the destination and will be calculated at checkout.</p>
      </div>
      <div>
        <h3>4. How can I track my order?</h3>
        <p>After your order is shipped, you'll receive a shipping confirmation email with a tracking number.</p>
      </div>
      <div>
        <h3>5. Can I modify or cancel my order?</h3>
        <p>Orders can be modified or cancelled within 1 hour of placing the order. Please contact our customer service immediately if you need to modify or cancel your order.</p>
      </div>
      </div>

    </div>
  );
}

export default FAQPage;
