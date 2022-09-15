//@ts-nocheck
import React, { useState } from "react";
import Mac from "../assets/mac.jpg";
import Mac1 from "../assets/mac1.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../css/section.css";
const section = () => {
  const slides = [Mac, Mac1];
  const [pos, setpos] = useState(0);
  const variant = {
    initial: {
      scale: 0,
      y: "50vh",
    },
    animate: {
      scale: 1,
      y: "0",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  return (
    <section>
      <span
        className="material-symbols-outlined left"
        onClick={() => setpos(pos > 0 ? 0 : 1)}
      >
        arrow_back_ios
      </span>
      <div className="row">
        {slides.map((i, ind) => (
          <motion.div
            className="container"
            key={ind}
            initial={{ display: "none" }}
            animate={{
              display: ind === pos ? "block" : "none",
              x: `${(ind - pos) * 60}vw`,
            }}
          >
            <img src={i} loading="eager" /> 
          </motion.div>
        ))}
      </div>
      <div className="cen-btns">
        <motion.p variants={variant} initial="initial" animate="animate">
          <span>MADE</span>
          <span>WITH</span>
          <span>LOVE</span>
          <span>TREETHEMES</span>
        </motion.p>
        <motion.p
          className="powr"
          variants={variant}
          initial="initial"
          animate="animate"
        >
          <span>CLEAN</span>
          <span>POWER</span>
          <span>THEME</span>
        </motion.p>
        <motion.div
          className="btns"
          variants={variant}
          initial="initial"
          animate="animate"
        >
          <button>ABOUT US</button>
          <span>or</span>
          <button>CONTACT</button>
        </motion.div>
      </div>
      <span
        className="material-symbols-outlined right"
        onClick={() => setpos(pos > 0 ? 0 : 1)}
      >
        arrow_back_ios
      </span>
    </section>
  );
};
export default section;
