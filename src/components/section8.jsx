import React from "react";
import "../css/section8.css";
import first from "../assets/grid/1.jpg";
import second from "../assets/grid/2.jpg";
import third from "../assets/grid/3.jpg";
import fourth from "../assets/grid/4.jpg";
import fifth from "../assets/grid/5.jpg";
import sixth from "../assets/grid/6.jpg";
const section8 = () => {
  const arr = [first, second, third, fourth, fifth, sixth];
  return (
    <div className="section8">
      <p>OUR LATEST WORK</p>
      <div className="grid-sys">
        {arr.map((i, ind) => {
          return (
            <div key={ind} target="_blank">
              <img src={i} loading="lazy" />
              <p className="header">Clean display</p>
              <p className="foot">gamed</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default section8;
