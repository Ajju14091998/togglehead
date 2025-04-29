import React from "react";
import "./Homesection3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowImage from "../../assets/images/arrow.png"; // तुमचं arrow image

const HomepageSection3 = () => {
  return (
    <section className="home-section3">
            <div className="container">
            <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <div className="card">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                sadipscing elitr, sed diam nonumy eirmod
              </p>
              <button className="know-more">
                Know More <img src={ArrowImage} alt="arrow" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
            </div>

    </section>
  );
};

export default HomepageSection3;
