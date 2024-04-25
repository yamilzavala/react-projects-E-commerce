import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  // SIDEBAR_OPEN,
  // SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
}

//context
const ProductsContext = React.createContext()

//provider
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (url) => {
    dispatch({type: GET_PRODUCTS_BEGIN})
    try {
      const resp = await axios.get(url,{ headers: { Accept: 'application/json' } })    
      console.log(resp)
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: resp.data})      
    } catch (error) {
      dispatch({type: GET_PRODUCTS_ERROR})    
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProducts(url)
  },[])

  const valuesToShare = {
    ...state
  }

  return (
    <ProductsContext.Provider value={valuesToShare}>
      {children}
    </ProductsContext.Provider>
  )
}

// hook
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
