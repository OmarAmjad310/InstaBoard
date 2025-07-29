/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Team = () => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(12);
  const [likedUsers, setLikedUsers] = useState(
    JSON.parse(localStorage.getItem('likedUsers')) || []
  );

  useEffect(() => {
    fetchUsers(results);
  }, [results]);

  const fetchUsers = async (count) => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
      setUsers(response.data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const loadMore = () => {
    fetchUsers(users.length + 12);
  };

  const handleLike = (user) => {
    const updatedLikes = [...likedUsers, user];
    setLikedUsers(updatedLikes);
    localStorage.setItem('likedUsers', JSON.stringify(updatedLikes));
  };

  return (
    <div>
      <h2>Random Users</h2>
      <label>
        Number of Results (1-100):
        <input
          type="number"
          min="1"
          max="100"
          value={results}
          onChange={(e) => setResults(Number(e.target.value))}
        />
      </label>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <div key={index} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <img src={user.picture.medium} alt={user.name.first} />
            <p>{user.name.first} {user.name.last}</p>
            <button onClick={() => handleLike(user)}>❤️ Like</button>
            <Link to="/profile" state={{ user }}>
              <button>View Profile</button>
            </Link>
          </div>
        ))}
      </div>

      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default Team;*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Team.css'; // Import the stylesheet

const Team = () => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(12);
  const [likedUsers, setLikedUsers] = useState(
    JSON.parse(localStorage.getItem('likedUsers')) || []
  );

  useEffect(() => {
    fetchUsers(results);
  }, [results]);

  const fetchUsers = async (count) => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
      setUsers(response.data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const loadMore = () => {
    fetchUsers(users.length + 12);
  };

  const handleLike = (user) => {
    const updatedLikes = [...likedUsers, user];
    setLikedUsers(updatedLikes);
    localStorage.setItem('likedUsers', JSON.stringify(updatedLikes));
  };

  return (
    <div className="team-container">
      <h2 className="team-heading">Random Users</h2>

      <label className="team-label">
        Number of Results (1–100):
        <input
          type="number"
          min="1"
          max="100"
          value={results}
          onChange={(e) => setResults(Number(e.target.value))}
          className="team-input"
        />
      </label>

      <div className="user-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.medium} alt={user.name.first} />
            <p>{user.name.first} {user.name.last}</p>
            <button onClick={() => handleLike(user)} className="like-button">❤️ Like</button>
            <Link to="/profile" state={{ user }}>
              <button className="profile-button">View Profile</button>
            </Link>
          </div>
        ))}
      </div>

      <button onClick={loadMore} className="load-button">Load More</button>
    </div>
  );
};

export default Team;