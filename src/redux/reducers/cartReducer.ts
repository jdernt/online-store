import { ProductItem } from '@components/productCard';
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../actions/types';

export interface CartState {
  products: ProductItem[],
  total: number,
}

const initialState: CartState = {
  products: [],
  total: 0,
}

export default function (state = initialState, action: { type: string, payload: ProductItem }) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [action.payload, ...state.products],
        total: state.total + action.payload.price
      }
    case EMPTY_CART:
      return {
        ...state,
        products: [],
        total: 0
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((item, i) => item.id !== action.payload.id),
        total: state.total - action.payload.price
      }
    default:
      return state
  }
}