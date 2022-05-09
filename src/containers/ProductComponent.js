import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromList } from '../redux/actions/productsActions'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product
    const deleteProduct = (id) => {
      dispatch(removeProductFromList(id))
    }
    return (
      <div className='four wide column' key={id}>
        <button
          className='ui secondary basic button mb-2'
          onClick={() => deleteProduct(id)}
        >
          delete
        </button>
        <Link to={`/product/${id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })
  return <>{renderList}</>
}

export default ProductComponent
