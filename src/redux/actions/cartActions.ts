import { ProductItem } from '@components/productCard';
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './types';

export const addToCart = (item: ProductItem) => ({
  type: ADD_TO_CART,
  payload: item
})

export const removeFromCart = (item: ProductItem) => ({
  type: REMOVE_FROM_CART,
  payload: item
})

export const emptyCart = () => ({
  type: EMPTY_CART
})