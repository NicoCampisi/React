import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <img src='' alt='cart' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget