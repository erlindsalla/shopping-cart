import { CartTypes } from '../constants/cart-types'

const intialState = {
    cart: [],
}
  
export const cartReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case CartTypes.ADD_PRODUCT_TO_CART:
        return { ...state, cart: [...state.cart, payload] }
      default:
        return state
    }
}