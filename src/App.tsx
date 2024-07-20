import React from 'react';
import './App.css';
import logo from "./images/Logo.png";
import star from "./images/Star 1.png";
import twitter from "./images/Vector.png";
import instagram from "./images/Instagram icon.png";
import tiktok from "./images/Tictok icon.png";
import linkedin from "./images/Linkedin icon.png";
import social from "./images/Social Icons.png";


function App() {
  return (
    <div className="App">
      <header>
      <img src={logo} alt="image" />
      <h1>Boilerplate.</h1>
      </header>

      <div className= "sections">
        <h1>
          Stay Ahead: Exclusive Offer on Cutting-Edge Tech!
        </h1>
        <div className="content">
          <h3>
            Hi John Doe,
          </h3>
          <p>
            We’re excited to bring you an exclusive offer that will keep you ahead of the curve! 
            At Boilerplate, we pride ourselves on providing the latest and greatest in technology, and 
            this time, we have something truly special for you.
          </p>
        </div>

        <div className="Content">
          <h3>What’s in Store</h3>
          <div className="contents">
            <img src={star} alt="image"/>
            <p><span>The Ultimate Smartwatch:</span> Experience the future with this state-of-the-art device, designed to enhance your daily life.</p>
          </div>

          <div className="contents">
            <img src={star} alt="image"/>
            <p><span>The High-Performance Laptop:</span> A perfect blend of innovation and performance, ideal for both work and play.
            </p>
          </div>

          <div className="contents">
            <img src={star} alt="image"/>
            <p><span>The Wireless Noise-Cancelling Headphones:</span>Sleek, powerful, and user-friendly, this product is a must-have for any tech enthusiast.
            </p>
          </div>
        </div>
      </div>

      <div className="third-section">
        <h3>Exclusive Savings</h3>
        <p>For a limited time, enjoy 25% off your purchase of any of these groundbreaking products. Simply use the code TECHSAVVY at checkout to unlock your savings.
        </p>
      </div>

      <div className="fourth-section">
        <h3>Why Choose Boilerplate?</h3>
        <div className="contents">
          <img src={star} alt="image"/>
          <p><span>Cutting-Edge Technology:</span>We source the most innovative products to ensure you have access to the best.
          </p>
        </div>

        <div className="contents">
          <img src={star} alt="image"/>
          <p><span>Unmatched Quality:</span> Our products undergo rigorous testing to meet the highest standards.
          </p>
        </div>

        <div className="contents">
          <img src={star} alt="image"/>
          <p><span>Exceptional Customer Support:</span> Our team is always here to assist you with any questions or concerns. 
          </p>
        </div>
        <div className="blog">
          <p>Follow <a href="Blog"> our blog</a> for more information.</p>
        </div>
      </div>

      <div className="last-section">
        <h3>How To Redeem Your Offer</h3>
        <nav>
          <ol>
            <li>Visit our website at <a href="link">wwwboilerplate.com</a></li>
            <li>Browse our selection of cutting-edge tech.</li>
            <li>Add your desired products to the cart.</li>
            <li>Enter the code TECHSAVVY at checkout to apply your discount. Don’t miss out on this opportunity to upgrade your tech and stay ahead of the game. This exclusive offer is valid until 30th July, so act fast!</li>
          </ol>  
        </nav>   
        <p>Thank you for being a valued customer. We look forward to helping you enhance your tech experience. Should you have any questions or concerns during this process, do not hesitate to reach out to us via email at<a href="link"> support@boilerplate.com</a></p>

        <div className="button">
          <button className="bott"><a href="a">Learn More</a></button>
        </div>

        <h2>Regards,</h2>
        <h4>Boilerplate</h4>
      </div>

      <div className="footer">
        <div className="icons">
          <div className="icon">
            <img src={linkedin} alt="image" />
          </div>

          <div className="icon">
            <img src={instagram} alt="image" />
          </div>

          <div className="icon">
            <img src={tiktok} alt="image" />
          </div>

          <div className="icon">
            <img src={social} alt="image" />
          </div>

          <div className="icon">
            <img src={twitter} alt="image" />
          </div>
        </div>

        <h3>Thank you for choosing Boilerplate.com. Need help? <a href="liks">Contact  our customer support</a></h3>

        <p>You are receiving this email because you signed up at Boilerplate.com Want to change how you receive these emails?
        </p>
        <h5>You can <a href="a">update your preferences</a> or <a href="ref">unsubscribe from this list.</a></h5>
      </div>
    </div>

  
  );
}

export default App;
