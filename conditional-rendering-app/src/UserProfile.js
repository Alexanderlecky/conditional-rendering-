import React from 'react';

function UserProfile({ onLogout }) {
  return (
    <div>
      <h1>Welcome, User!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
