import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { UserProvider } from './user-context';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Dashboard from './Dashboard/Dashboard';

import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
