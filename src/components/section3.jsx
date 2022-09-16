//@ts-nocheck
import React from "react";
import "../css/section3.css";
import Haze from "../assets/mockup2.png";
const section3 = () => {
  return (
    <div className="section">
      <div>
        <p className="hard">WE WORK HARD</p>
        <div className="con">
          <p>
            Intrinsicly engineer one-to-one partnerships with error-free
            customer service. Competently optimize goal-oriented technology via
            low-risk high-yield materials engage.
          </p>
          <p>
            Energistically develop client-centered web services without focused
            data. Conveniently syndicate leveraged scenarios.
          </p>
        </div>
        <button>OUTSTANDING FEATURES</button>
      </div>
      <img src={Haze} loading="lazy" />
    </div>
  );
};

export default section3;
