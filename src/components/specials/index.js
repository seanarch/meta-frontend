import React from "react";
import "./style.css";
import SpecialsCard from "../scards";

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h1>This Week's Specials</h1>
        <div className="btn-container">
          <button className="btn btn-menu">Online Menu</button>
        </div>
      </div>
      <SpecialsCard />
    </div>
  );
};

export default Specials;
