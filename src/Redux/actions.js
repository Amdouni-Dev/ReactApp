export const increment = () => {
    return {
        type:'increment',
        payload:1
    }
}
export const decrement = () => {
    return {
        type:'decrement',
        payload:1
    }
}

export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product
    }
  }

  export const removeItemFromCart = (productId) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: productId
  })
  
  export const deleteItem = (productId) => ({
    type: 'DELETE_ITEM',
    payload: productId
  })
