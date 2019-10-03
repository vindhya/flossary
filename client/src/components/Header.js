import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar expand="md">
      <Container>
        <NavLink exact to={`/`} className="navbar-brand">
          <img
            src={process.env.PUBLIC_URL + '/flossary-logo.svg'}
            alt="flossary logo"
          />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavLink to={`/login`} className="nav-link mr-2">
              Log In
            </NavLink>
            <NavLink to={`/signup`} className="btn btn-outline-primary">
              Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
