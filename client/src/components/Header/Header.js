import React, { Fragment, useContext } from 'react';
import { UserContext } from '../user-context';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { removeToken } from '../../services/token.service';

const handleLogout = setUserData => {
  removeToken();
  setUserData({ _id: '', email: '', role: '' });
};

const renderLoginNavLinks = ({ _id, setUserData }) => {
  if (_id) {
    return (
      <Fragment>
        <NavLink to={`/dashboard`} className="nav-link mr-2">
          Dashboard
        </NavLink>
        <NavLink
          to={`/`}
          onClick={() => handleLogout(setUserData)}
          className="nav-link"
        >
          Log Out
        </NavLink>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <NavLink to={`/login`} className="nav-link mr-2">
        Log In
      </NavLink>
      <NavLink to={`/signup`} className="btn btn-outline-primary">
        Sign Up
      </NavLink>
    </Fragment>
  );
};

const Header = () => {
  const userData = useContext(UserContext);
  console.log('userData', userData);

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
          {/* figure out how to get rid of this first Nav and still get second child to align right */}
          <Nav className="mr-auto"></Nav>
          <Nav>{renderLoginNavLinks(userData)}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
