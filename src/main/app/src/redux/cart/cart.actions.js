import { CLEAR_CART, ADD_TO_CART } from '../types';

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART,
    payload: {},
  });
};

export const addToCart = (id,quantity) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: { id, quantity },
  });
};