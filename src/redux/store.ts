import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { CartState } from './reducers/cartReducer';

const initialState = {};
const store = createStore(rootReducer, initialState);

export interface IStore {
  cart: CartState
}

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
export default store;