import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ProductItem } from '@components/productCard';
import rootReducer from './reducers';
import { CartState } from './reducers/cartReducer';

export const loadState = (): IStore | object | undefined => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) return {};

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: IStore | object): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error)
  }
};

const initialState = {};
const middleware = [thunk]
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
store.subscribe(() => saveState(store.getState()));

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