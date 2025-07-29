import React from 'react';
import { Link } from 'react-router-dom';
import logo from './download.png'

export default function Navigation() {
  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoImageStyle} />
        <span style={logoTextStyle}>Instaboard-v2</span>
        </div>
        <ul style={ulStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/team" style={linkStyle}>Team</Link></li>
          <li><Link to="/liked-user" style={linkStyle}>Liked-User</Link></li>
        </ul>
      </div>
    </nav>
  );
}


const navStyle = {
  backgroundColor: '#333',
  padding: '1rem',
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const logoImageStyle = {
  width: '32px',
  height: '32px',
};

const logoTextStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const ulStyle = {
  display: 'flex',
  gap: '1.5rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
};