import React, { Component, createContext } from 'react';

export const UserContext = createContext({
  id: '',
  email: '',
  role: '',
  setUserData: () => {}
});

export class UserProvider extends Component {
  setUserData = ({ id, email, role }) => {
    this.setState({ id, email, role });
  };

  state = {
    id: '12345',
    email: 'test@email.com',
    role: 'user',
    setUserData: this.setUserData
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
