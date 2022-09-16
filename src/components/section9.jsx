import React, { useState, useRef } from "react";
import "../css/section9.css";
import first1 from "../assets/profile/t1.jpeg";
import second2 from "../assets/profile/t2.jpeg";
import third3 from "../assets/profile/t3.jpeg";
import fourth4 from "../assets/profile/t4.jpeg";
import fifth5 from "../assets/profile/t5.jpeg";
import sixth6 from "../assets/profile/t6.jpeg";
function section9() {
  const arr = [
    {
      src: first1,
      p: "Dynamically whiteboard timely models through bricks-and-clicks e-services. Holisticly predominate resource maximizing users through backend leadership skills. Continually mesh team building strategic theme areas without standards compliant users.",
      ref: useRef(null),
      head: "JACK MOE",
    },
    {
      src: second2,
      p: "Intrinsicly embrace top-line core competencies with real-time metrics. Conveniently reinvent functionalized collaboration. Authoritatively pontificate enabled alignments whereas market positioning",
      ref: useRef(null),
      head: "MARIA DOE",
    },
    {
      src: third3,
      p: "Credibly envisioneer enterprise-wide content before resource maximizing leadership skills. Progressively visualize professional value via distributed value. Efficiently restore adaptive bandwidth through best-of-breed plug-and-play ROI and excellent platforms",
      ref: useRef(null),
      head: "SONI MARVEL",
    },
    {
      src: fourth4,
      p: "Compellingly e-enable distributed deliverables whereas customer directed vortals. Objectively pontificate leveraged collaboration and idea-sharing without bleeding-edge resources. Professionally administrate business web services without future-proof catalysts for change. Energistically engage diverse vortals and prospective methods of empowerment. Competently pontificate diverse",
      ref: useRef(null),
      head: "JOTAS DOE",
    },
    {
      src: fifth5,
      p: "Enthusiastically syndicate inexpensive services and 24/7 bandwidth. Phosfluorescently develop cooperative content vis-a-vis best-of-breed alignments. Competently innovate orthogonal e-tailers via interactive core competencies. Uniquely implement transparent",
      ref: useRef(null),
      head: "VAL DRACA",
    },
    {
      src: sixth6,
      p: "Rapidiously integrate multimedia based resources whereas low-risk high-yield technologies. Proactively innovate market positioning products without B2B products. Progressively recaptiualize",
      ref: useRef(null),
      head: "MARIA LUCAS",
    },
  ];
  const [p, setp] = useState(
    "Dynamically whiteboard timely models through bricks-and-clicks e-services. Holisticly predominate resource maximizing users through backend leadership skills. Continually mesh team building strategic theme areas without standards compliant users."
  );
  const [h, seth] = useState("JACK MOE");
  const [st, setst] = useState(true);
  return (
    <div className="section9">
      <p>OUR CLIENTS LOVE US</p>
      <div>
        {arr.map((i, ind) => (
          <img
            ref={i.ref}
            className="circle"
            src={i.src}
            loading="lazy"
            key={ind}
            onMouseOver={() => {
              setp(i.p);
              setst(false);
              document
                .querySelectorAll(".circle")
                .forEach((i) => (i.style.opacity = "0.5"));
              i.ref.current.style.opacity = "1";
              seth(i.head);
            }}
            onMouseLeave={() => {
              !st
                ? (i.ref.current.style.opacity = "1")
                : (i.ref.current.style.opacity = "0.5");
            }}
          />
        ))}
        <p>{p}</p>
      </div>
      <p className="head12">{h}</p>
    </div>
  );
}
export default section9;
