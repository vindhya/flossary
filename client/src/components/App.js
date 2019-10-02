import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Container>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
