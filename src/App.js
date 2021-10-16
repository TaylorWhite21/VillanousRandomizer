import React from 'react';
import './App.css';
import Landing from "./Landing.js"
import Header from "./Header.js"
// import Footer from "./Footer.js"

class App extends React.Component {

  render() {
    return (
      <div id='bg-color'>
        <Header />
          <Landing />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

