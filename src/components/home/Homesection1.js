import React from "react";
import Slider from "react-slick";
import "./Homesection1.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerImage from "../../assets/images/slider.svg";
import SecondImage from "../../assets/images/slider.svg";

const HomepageSection1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="homepage-section1">
      
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-content">
            <div className="left">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <button className="know-more-btn">Know More ►</button>
            </div>
            <div className="right">
              <img src={BannerImage} alt="Business Illustration" />
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="slide-content">
            <div className="left">
              <h2>Another Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <button className="know-more-btn">Know More ►</button>
            </div>
            <div className="right">
              <img src={SecondImage} alt="Second Illustration" />
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="slide-content">
            <div className="left">
              <h2>Another Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <button className="know-more-btn">Know More ►</button>
            </div>
            <div className="right">
              <img src={SecondImage} alt="Second Illustration" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HomepageSection1;
