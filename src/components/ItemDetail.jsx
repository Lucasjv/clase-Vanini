import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';






const ItemDetail = ({detalle}) => {

  const {modelo, personaje, tipo, img, precio, descripcion } = detalle

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={detalle.img} />
    <Card.Body>
      <Card.Title>Remera: {detalle.personaje}</Card.Title>
      <Card.Text>
      {detalle.descripcion}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Modelo: {detalle.modelo}</ListGroup.Item>
      <ListGroup.Item>Precio: {detalle.precio}</ListGroup.Item>

    </ListGroup>
    <Card.Body>
      <Card.Link href="#">HOME</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default ItemDetail