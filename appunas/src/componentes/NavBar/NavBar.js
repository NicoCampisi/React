
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav>
            <button>Cursos</button>
            <button>Turnos</button>
            <button>Herramientas</button>
            <CartWidget />
        </nav>
    )
}

export default NavBar