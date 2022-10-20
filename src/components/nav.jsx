//@ts-nocheck
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import Hazel from "../assets/logo.png";
import Hazel1 from "../assets/logo_light.png";
import "../css/nav.css";
const nav = () => {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    window.onscroll = () => setState(window.pageYOffset >= 25 ? true : false);
  }, []);
  return (
    <nav className={`${state ? `above` : `under`}`}>
      <img src={Hazel} loading="lazy" />
      <img src={Hazel1} loading="lazy" />
      <div className="nav">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PAGES</a>
          </li>
          <li>
            <a href="#">SHORTCODES</a>
          </li>
          <li>
            <a href="#">PORTFOLIOS</a>
          </li>
          <li>
            <a href="#">BLOGS</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default nav;
