import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      villiansData: this.props.villiansData,
    };
  }

  spinVillains = (e) => {
    e.preventDefault();
    console.log("villain Data:", this.state.villiansData);
    let mappedVillians = this.state.villiansData.map(
      ({ id, src, title, description }) => (
        <img key={id} src={src} title={title} alt={description} />
      )
    );
    console.log("Mapped Villians: ", mappedVillians);
    let randomNumber = this.selectRandomNumber();
    let randomVillian = mappedVillians[randomNumber];
    console.log("Random Villian: ", randomVillian);
    this.setState({
      spunVillian: randomVillian,
    });
    console.log("Spun Villian:", this.state.spunVillian)
  };

  selectRandomNumber = () =>
    Math.floor(Math.random() * this.state.villiansData.length);

  render() {
    return (
      <>
        <img src={this.state.spunVillian.src} alt="test"></img>
        <Button variant="primary" id="submit" onClick={this.spinVillains}>
          Spin!
        </Button>
      </>
    );
  }
}
export default Spinner;
