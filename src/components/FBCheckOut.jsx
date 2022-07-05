import React, { useState } from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from './Context/CartContext';
import {addDoc, collection, getFirestore, doc, getDoc} from 'firebase/firestore';
import {Link} from 'react-router-dom';


function FBCheckOut() {
 
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [cel, setCel] = useState("")

    const db = getFirestore()
    const orderCollection = collection(db, 'orders');

const {cart, getItemPrice} = useContext(CartContext)
    

    function handleclick() {
        console.log( "Data Cliente: ", name, cel, mail);

        const order = {

            buyer : { name, cel, mail},
            items: cart,
           total: getItemPrice(),

        }
        console.log(order);
        if( !name || !mail || !cel) return;

        addDoc(orderCollection, order).then(({id})=>{
          console.log(id)
        });

      }

  return (
<>
<h1>COMPLETE SUS DATOS PARA CONCLUIR LA OPERACIÓN</h1>

<br />
<br/>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Ingrese su nombre y apellido" />
        <Form.Text className="text-muted">
         No compartiremos su información con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control onChange={(e) => setMail(e.target.value)} type="email" placeholder="Ingrese su correo electrónico" />
        <Form.Text className="text-muted">
        No compartiremos su información con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control onChange={(e) => setCel(e.target.value)} type="number" placeholder="Ingrese su número de celular" />
        <Form.Text className="text-muted">
        No compartiremos su información con nadie.
        </Form.Text>
      </Form.Group>


      <Button  onClick={() => handleclick()} variant="primary"> <Link to={'/exit'}>
        Validar mis datos.</Link>
      </Button>
    </Form>

    
    
</>
  )
}

export default FBCheckOut