import React from "react";
import "./Landing.css";
import Randomizer from "./Randomizer.js";

class Landing extends React.Component {
  render() {
    return (
      <>
        <h1 id="title">Villanous Randomizer!</h1>
        <Randomizer />
      </>
    );
  }
}
export default Landing;
