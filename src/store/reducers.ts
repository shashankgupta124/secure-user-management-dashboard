import { combineReducers } from 'redux';
import { UserData } from './actions';
import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from './actions';


interface AuthState {
  user: {
    isAuthenticated: boolean;
  };
}

interface DataState {
  userData: UserData | null;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  data: DataState;
}

const initialAuthState: AuthState = {
  user: {
    isAuthenticated: false,
  },
};

const authReducer = (state = initialAuthState, action: any): AuthState => {
  switch (action.type) {
    case 'LOGIN_USER':
      // Handle login logic and update state
      return { user: { isAuthenticated: true } };
    case 'LOGOUT_USER':
      return { user: { isAuthenticated: false } }
    case 'REGISTER_USER':
      // Handle registration logic and update state
      return { user: { isAuthenticated: true } };
    default:
      return state;
  }
};

const initialState: DataState = {
  userData: null,
  error: null,
};

const dataReducer = (state = initialState, action: any): DataState => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        userData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

export default rootReducer;
