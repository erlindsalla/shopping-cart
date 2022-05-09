import { CartTypes } from '../constants/cart-types'

export const addProductToCart = (product) => {
    return {
      type: CartTypes.ADD_PRODUCT_TO_CART,
      payload: product,
    }
  }


