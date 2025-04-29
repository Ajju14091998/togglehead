import React, { useState } from "react";
import "./Homesection5.css";
import PlusIcon from "../../assets/images/add.svg";
import MinusIcon from "../../assets/images/minus.svg";

const faqData = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer: "",
  },
  {
    question: "Will investors be able to have multiple Common Account Numbers?",
    answer:
      "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer: "",
  },
];

const HomepageSection5 = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="homepage-section4-faq">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className={activeIndex === index ? "active" : ""}>
                {item.question}
              </span>
              <button className="faq-toggle">
                <img
                  src={activeIndex === index ? MinusIcon : PlusIcon}
                  alt="toggle icon"
                />
              </button>
            </div>
            {activeIndex === index && item.answer && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageSection5;
