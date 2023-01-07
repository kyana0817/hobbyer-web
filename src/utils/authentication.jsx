import { createContext, useContext, useReducer, useMemo } from 'react';

import { handleLogin, handleSignup } from "../lib/firebase";


const AuthenticationContext = createContext(undefined);

const initialState = {
  logged: false
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'logout':
      return {
        ...state,
        logged: false
      };
    case 'login':
      return {
        ...state,
        logged: true
      };
    default:
      return state
  }
};

const dispatchMiddleware = dispatch => async action => {
  console.log(action)
  switch (action.type) {
    case 'user.login':
      try {
        await handleLogin(action.user);
        dispatch({type: 'login'});
      } catch (e) {
        dispatch({type: 'logout'});
        throw e;
      }
      break;
    case 'user.signup':
      try {
        await handleSignup(action.user);
        dispatch({type: 'login'});
      } catch (e) {
        dispatch({type: 'logout'});
        throw e;
      }
      break;
    default:
      dispatch(action)
  }
}


export const AuthenticationProvider = ({children}) => {
  const [state, dispatchBase] = useReducer(reducer, initialState);
  const dispatch = dispatchMiddleware(dispatchBase)

  const value = useMemo(() => ({
      state,
      dispatch
    }),
    [state, dispatch]
  );

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthenticationContext)
  return context
}

export const useAuthorization = () => {
  const { state } = useAuth()
  return {logged: state.logged}
}
