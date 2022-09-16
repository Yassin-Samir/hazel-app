// @ts-nocheck
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../css/section5.css";
import pic from "../assets/1.jpg";
const section5 = () => {
  const intersection = new IntersectionObserver(
    (i) => {
      i.forEach((i) => {
        if (i.isIntersecting) {
          let m = 0;
          const k = setInterval(() => {
            if (m > i.target.dataset.set) {
              clearInterval(k);
            } else i.target.textContent = m++;
          }, 1);
        }
      });
    },
    { threshold: 0 }
  );
  useEffect(
    () =>
      document
        .querySelectorAll(".inter")
        .forEach((i) => intersection.observe(i)),
    []
  );
  return (
    <>
      <motion.div
        className="section5"
        initial={{
          x: "90vw",
        }}
        whileInView={{
          x: "0",
          transition: {
            type: "keyframes",
          },
        }}
      >
        <p>AGENCY ACHIEVEMENTS</p>
        <div className="icons">
          <div className="icon">
            <span className="material-symbols-outlined">timer</span>
            <p className="inter" data-set="125">
              0
            </p>
            <p>HOURS OF WORK</p>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">rocket_launch</span>
            <p className="inter" data-set="150">
              0
            </p>
            <p>FINISHED WORKS</p>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">group</span>
            <p className="inter" data-set="100">
              0
            </p>
            <p>CLIENT</p>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined">share</span>
            <p className="inter" data-set="95">
              0
            </p>
            <p>SOCIAL FOLLOWERS</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { section5 as Section5 };
