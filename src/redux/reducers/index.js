import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  productsReducer,
  selectedProductsReducer,
} from './productsReducer'
import { cartReducer } from './cartReducer'
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
})
export default reducers
