import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>This is the rest of the app body!</Container>
    </Fragment>
  );
};

export default App;
