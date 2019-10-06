import React, { Component, createContext } from 'react';

export const UserContext = createContext({
  _id: '',
  email: '',
  role: '',
  setUserData: () => {}
});

export class UserProvider extends Component {
  setUserData = ({ _id, email, role }) => {
    this.setState({ _id, email, role });
  };

  state = {
    _id: '',
    email: '',
    role: '',
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
