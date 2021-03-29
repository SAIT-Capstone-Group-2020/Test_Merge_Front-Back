// ! This file holds the actions that are called from the component. All functions need the dispatch parameter if it will be passed to the reducer to change the state of the cart.
import { useState, useEffect } from 'react';
import {
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from './types';

// ! Replaces the useFetch hook in the utils folder because we can't wrap a hook in conditionals. Only difference is the state is passed in and there is an if-else.
export const useGetCart = (state, url, setData) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (state.length === 0) {
        setData([]);
        setLoading(false);
      } else {
        try {
          const res = await fetch(url);
          const resJson = await res.json();
          setData(resJson);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [url, setData, state]);
  return { loading, error };
};

//! We will use the same actions and reducers for cart and checkout. dispatch sends a type and payload. Type is from the file of constants and payload would be the actual data

// This function clears the cart.
export const clearCart = dispatch => {
  dispatch({
    type: CLEAR_CART,
    payload: {},
  });
};

// This function is the basic version of adding an item to the cart.
export const addToCart = (id, quantity, dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { id, quantity },
  });
};

export const removeFromCart = (id, dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};

export const updateQuatity = (id, quantity, dispatch) => {
  dispatch({
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  });
};

export const saveLocal = ({hhaSummary}) => {
  localStorage.setItem('hhaSummary', JSON.stringify(hhaSummary));
}