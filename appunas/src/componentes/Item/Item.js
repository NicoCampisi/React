import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap";
const Item = ({id, name, img, price}) => {
  const cardInfo = [
    {image: "", title: "Lebron", text:"THE GOAT"},
    {image: "", title: "Harden", text:"HE GOOD"},
    {image: "", title: "Curry", text:"HE GOOD"},
    {image: "", title: "Jordan", text:"HE IS VERY CLOSE TO GOAT"}
  ];

  const renderCard = (card, index) => {
    return (
    <Card style={{ width: '18rem' }} key={index}>
    <Card.Img variant="top" src="holder.js/100px180" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {price}
      </Card.Text>
      <Button>
        <Link to={`/detail/${id}`}> Ver detalle </Link>
      </Button>
    </Card.Body>
    
  </Card>

    )
  }
  return (
    <div>
      {cardInfo.map(renderCard)}
    </div>
    //  <article>
    //    <li>
    //        {name}
    //        <img src={img} alt={name}/>
    //        {price}
    //   </li>
    //   <footer>
    //    <Link to={`/detail/${id}`}> Ver detalle </Link>
    //    </footer>
    //  </article>
  )
}

export default Item