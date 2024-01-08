import { Middleware } from 'redux';
import { NAVIGATE_TO_DASHBOARD } from '../store/actions';
import { RootState } from '../store/reducers';

const authMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: any) => {
  const { user } = store.getState().auth;

  if (action.type === NAVIGATE_TO_DASHBOARD && !user.isAuthenticated) {
    // Redirect to login or handle unauthorized access
    console.error('Unauthorized access');
    return;
  }

  return next(action);
};

export default authMiddleware;
