import React from 'react';

console.log('Rendering HomePage');

export default function HomePage() {
  const homeContainerStyle = {
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '2.5rem',
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '1rem auto',
  };

  return (
    <div style={homeContainerStyle}>
      <h1 style={headingStyle}>Welcome to the Home Page</h1>
      <p style={paragraphStyle}>
        We’re glad you’re here — explore, enjoy, and feel right at home.
      </p>
    </div>
  );
}
