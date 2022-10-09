// @ts-nocheck
import React, { useEffect } from "react";
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
  const [state, setState] = React.useState(false);
  const [pageYOffset, setPageYOffset] = React.useState(window.pageYOffset);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setPageYOffset(window.pageYOffset);
      },
      { once: true }
    );
    if (pageYOffset >= 25) setState(true);
    else setState(false);
  }, [pageYOffset]);
  return (
    <>
      <Nav state={state} />
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
