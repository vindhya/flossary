import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../user-context';
import { getToken } from '../../services/token.service';
import FlossList from '../Floss/FlossList';
import Row from 'react-bootstrap/Row';

// This is a cool pattern! I like it a lot
const getUsername = email => email.slice(0, email.indexOf('@'));

const renderFlossLists = listArray => {
  return listArray.map(list => <FlossList data={list} key={list._id} />);
};

// Nice small readable component! Great work 🔥🔥🔥
const Dashboard = () => {
  const [flossLists, setFlossLists] = useState([]);
  const userData = useContext(UserContext);
  const authHeader = { Authorization: `Bearer ${getToken()}` };

  const fetchData = async () => {
    const userRes = await axios.get('/api/users/data', { headers: authHeader });
    const newUserData = userRes.data.data;
    userData.setUserData(newUserData);

    const flossRes = await axios.get(
      `/api/users/${newUserData._id}/floss-lists`,
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
      <p>These are your floss lists:</p>
      <Row>{renderFlossLists(flossLists)}</Row>
    </div>
  );
};

export default Dashboard;
