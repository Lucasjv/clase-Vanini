import React, { useState } from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from './Context/CartContext';
import {addDoc, collection, getFirestore,} from 'firebase/firestore';
import {Link} from 'react-router-dom';


function FBCheckOut() {
 
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [cel, setCel] = useState("")

    const db = getFirestore()
    const orderCollection = collection(db, 'orders');

const {cart, getItemPrice} = useContext(CartContext)
    

    function handleclick() {
        

        const order = {

            buyer : { name, cel, mail},
            items: cart,
           total: getItemPrice(),

        }
      
        if( !name || !mail || !cel) return;

        addDoc(orderCollection, order).then(({id})=>{
          
        });

      }
      function validateform(){  
        var name=document.myform.name.value;  
        var password=document.myform.password.value;  
          
        if (name==null || name==""){  
          alert("Nombre y Apellido no puede estar en blanco");  
          return false;  
        }else if(password.length<6){  
          alert("La contraseña al menos debe tener 6 caracteres");  
          return false;  
          }  
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


      <Button style={{ color: "white" }} onClick={() => handleclick() && validateform()}  variant="secondary"> <Link to={'/exit'}>
        Validar mis datos.</Link>
      </Button>
    </Form>

    
    
</>
  )
}

export default FBCheckOut