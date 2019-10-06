import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../user-context';
import { getToken } from '../../services/token.service';

const getUsername = email => email.slice(0, email.indexOf('@'));

const Dashboard = () => {
  const [flossLists, setFlossLists] = useState([]);
  console.log('flossLists', flossLists);
  const userData = useContext(UserContext);
  const authHeader = { Authorization: `Bearer ${getToken()}` };

  const fetchData = async () => {
    const userRes = await axios.get('/api/users/data', { headers: authHeader });
    const newUserData = userRes.data.data;
    userData.setUserData(newUserData);

    const flossRes = await axios.get(
      `/api/users/${newUserData.id}/floss-lists`,
      { headers: authHeader }
    );
    setFlossLists(flossRes.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-3">
      <h4>Welcome, {getUsername(userData.email)}!</h4>
    </div>
  );
};

export default Dashboard;
