import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)
    return ( 
        <>
            <h1>Carrito</h1>
            <div>
                {cart.map(prod => <h3 key={prod.id}>{prod.name}</h3>)}
                {cart.map(prod => <h4 key={prod.price}>${prod.price}</h4>)}
                {cart.map(prod => <img src={prod.img} />)}
            </div>
        </>
    )
}

export default Cart