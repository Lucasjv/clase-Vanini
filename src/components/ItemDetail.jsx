import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';








const ItemDetail = ({detalle}) => {

  const [mostrarItemC, setMostrarItemC] = useState (true)

  const onAdd = (count) => {
  
    alert(`Agregaste ${count} productos al carrito`)
   setMostrarItemC(false)
  
  }
  


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
{mostrarItemC ? <ItemCount initial={1}  max = {10} onAdd = {onAdd}/> :  <Card.Body>
  <div> <Link to ="/cart" >Finalizar mi compra</Link></div>
</Card.Body>};
    </ListGroup>
    <Card.Body>
      <div> <Link to ="/" >Volver a Home</Link></div>
    </Card.Body>
  </Card>
  )
}

export default ItemDetail