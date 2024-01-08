import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions';

interface LogoutButtonProps {
  onClick: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Implement logout logic and dispatch logoutUser action
    dispatch(logoutUser());
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
