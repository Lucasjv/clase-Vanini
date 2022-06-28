import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Item = ({prod}) => {

const { personaje, img, category, precio, stock } = prod




  return (
    <Card style={{ width: '20rem' }}>
  <Card.Img style={{weight: '270px', height: '270px'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{personaje}</Card.Title>
    <Card.Text>
     Producto: {category}
     <br />
     Precio: ${precio}
    </Card.Text>
    <Button variant="secondary"> <Link to = "/item/:id" >Ver Detalles.</Link>   </Button>  
  </Card.Body>
</Card>

  )
}

export default Item