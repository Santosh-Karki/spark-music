import React,{useState} from 'react';
import {Navbar, NavDropdown, Nav, OverlayTrigger, Tooltip, Container} from 'react-bootstrap';
import Nancy from '../Bio/Nancy';
import Skippe from '../Bio/skippe';
import { Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';




import "./head.css";

function Head() {
  const shows = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      The show is currently going on.
    </Tooltip>
    );

const shops = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Releasing Soon...
  </Tooltip>
);
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
};
const hideDropdown = e => {
    setShow(false);
};
  

  return (
   
      <Navbar sticky="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">SPARK MUSIC</Navbar.Brand>
      <Nav><BrowserRouter>
      <NavDropdown
              title="ARTISTS"
              menuVariant='dark'
              show={show}
              onMouseEnter={showDropdown} 
              onMouseLeave={hideDropdown}
            
            >
              <NavDropdown.Item >
                <Link to="/skippe"> SKIPPE</Link>
                </NavDropdown.Item>
              <NavDropdown.Item >MISSNANCY</NavDropdown.Item>
              <NavDropdown.Item >LACREAMENA</NavDropdown.Item>
              </NavDropdown>          

              
              
              
              
              </BrowserRouter>

              <OverlayTrigger
      placement="bottom"
      delay={{ show: 300, hide: 100 }}
      overlay={shows}
    >
      <Nav.Link>SHOWS </Nav.Link>
    </OverlayTrigger>
        
        <Nav.Link> RELEASES</Nav.Link>
        <OverlayTrigger
      placement="bottom"
      delay={{ show: 50, hide: 100 }}
      overlay={shops}
    >
      <Nav.Link> SHOPS </Nav.Link>
    </OverlayTrigger>
    
      </Nav>
    </Container>
  </Navbar>
 
        
  );
}

export default Head;