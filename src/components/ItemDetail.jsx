import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {CartContext} from './Context/CartContext'








const ItemDetail = ({detalle}) => {



  const [mostrarItemC, setMostrarItemC] = useState (true)

  const {isInCart, addItem} = useContext(CartContext)
  


  const onAdd = (count) => {
  
    alert(`Agregaste ${count} productos al carrito`)
   setMostrarItemC(false)
  isInCart(detalle.id)
addItem(detalle, count)

  }
  


  const {modelo, personaje, tipo, img, precio, descripcion } = detalle

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={detalle.img} />
    <Card.Body>
      <Card.Title>{detalle.personaje}</Card.Title>
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