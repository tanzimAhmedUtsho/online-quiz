import React from "react";
import Img from "../../Images/quiz.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <img className="bannerImg" src={Img} alt="" />
    </div>
  );
};

export default Banner;
