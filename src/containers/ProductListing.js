import React, { useEffect, useCallback, useMemo, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'
import { getAllProducts, sortProducts } from '../sevices/store.service'

const ProductPage = () => {
  const [sort, setSorting] = useState("aesc");

  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await getAllProducts()
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleSorting = async (value) => {
    let tempSort = value === "aesc" ? "desc" : "aesc"
    setSorting(tempSort);
    const response = await sortProducts(tempSort)
    dispatch(setProducts(response.data))
  }
  return (
      <div className='ui grid container'>
        <div>
          <button  className='ui secondary basic button mb-2' onClick={()=>handleSorting(sort)}>{sort}</button>
        </div>
        <div className='ui grid'>
          <ProductComponent />
        </div>
    </div>
  )
}

export default ProductPage
