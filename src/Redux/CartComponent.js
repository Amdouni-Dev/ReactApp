import { useSelector, useDispatch } from 'react-redux'

const CartComponent = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)

  const handleRemoveItem = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId
    })
  }

  return (
    <div>
      <h3>Mon panier</h3>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Prix : {item.price} €</p>
          <img src={item.img} alt={item.name} />
          <button onClick={() => handleRemoveItem(item.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  )
}

export default CartComponent
