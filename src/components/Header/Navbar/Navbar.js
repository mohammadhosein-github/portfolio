import React from 'react';
import {Navbar, Nav, Button, NavDropdown, Form, FormControl, NavbarBrand} from 'react-bootstrap';

function theNavbar() {
    return (
      <Navbar bg="transparent" expand="lg">
        <NavbarBrand></NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" color="blue">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default theNavbar;