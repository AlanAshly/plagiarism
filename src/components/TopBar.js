import React from 'react';
import { Button } from 'antd';
import PlagiarismChecker from './PlagiarismChecker';
import Profile from './Profile';
import Logout from './Logout';

const TopBar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px 20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <PlagiarismChecker />
      <div style={{ display: 'flex' }}>
        <Profile />
        <Logout />
      </div>
    </div>
  );
};

export default TopBar;