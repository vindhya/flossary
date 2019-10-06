import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { UserContext, UserConsumer } from '../user-context';
import { getToken } from '../../services/token.service';

const getUsername = email => email.slice(0, email.indexOf('@'));

const Dashboard = () => {
  const [flossLists, setFlossLists] = useState([]);
  console.log('flossLists', flossLists);
  const userData = useContext(UserContext);
  const authHeader = { Authorization: `Bearer ${getToken()}` };

  useEffect(() => {
    axios
      .get('/api/users/data', {
        headers: authHeader
      })
      .then(res => {
        const newUserData = res.data.data;
        userData.setUserData(newUserData);

        axios
          .get(`/api/users/${newUserData.id}/floss-lists`, {
            headers: authHeader
          })
          .then(res => setFlossLists(res.data.data));
      });
  }, []);

  return (
    <div className="mt-3">
      <h4>Welcome, {getUsername(userData.email)}!</h4>
    </div>
  );
};

export default Dashboard;
