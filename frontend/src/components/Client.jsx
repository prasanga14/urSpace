import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
  return (
    <div className="client font-bold flex items-center">
      <Avatar name={username} size="25" round="14px" />
      <span className="text-white text-sm">{username}</span>
    </div>
  );
};

export default Client;
