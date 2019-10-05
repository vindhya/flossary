import React from 'react';
import Container from 'react-bootstrap/Container';
import { StickyFooter } from './styles';

const Footer = () => {
  return (
    <StickyFooter className="mt-5">
      <Container className="text-center">
        Copyright &copy; 2019 Flossary
      </Container>
    </StickyFooter>
  );
};

export default Footer;
