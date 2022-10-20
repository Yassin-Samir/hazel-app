import React from "react";
import hazel from "../assets/logo.png";
import "../css/footer.css";
function footer() {
  return (
    <div className="footer">
      <img src={hazel} onClick={() => window.scrollTo({ top: 0 })} />
    </div>
  );
}

export default footer;
