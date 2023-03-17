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
