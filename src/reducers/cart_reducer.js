import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  //add item
  if(action.type === ADD_TO_CART) {
    const {amount, product, id, color } = action.payload;
    const tempItem = state.cart.find(product => product.id === id + color)
    if(tempItem) {     
      const newCartState = state.cart.map(cartItem => {
        if(cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if(newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return {...cartItem, amount: newAmount};
        } else {
          return cartItem
        }
      })
      return {
        ...state,
        cart: newCartState,
        total_amount: state.total_amount + (amount * product.price),
        total_items: state.total_items + amount
      }
    } else {
      const newItem = {
        name: product.name,
        amount, 
        id: id + color, 
        color,
        image: product.images[0].url,
        price: product.price,
        max: product.stock
      }
      return {
        ...state,
        cart: [...state.cart, newItem],
        total_amount: state.total_amount + (amount * product.price),
        total_items: state.total_items + amount
      }     
    }
  }
  //remove item
  if(action.type === REMOVE_CART_ITEM) {
    const {id} = action.payload;
    const newCartState = state.cart.filter(cartItem => cartItem.id !== id)
    console.log('remove - newCartState: ', newCartState)
    return {
      ...state,
      cart: newCartState
    }
  }
  //clear cart
  if(action.type === CLEAR_CART) {    
    return {
      ...state,
      cart: []
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
