import { ActionTypes } from '../constants/action-types'
const intialState = {
  products: [],
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


