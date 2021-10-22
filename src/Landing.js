import React from "react";
import "./Landing.css";
import Spinner from "./Spinner.js";



// import Randomizer from "./Randomizer.js";

class Landing extends React.Component {
  render() {
    return (
      <>
        <h1 id="title">Villanous Randomizer!</h1>
        {/* <Randomizer /> */}
        <Spinner />
      </>
    );
  }
}
export default Landing;
