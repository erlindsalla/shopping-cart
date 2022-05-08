import React, { useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'
import { getAllProducts } from '../sevices/store.service'

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await getAllProducts()
    debugger
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log('Products :', products)
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductPage
