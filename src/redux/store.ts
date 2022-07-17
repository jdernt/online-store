import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { ProductItem } from '@components/productCard';
import rootReducer from './reducers';
import { CartState } from './reducers/cartReducer';

const initialState = {};
const store = createStore(rootReducer, initialState);

export interface IStoreActions {
  addToCart: (item: ProductItem) => void
  removeFromCart: (item: ProductItem) => void
  emptyCart: () => void
}

export interface IStore extends IStoreActions {
  cart: CartState
}

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
export default store;