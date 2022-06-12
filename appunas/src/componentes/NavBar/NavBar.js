
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
                <h3>Tina Nails Ecommerce</h3>
            </Link>
            <div>
                <Link to='/category/esmaltes'>Esmaltes</Link>
                <Link to='/category/cabinas'>Cabinas</Link>
                <Link to='/category/herramientas'>Herramientas</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar