import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hhaCart from './cart/cart.reducer'

// reducers
const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  hhaCart,
});

export default persistReducer(rootPersistConfig, rootReducer);