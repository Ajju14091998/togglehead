import React from "react";
import "./Homesection2.css";
import CalendarIcon from "../../assets/images/box.svg";

const HomepageSection2 = () => {
  return (
    <section className="home-section2">
      <div className="container">
        <div className="left-panel">
          <h2>
            Upcoming <br /> Examinations
          </h2>
          <p>
            Enquire about the examination & <br /> register for the exams
          </p>
        </div>

        <div className="exam-list">
          <div className="exam-item">
            <img src={CalendarIcon} alt="calendar" className="calendar-icon" />
            <div className="exam-text">
              <h4>02th October 2014</h4>
              <p>Level 1 exam</p>
            </div>
          </div>

          <div className="exam-item">
            <img src={CalendarIcon} alt="calendar" className="calendar-icon" />
            <div className="exam-text">
              <h4>Nov-Dec 2016</h4>
              <p>
                Level 2 <br /> Lorem Ipsum <br /> Lorem Ipsum
              </p>
            </div>
          </div>

          <div className="exam-item">
            <img src={CalendarIcon} alt="calendar" className="calendar-icon" />
            <div className="exam-text">
              <h4>Ongoing this year</h4>
              <p>Level 3 (Grad)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection2;
