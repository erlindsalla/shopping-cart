import React, { useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'
import { getAllProducts, sortProducts } from '../sevices/store.service'

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await getAllProducts()
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleSorting = async (value) => {
    const response = await sortProducts(value)
    dispatch(setProducts(response.data))
  }
  return (
      <div className='ui grid container'>
        <div>
          <button  class='ui secondary basic button mb-2' onClick={()=>handleSorting("aesc")}>Asc</button>
          <button  class='ui secondary basic button mb-2' onClick={()=>handleSorting("desc")}>Desc</button>
        </div>
        <div className='ui grid'>
          <ProductComponent />
        </div>
    </div>
  )
}

export default ProductPage
