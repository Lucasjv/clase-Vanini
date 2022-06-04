import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Item = ({prod}) => {

const {modelo, personaje, tipo, img } = prod




  return (
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{personaje}</Card.Title>
    <Card.Text>
     Producto: {tipo}
     <br />
     Categoría: {modelo}
    </Card.Text>
    <Button variant="primary">Ver Detalles</Button>
  </Card.Body>
</Card>

  )
}

export default Item