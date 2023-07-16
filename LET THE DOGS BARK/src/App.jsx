import React, { useState } from 'react';
import './App.css';
import Tees from './tees';
import Sweatshirts from './sweatshirts';
import Sweatpants from './sweatpants';
import Jeans from './jeans';
import VotingChatPage from './upcoming';
import About from './about';
import CartPage from './cart';
import FAQ from './FAQ';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCurrentPage('cart');
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigation} />
      {
        {
          'home': <MainContent onNavigate={handleNavigation} />,
          'tees': <Tees onAddToCart={handleAddToCart} />,
          'sweatpants': <Sweatpants onAddToCart={handleAddToCart} />,
          'sweatshirts': <Sweatshirts onAddToCart={handleAddToCart} />,
          'jeans': <Jeans onAddToCart={handleAddToCart} />,
          'upcoming': <VotingChatPage />,
          'about': <About />,
          'faq': <FAQ />,
          'cart': <CartPage cartItems={cartItems} />,
        }[currentPage]
      }
      <Footer />
    </div>
  );
}

function Navbar({ onNavigate }) {
  return (
    <nav>
      <div className="navLeft">
        <button className="navBtn" onClick={() => onNavigate('home')}>HOME</button>
        <div className="dropdown">
          <button className="navBtn dropbtn">SHOP <text className='smaller'>⮟</text></button>
          <div className="dropdown-content">
            <button onClick={() => onNavigate('tees')}>Tees</button>
            <button onClick={() => onNavigate('sweatpants')}>Sweatpants</button>
            <button onClick={() => onNavigate('sweatshirts')}>Sweatshirts</button>
            <button onClick={() => onNavigate('jeans')}>Jeans</button>
          </div>
        </div>
        <button className="navBtn" onClick={() => onNavigate('upcoming')}>UPCOMING</button>
        <button className="navBtn" onClick={() => onNavigate('about')}>ABOUT</button>
        <button className="navBtn" onClick={() => onNavigate('faq')}>FAQ</button>
      </div>
      <button className="cartBtn" onClick={() => onNavigate('cart')}>
        <img src="./src/assets/shopping-cart.png" alt="Cart icon" className="cartIcon" />
        CART
      </button>
    </nav>
  );
}

function MainContent({ onNavigate }) {
  return (
    <main className="mainContent">
      <div className="images">
        <div className="imageContainer" onClick={() => onNavigate('tees')}>
          <img src="./src/assets/sdhmgoepprod (2).png" alt="Product 1" className="productImage" />
        </div>
        <div className="imageContainer" onClick={() => onNavigate('tees')}>
          <img src="./src/assets/sghmgoepprod (1).png" alt="Product 2" className="productImage2" />
        </div>
      </div>
       <button className="mainShopButton" onClick={() => onNavigate('tees')}><text> <strong>SHOP CURRENT DROPS</strong></text></button>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/yourpage">
            <img src="./src/assets/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/yourhandle">
            <img src="./src/assets/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/yourhandle">
            <img src="./src/assets/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile">
            <img src="./src/assets/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://www.pinterest.com/yourprofile">
            <img src="./src/assets/pinterest-icon.png" alt="Pinterest" />
          </a>
          <a href="https://www.youtube.com/channel/yourchannel">
            <img src="./src/assets/youtube-icon.png" alt="Youtube" />
          </a>
          <a href="https://www.snapchat.com/add/yourprofile">
            <img src="./src/assets/snapchat-icon.png" alt="Snapchat" />
          </a>
          <a href="https://www.tiktok.com/@yourprofile">
            <img src="./src/assets/tiktok-icon.png" alt="TikTok" />
          </a>
                    
        </div>
        <div className="center-text">
          <p>letthedogsbark@gmail.com | 613-672-0534 (9AM - 5PM EST on workdays)</p>
          {/* <p>Privacy Policy</p> */}
        </div>
        <div className='legal'>
        <p>© 2023 LET THE DOGS BARK. All Rights Reserved. </p>
        </div>
        
      </div>
    </footer>
  );
}

export default App;
