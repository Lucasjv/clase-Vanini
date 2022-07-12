
import React, { useState } from 'react'



const ItemCount = ({initial, max, onAdd}) =>{

  

  const [count, setCount] = useState(initial)



const sumar = () =>{
  if (count < max){
    
  
  setCount(count + 1)

}




 else {
  alert (`No puedes agregar mas productos a tu carrito`)
}
}

const restar = () =>{


  if (count > initial)
  {
  setCount(count - 1)

  }
  else{
    alert (`No hay productos para sacar`)
  }
}



 
    return (


    <div>
      <h2>{count}</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={()=> onAdd(count)}>Agregar al Carrito</button>

    </div>
  )
    }


export default ItemCount

