import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { fetchUserData, logoutUser } from '../store/actions';
import LogoutButton from '../components/LogoutButton';

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const userId = 1; // Assuming a user is logged in with ID 1
  const userData = useSelector((state: RootState) => state.data.userData);
  const error = useSelector((state: RootState) => state.data.error);
  const isLoading = !userData && !error;
  
  const handleLogout = () => {
    // Implement logout logic and dispatch logoutUser action
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, [dispatch, userId]);

return (
  <div>
    <h1>Protected Dashboard Page</h1>
      <LogoutButton onClick={handleLogout} />
    {isLoading && <p>Loading user data...</p>}
    {error && <p>Error loading user data: {error}</p>}
    {userData && (
      <div>
        <p>Welcome back, {userData.first_name} {userData.last_name}!</p>
        {/* Display other user data... */}
      </div>
    )}
  </div>
);
};


export default DashboardPage;
