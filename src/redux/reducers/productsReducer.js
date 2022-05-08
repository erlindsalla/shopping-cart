import { ActionTypes } from '../constants/action-types'
const intialState = {
  products: [],
  cart: [],
}

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }
    case ActionTypes.REMOVE_PRODUCT_FROM_LIST:
      const newList = state.products.filter((element) => element.id !== payload)
      return { ...state, products: newList }
    default:
      return state
  }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state
  }
}

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      const test = { ...state, cart: [...state.cart, payload] }
      return { ...state, cart: [...state.cart, payload] }
    default:
      return state
  }
}
