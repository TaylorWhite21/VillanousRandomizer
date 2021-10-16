import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {

  render(){
    return (
      <Navbar id='nav-bar' collapseOnSelect fixed="top" expand="lg" bg="primary" variant="dark">
        <Navbar.Brand className='links'>Villianous Randomizer</Navbar.Brand>
        
      </Navbar>
    )
  }
}

export default Header;
