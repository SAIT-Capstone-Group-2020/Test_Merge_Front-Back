import { ADD_TO_CART, CLEAR_CART } from '../types';
// const INI_STATE = [];

// !For now we'll have an initial item inside the the cart
const INI_STATE = [{
    id: 1,
    quantity: 1,
}];


const cartReducer = (state = INI_STATE, { type, payload }) => {
  switch (type) {
    case CLEAR_CART:
      return INI_STATE;
    case ADD_TO_CART:
      return [
        ...state,
        {
          id: payload.id,
          quantity: payload.quantity,
        },
      ];
    default:
      return state;
  }
};
export default cartReducer;
