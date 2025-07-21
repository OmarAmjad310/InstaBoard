/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=12')
      .then(response => setUsers(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random Users</h1>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.medium} alt={user.name.first} />
          <h2>{user.name.first} {user.name.last}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../Usercard/UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Initial fetch
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users
  const fetchUsers = () => {
    axios.get('https://randomuser.me/api/?results=12')
      .then(response => {
        setUsers(prevUsers => [...prevUsers, ...response.data.results]);
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={{backgroundColor:'grey',
       
      }}>
      <center style={{ fontSize:'50px',
      
      }}>Insta Card</center>

      <div style={{
       backgroundColor:'grey',
       display: 'flex',
       textAlign:'center',
       justifyContent:'center',
       gap: '15px',
       flexWrap:'wrap'
      }}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
      <button onClick={fetchUsers} style={{ 
       display: 'block', // Required for margin: auto to work
       margin: '20px auto 0', // top 20px, left/right auto
       backgroundColor: '#4CAF50', // camelCase (not backgroundcolor or background-color)
       border: 'none',
       color: 'white',
       padding: '10px 20px',
       borderRadius: '5px', // camelCase (not border-radius)
       cursor: 'pointer',
       transition: 'background-color 0.3s',
       }}>
        Load More
      </button>
    </div>
  );
};

export default UserList;

