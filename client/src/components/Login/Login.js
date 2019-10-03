import React, { Component } from 'react';
import axios from 'axios';
// import { Form } from './styles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
  state = { message: null };

  handleSubmit = async e => {
    console.log('submitted!');
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const res = await axios.post(`/api/users/login`, {
        data: { email, password }
      });
      console.log('res', res);
    } catch (e) {
      this.setState({ message: e });
      console.log('error', e);
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    console.log('state', this.state);
    return (
      <div className="mt-5">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
