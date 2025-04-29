import React from "react";
import "./Homesection6.css";
import HandImage from "../../assets/images/hand.png"; // तुम्ही दिलेली image

const HomepageSection6 = () => {
  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-content">
          <h3>Subscribe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="email-input"
            />
            <button className="subscribe-button">
              Subscribe Now <span>▶</span>
            </button>
          </div>
        </div>
        <div className="subscribe-image">
          <img src={HandImage} alt="Subscribe Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HomepageSection6;
