import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const initialState = {
  items: [],
  totalAmont: 0
}

//context
const CartContext = React.createContext()

//provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({type: ADD_TO_CART, payload: item})
  }

  const valuesToShare = {
    addItemToCart
  }

  return (
    <CartContext.Provider value={valuesToShare}>{children}</CartContext.Provider>
  )
}

// make sure use - hook
export const useCartContext = () => {
  return useContext(CartContext)
}
