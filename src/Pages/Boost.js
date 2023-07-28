import React from "react";
import "../CSS/Boost.css";
import desk from "../images/bg-boost-desktop.svg";
import mob from "../images/bg-boost-mobile.svg";

const Boost = () => {
  return (
    <>
      <div className="tip">
        <h2>Boost your links today</h2>
        <button id="button">Get Started</button>
      </div>
      <section className="boost">
        <picture>
          <source media="(min-width: 768px)" srcSet={desk} />
          <img src={mob} alt="boost" />
        </picture>
      </section>
    </>
  );
};

export default Boost;
