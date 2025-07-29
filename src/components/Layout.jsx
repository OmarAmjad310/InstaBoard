import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navigation';
import Footer from './Footer';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
  padding: '2rem',
};

export default function Layout() {
  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}