// @ts-nocheck
import React, { useEffect, Suspense } from "react";
import Nav from "./components/nav";
import Section from "./components/section";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import { Section5 } from "./components/section5";
import { Section6 } from "./components/section6";
import Section7 from "./components/section7";
import { Section8 } from "./components/section8";
import Section9 from "./components/section9";
import Footer from "./components/footer";
export default function App() {
  useEffect(() => {
    const scroll = () => {
      const nav = document.querySelector("nav");
      const img = document.querySelector("nav img");
      if (window.pageYOffset >= 25) {
        nav.style.backgroundColor = "black";
        nav.style.height = "75px";
        nav.style.color = "white";
        img.style.color = "white";
        document.querySelector("nav img:last-of-type").style.display = "block";
        document.querySelector("nav img:first-of-type").style.display = "none";
      } else if (window.pageYOffset <= 25) {
        nav.style.backgroundColor = "transparent";
        nav.style.height = "85px";
        nav.style.color = "gray";
        document.querySelector("nav img:first-of-type").style.display = "block";
        document.querySelector("nav img:last-of-type").style.display = "none";
      }
    };
    window.addEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <Nav />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  );
}
