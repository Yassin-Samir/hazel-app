import React from "react";
import hazel from "../assets/logo.png";
import "../css/footer.css";
function footer() {
  return (
    <div className="footer">
      <a href="#section">
        <img src={hazel} />
      </a>
    </div>
  );
}

export default footer;
