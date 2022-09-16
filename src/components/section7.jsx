import React from "react";
import { motion } from "framer-motion";
import "../css/section7.css";
const Section7 = () => {
  return (
    <motion.div
      className="section7"
      initial={{
        x: "50vw",
      }}
      whileInView={{
        x: "0",
        transition: {
          type: "keyframes",
        },
      }}
    >
      <p>INTERESTED ON OUR SERVICES?</p>
      <button>PURCHASE HAZEL</button>
    </motion.div>
  );
};

export default Section7;
