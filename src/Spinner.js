import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import villianImages from "./villian_images.js"
import Image from 'react-bootstrap/Image'
// import hook from "./img/hook.jpg";
// import jafar from "./img/jafar.jpg";
// import john from "./img/john.jpg";
// import maleficent from "./img/maleficent.jpg";
// import ursula from "./img/ursula.jpg";
// import queenofhearts from "./img/queenofhearts.jpg";



class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenImage: this.selectRandomItem().src
    };
  }


  selectRandomItem = () => {


    function getRandomInt(max){
      return Math.floor(Math.random() * max);
  
    }
    return villianImages[getRandomInt(villianImages.length)];
  }


  spin(e) {
    e.preventDefault();

    this.setState({ chosenImage: this.selectRandomItem().src});
    console.log(this.state.chosenImage);
  };


  // spinVillains = (e) => {
  //   e.preventDefault();
  //   console.log("villain Data:", this.state.villiansData);
  //   // let mappedVillians = this.state.villiansData.map(
  //   //   ({ id, src, title, description }) => (
  //   //     <img key={id} src={src} title={title} alt={description} />
  //   //   )
  //   // );
  //   // console.log("Mapped Villians: ", mappedVillians);
  //   let randomNumber = this.selectRandomNumber();
  //   console.log("Random Number:", randomNumber)
  //   this.randomVillian = this.state.villiansData[randomNumber];
  //   console.log("Random Villian: ", this.randomVillian);
  //   // this.setState({
  //   //   spunVillian: randomVillian,
  //   // });
  //   // console.log("Spun Villian:", this.state.spunVillian)
  // };

  // selectRandomNumber = () =>
  //   Math.floor(Math.random() * this.state.villiansData.length);

  render() {
    return (
      <>
        <Image src={this.state.chosenImage} alt="test"/>
        <Button variant="primary" id="submit" onClick={(e) => {this.spin(e)}}>
          Spin!
        </Button>
      </>
    );
  }
}
export default Spinner;
