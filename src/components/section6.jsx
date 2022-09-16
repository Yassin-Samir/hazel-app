import React from "react";
import { motion } from "framer-motion";
import "../css/section6.css";
const section6 = () => {
  return (
    <motion.div
      className="father"
      initial={{
        x: "-50vw",
      }}
      whileInView={{
        x: "0",
        transition: {
          type: "keyframes",
        },
      }}
    >
      <p>OUR SERVICES</p>
      <div className="iconss">
        <div className="child">
          <span className="material-symbols-outlined">palette</span>
          <p>UNIQUE DESIGN</p>
          <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit</p>
          <p>amet consect.</p>
        </div>
        <div className="child">
          <span className="material-symbols-outlined">palette</span>
          <p>UNIQUE DESIGN</p>
          <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit</p>
          <p>amet consect.</p>
        </div>
        <div className="child">
          <span className="material-symbols-outlined">slideshow</span>
          <p>UNIQUE DESIGN</p>
          <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit</p>
          <p>amet consect.</p>
        </div>
        <div className="child">
          <span className="material-symbols-outlined">favorite_border</span>
          <p>UNIQUE DESIGN</p>
          <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit</p>
          <p>amet consect.</p>
        </div>
        <div className="child">
          <span className="material-symbols-outlined">shopping_bag</span>
          <p>UNIQUE DESIGN</p>
          <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit</p>
          <p>amet consect.</p>
        </div>
        <div className="child">
          <span className="material-symbols-outlined">star_outline</span>
          <p>UNIQUE DESIGN</p>
          <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit</p>
          <p>amet consect.</p>
        </div>
      </div>
    </motion.div>
  );
};

export { section6 as Section6 };
