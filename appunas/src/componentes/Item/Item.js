import { Link } from "react-router-dom"
const Item = ({id, nombre, img, precio}) => {
  return (
    <article>
      <li>
          {nombre}
          <img src={img} alt={nombre}/>
          {precio}
      </li>
      <footer>
        <Link to={`/detail/${id}`}> Ver detalle </Link>
      </footer>
    </article>
  )
}

export default Item