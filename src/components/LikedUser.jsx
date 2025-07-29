import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LikedUser() {
  const [likedUsers, setLikedUsers] = useState([]);

  // ✅ Load liked users from local storage
  useEffect(() => {
    const storedUsers = localStorage.getItem('likedUsers');
    if (storedUsers) {
      setLikedUsers(JSON.parse(storedUsers));
    }
  }, []);

  // ❌ Remove user from liked list
  const handleUnlike = (id) => {
    const updatedUsers = likedUsers.filter(user => user.login.uuid !== id);
    setLikedUsers(updatedUsers);
    localStorage.setItem('likedUsers', JSON.stringify(updatedUsers));
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>❤️ Liked Users</h2>

      {likedUsers.length === 0 ? (
        <p>No liked users yet!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {likedUsers.map((user, index) => (
            <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <img src={user.picture.medium} alt={user.name.first} />
              <p>{user.name.first} {user.name.last}</p>
              <button onClick={() => handleUnlike(user.login.uuid)}>💔 Unlike</button>
            </div>
          ))}
        </div>
      )}

      {/* 🔗 Link to Team page */}
      <Link
        to="/team"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
        }}
      >
        🔙 Back to Team
      </Link>
    </div>
  );
}