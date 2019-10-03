import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { Description } from './styles';

const Home = () => {
  return (
    <Row className="mt-3">
      <Col md={8}>
        <h1 className="display-4">Keep track of your embroidery floss.</h1>
        <Description>
          If you’ve ever worked on an embroidery or cross-stitch project you
          know how difficult it can be to keep track of all your floss colours.
        </Description>
        <Description>
          Flossary allows you to easily organize your floss so that you always
          know what you have.
        </Description>
        <NavLink to={`/signup`} className="btn btn-primary btn-lg">
          Get Started
        </NavLink>
      </Col>
      {/* <Col>Testing testing this is another column</Col> */}
    </Row>
  );
};

export default Home;
