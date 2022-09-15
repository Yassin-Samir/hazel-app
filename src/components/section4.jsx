//@ts-nocheck
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../css/section4.css";
const Section4 = () => {
  const barsObserver = new IntersectionObserver(
    (i) => {
      i.forEach((i) => {
        if (i.isIntersecting) {
          setTimeout(() => (i.target.style.width = i.target.dataset.arr), 100);
        }
      });
    },
    { threshold: 0 }
  );
  useEffect(() =>
    document.querySelectorAll(".last").forEach((i) => barsObserver.observe(i))
  );
  return (
    <motion.div
      className="section4"
      initial={{
        x: "50vw",
      }}
      whileInView={{
        x: "0",
        transition: {
          type: "spring",
          stiffness: 100,
        },
      }}
    >
      <p>
        "WHAT SEPARATES DESIGN FROM ART IS THAT DESIGN IS MEANT TO BE…
        FUNCTIONAL "
      </p>
      <div className="grid">
        <div className="children">
          <p>OUR VALUES</p>
          <p>
            Uniquely create competitive e-markets for backward-compatible
            technologies. Authoritatively morph efficient networks via
            bleeding-edge results. Completely drive 24/365 e-markets via quality
            e-business. Progressively plagiarize enterprise strategic theme
            areas with ubiquitous sources. Enthusiastically drive team driven
            processes rather than e-tailers.
          </p>
        </div>
        <div className="children">
          <p>OUR MISSION</p>
          <p>
            Conveniently maximize standardized web-readiness without integrated
            products. Competently productivate fully researched results via
            empowered e-commerce. Quickly repurpose cross-unit methodologies for
            leading-edge materials. Monotonectally enhance team driven human
            capital whereas worldwide
          </p>
        </div>
        <div className="children">
          <p>OUR SKILLS</p>
          <div>
            <span>DEVELOPMENT</span>
            <span className="percent first">95%</span>
            <div className="line first1"></div>
            <div className="line last nine" data-arr="95%"></div>
            <span>DESIGN</span>
            <span className="percent second">85%</span>
            <div className="line first1 seven1"></div>
            <div className="line last eight" data-arr="85%"></div>
            <span>MARKETING</span>
            <span className="percent third">70%</span>
            <div className="line first1 six"></div>
            <div className="line last seven" data-arr="70%"></div>
            <span>CONSULTING</span>
            <span className="percent fourth">65%</span>
            <div className="line first1 five"></div>
            <div className="line last six1" data-arr="65%"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Section4;
