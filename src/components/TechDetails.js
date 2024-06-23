import React from "react";
import "aos/dist/aos.css";

const TechDetails = ({ techName, techImgPath }) => {
  return (
    <div class="tech" data-aos="fade-left" data-aos-delay="100">
      <div className="tech-detail">
        <img class="tech-icon" src={techImgPath} alt={techName} />
        <span class="tech-label">{techName}</span>
      </div>
    </div>
  );
};

export default TechDetails;
