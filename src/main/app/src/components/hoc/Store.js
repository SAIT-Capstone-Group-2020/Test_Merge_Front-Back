/**
Context and Reducer initial setup.
This acts a global object that any component can access if imported. 
(Look at Form.js)
*/
import React, { createContext, useReducer } from 'react';
import cart, { ini_state } from './cart.reducer';

// ! Called in components that will use global object
export const Store = createContext();

// ! Wraps all of our routes so all routes have access. Only needed for ini setup
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart, ini_state());
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
