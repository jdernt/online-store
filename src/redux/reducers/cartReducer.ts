import { ProductItem } from '@components/productCard';
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SET_CART } from '../actions/types';

export interface CartState {
  products: ProductItem[],
  total: number,
}

const initialState: CartState = {
  products: [],
  total: 0,
}

export default function (state = initialState, action: { type: string, payload: ProductItem | CartState }) {
  switch (action.type) {
    case ADD_TO_CART:
      if (!('price' in action.payload)) return state;

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
      if (!('price' in action.payload)) return state;

      const product = action.payload;

      return {
        ...state,
        products: state.products.filter((item, i) => item.id !== product.id),
        total: state.total - product.price
      }
    case SET_CART:
      if ('price' in action.payload) return state;

      return {
        ...action.payload,
      }
    default:
      return state
  }
}