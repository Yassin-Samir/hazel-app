// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../css/section5.css";
const section5 = () => {
  const arr = [
    {
      icon: "timer",
      num: 125,
      p: "HOURS OF WORK",
    },
    {
      icon: "rocket_launch",
      num: 150,
      p: "FINISHED WORKS",
    },
    {
      icon: "group",
      num: 100,
      p: "CLIENT",
    },
    {
      icon: "share",
      num: 95,
      p: "SOCIAL FOLLOWERS",
    },
  ];
  return (
    <>
      <div className="section5">
        <p>AGENCY ACHIEVEMENTS</p>
        <div className="icons">
          {arr.map((i, ind) => (
            <Div key={ind} icon={i.icon} num={i.num} p={i.p} />
          ))}
        </div>
      </div>
    </>
  );
};

function Div({ icon, num, p }) {
  const [ref, InView] = useInView({ triggerOnce: true });
  let [number, setNumber] = useState(0);
  useEffect(() => {
    if (InView) {
      const counter = setInterval(() => {
        if (number != num + 1) setNumber(number++);
        else clearInterval(counter);
      }, 10);
    }
  }, [InView]);
  return (
    <div className="icon" ref={ref}>
      <span className="material-symbols-outlined">{icon}</span>
      <p className="inter">{number}</p>
      <p>{p}</p>
    </div>
  );
}
export { section5 as Section5 };
