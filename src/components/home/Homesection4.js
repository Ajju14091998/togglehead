import React from "react";
import "./Homesection4.css";

const stats = [
  {
    topText: "Lorem ipsum",
    number: "123+",
    label: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    topText: "Lorem ipsum",
    number: "12+",
    label: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    topText: "Lorem ipsum",
    number: "12+",
    label: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    topText: "Lorem ipsum",
    number: "123",
    label: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
];

const HomepageSection4 = () => {
  return (
    <section className="homepage-section4">
      <div className="container">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <p className="top-text">{item.topText}</p>
            <h2 className="number">{item.number}</h2>
            <h4 className="label">{item.label}</h4>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageSection4;
