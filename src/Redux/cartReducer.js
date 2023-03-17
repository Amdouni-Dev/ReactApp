const initialState = {
    cartItems: []
  }
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        }
        case 'REMOVE_ITEM_FROM_CART':
        const existingItem = state.cartItems.find(item => item.id === action.payload)
        if (existingItem.quantity === 1) {
          return {
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== action.payload)
          }
        }
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
            return item
          })
        }
      case 'DELETE_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        }
      default:
        return state
    }
  }