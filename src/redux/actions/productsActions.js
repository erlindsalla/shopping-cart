import { ActionTypes } from '../constants/action-types'

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}

export const removeProductFromList = (id) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_LIST,
    payload: id,
  }
}

export const addProductToCart = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: product,
  }
}
