const Item = ({nombre, img, precio}) => {
  return (
    <li>
        {nombre}
        <img src={img} alt={nombre}/>
        {precio}
    </li>
  )
}

export default Item