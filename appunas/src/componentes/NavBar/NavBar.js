
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="NavBar" >
        <Link to='/'>
          <h3 className='Title'>Tina Nails Ecommerce</h3>
        </Link>
        <div className="Categories">
          <NavLink to='/category/esmaltes' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Esmaltes</NavLink>
          <NavLink to='/category/herramientas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Herramientas</NavLink>
          <NavLink to='/category/cabinas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cabinas</NavLink>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar