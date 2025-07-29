import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={{  color: '#fff'}}> &copy; {new Date().getFullYear()} InstaBoard. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#000', // solid black
  borderTop: '1px solid #ddd',
};