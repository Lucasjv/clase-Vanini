import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


function Cart() {
  const {cart} = useContext(CartContext)
  return (

<>
{
  cart.lenght > 0 ? cart.map((element, index) =>{
    return <div key={index}><h1>(element.img)</h1></div>
  }) : <h1>TU CARRITO ESTÁ VACIO</h1>
  


}

</>
  )
}

export default Cart