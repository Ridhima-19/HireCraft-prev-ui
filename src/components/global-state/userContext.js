import { createContext } from "react";

// Initial state
export const initialState = {
  isLoading: false,
  user: null, // { username, email, id }
};

// Create context
export const UserContext = createContext({
  state: initialState,
  dispatch: () => null,
});