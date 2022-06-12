import { Link } from "react-router-dom"
const Item = ({id, name, img, price}) => {
  return (
    <article>
      <li>
          {name}
          <img src={img} alt={name}/>
          {price}
      </li>
      <footer>
        <Link to={`/detail/${id}`}> Ver detalle </Link>
      </footer>
    </article>
  )
}

export default Item