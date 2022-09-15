import React from "react";
import { motion } from "framer-motion";
import "../css/section2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faGift,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
const section2 = () => {
  return (
    <div className="parent">
      <div className="flex">
        <FontAwesomeIcon icon={faPenRuler}></FontAwesomeIcon>
        <p className="head">CLEAN DESIGN</p>
        <p className="main">Professionally repurpose premium rather than</p>
        <p>magnetic bandwidth.</p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
        <p className="head">PREMIUM RESOURCES</p>
        <p className="main">Professionally repurpose premium rather than</p>
        <p>magnetic bandwidth.</p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
        <p className="head">RESPONSIVE LAYOUT</p>
        <p className="main">Professionally repurpose premium rather than</p>
        <p>magnetic bandwidth.</p>
      </div>
    </div>
  );
};

export default section2;
