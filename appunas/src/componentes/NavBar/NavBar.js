
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav>
            <button>Cursos</button>
            <button>Esmaltes</button>
            <button>Herramientas</button>
            <button>Turnos</button>
            <button>Cabinas</button>
            <CartWidget />
        </nav>
    )
}

export default NavBar