import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {CartContext} from './Context/CartContext'




const ItemDetail = ({detalles}) => {

  const {category, personaje, description, img, precio, stock, id } = detalles


  const [mostrarItemC, setMostrarItemC] = useState (true)

  const {isInCart, addItem} = useContext(CartContext)
  
  console.log(detalles)


  const onAdd = (count) => {
  
    alert(`Agregaste ${count} productos al carrito`)
   setMostrarItemC(false)
  isInCart()
addItem(detalles, count)





  }

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{personaje}</Card.Title>
      <Card.Text>
      {description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Modelo: {category}</ListGroup.Item>
      <ListGroup.Item>Precio: $  {precio}</ListGroup.Item>
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