import { getUserData, login } from "../services/api";

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';
export const NAVIGATE_TO_DASHBOARD = 'NAVIGATE_TO_DASHBOARD';

export interface UserData {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: UserData; 
}

export interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  payload: string;
}

interface RegisterUserSuccessAction {
  type: typeof REGISTER_USER_SUCCESS;
}

interface RegisterUserFailureAction {
  type: typeof REGISTER_USER_FAILURE;
  payload: string;
}

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const navigateToDashboard = () => {
  return { type: NAVIGATE_TO_DASHBOARD };
};

export const loginUser = (credentials: { email: string; password: string }): any=> {
    return async (dispatch: (action: LoginUserSuccessAction | LoginUserFailureAction) => void): Promise<void> => {
      try {
        const userData = await login(credentials);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: userData });
      } catch (error: any) {
        dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
        throw { type: LOGIN_USER_FAILURE, payload: error.message };
      }
    };
};

export const registerUser = (userData: { email: string; password: string }): any => {
  return async (dispatch: (action: RegisterUserSuccessAction | RegisterUserFailureAction) => void): Promise<void> => {
      try {
        await registerUser(userData);
        dispatch({ type: REGISTER_USER_SUCCESS });
      } catch (error: any) {
        dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
      }
    };
};

export const fetchUserData = (userId: number):any => {
  return async (dispatch: (action: { type: string; payload: UserData }) => void) => {
    try {
      const userData: UserData = await getUserData(userId);
      dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: userData });
    } catch (error: any) {
      dispatch({ type: FETCH_USER_DATA_FAILURE, payload: error.message });
    }
  };
};
