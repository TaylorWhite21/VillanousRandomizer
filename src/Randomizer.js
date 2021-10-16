import React from "react";
import villiansData from "./data.json";

import Spinner from "./Spinner.js";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// import hook from "./img/hook.jpg";
// import jafar from "./img/jafar.jpg";
// import john from "./img/john.jpg";
// import maleficent from "./img/maleficent.jpg";
// import queenofhearts from "./img/queenofhearts.jpg";
// import ursula from "./img/ursula.jpg";

// const villianPhotos = [
//   {
//     id: 1,
//     src: { hook },
//     title: "Captain Hook",
//     description: "Captain Hook",
//   },
//   {
//     id: 2,
//     src: { jafar },
//     title: "jafar",
//     description: "jafar",
//   },
//   {
//     id: 3,
//     src: { john },
//     title: "john",
//     description: "john",
//   },
//   {
//     id: 4,
//     src: { maleficent },
//     title: "maleficent",
//     description: "maleficent",
//   },
//   {
//     id: 5,
//     src: { queenofhearts },
//     title: "queenofhearts",
//     description: "queenofhearts",
//   },
//   {
//     id: 6,
//     src: { ursula },
//     title: "ursula",
//     description: "ursula",
//   },
// ];

class VillainWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      villiansData: villiansData,
    };
  }

  render() {
    return (
      <>
        <Spinner 
          villiansData={villiansData} 
        />
        <Button variant="primary" id="submit">
          Click Me!
        </Button>
      </>
    );
  }
}

export default VillainWheel;
