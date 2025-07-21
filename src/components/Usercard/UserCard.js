import React, { useState } from 'react';

const UserCard = ({ user }) => {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(true);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const toggleEmail = () => {
    setShowEmail(prev => !prev);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      marginBottom: '12px',
      borderRadius: '8px',
      maxWidth: '300px'
      
    }}>
      <img src={user.picture.large} alt={user.name.first} style={{borderRadius: '200px'}} />
      <h2>{user.name.first} {user.name.last}</h2>
      {showEmail && <p>Email: {user.email}</p>}
      <button onClick={toggleEmail} style={{
        backgroundColor: '#4cafacff', // camelCase (not backgroundcolor or background-color)
       border: 'none',
       color: 'white',
       padding: '10px 20px',
       borderRadius: '5px', // camelCase (not border-radius)
       cursor: 'pointer',
       transition: 'background-color 0.3s',
      }} >
        {showEmail ? 'Hide Email' : 'Show Email'}
      </button>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <button onClick={handleLike} style={{
         marginTop: '10px',
         backgroundColor: '#4CAF50', // camelCase (not backgroundcolor or background-color)
         border: 'none',
         color: 'white',
         padding: '10px 20px',
         borderRadius: '5px', // camelCase (not border-radius)
         cursor: 'pointer',
         transition: 'background-color 0.3s',
         }}>
        Like
      </button>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default UserCard;