import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TeamDetails.css'; // import the stylesheet

const TeamDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    return <p className="no-user-message">No user data provided.</p>;
  }

  return (
    <div className="team-details-container">
      <div className="user-details-card">
        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
        <img src={user.picture.large} alt={user.name.first} className="user-image" />
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Location:</strong> {user.location.city}, {user.location.state}, {user.location.country}</p>
        <p><strong>Full Address:</strong> {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.postcode}, {user.location.country}</p>

        <button className="back-button" onClick={() => navigate('/team')}>🔙 Back to Team</button>
      </div>
    </div>
  );
};

export default TeamDetails;