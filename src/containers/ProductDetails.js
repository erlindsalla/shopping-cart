import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productsActions'
import { addProductToCart } from "../redux/actions/cartActions"
import { getProductDetailsById } from '../sevices/store.service'
const ProductDetails = () => {
  const { productId } = useParams()
  let product = useSelector((state) => state.product)
  const { image, title, price, category, description } = product
  const dispatch = useDispatch()

  const fetchProductDetail = async (id) => {
    const response = await getProductDetailsById(id);
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId)
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  const addToCart = (product) => {
    dispatch(addProductToCart(product))
  }
  return (
    <div className='ui grid container'>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='ui vertical divider'>AND</div>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img className='ui fluid image' src={image} />
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2>
                  <a className='ui teal tag label'>${price}</a>
                </h2>
                <h3 className='ui brown block header'>{category}</h3>
                <p>{description}</p>
                <div
                  className='ui vertical animated button'
                  tabIndex='0'
                  onClick={() => addToCart(product)}
                >
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className='visible content'>Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
