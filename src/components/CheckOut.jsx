import React from 'react'
import {addDoc, collection, getFirestore, doc, getDoc} from 'firebase/firestore';
import {Link} from 'react-router-dom';


export default function CheckOut() {
  return (

   <>
    <h1>¡Gracias por tu pedido!</h1>

          <p>Nos pondremos en contacto para gestionar el pago y el envío!</p>
          <Link to="/">Volver al Inicio</Link>
   </>
  )
}
