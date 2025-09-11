
import {useReducer} from 'react';
import { initialState, UserContext } from './userContext';

// Action types
export const ActionTypes = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  LOADING: "LOADING",
};

// Reducer function
export const userReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, user: action.payload.user, isLoading: false };
    case ActionTypes.LOGOUT_USER:
      return { ...state, user: null };
    case ActionTypes.LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};