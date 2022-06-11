import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {


  const [errorDetail, seterrorDetail] = useState(false)
  const [detail, setDetail] = useState([])

  useEffect(() => {

    const promesaDetail = new Promise((res, rej)=> {

      setTimeout(() => {


        res(
          { modelo: "Simpsons", personaje: "Barney Gomez", id: 20, tipo: "Remera", precio: "$1500", descripcion: "Remera de algodón con escote redondo lisa, levemente ajustada en la cintura. Calce regular. 100% Algodón.",
        img: "https://http2.mlstatic.com/D_NQ_NP_743866-MLA47327728756_092021-W.jpg"});


        rej('No existe el producto');

      }, 2000);

    });

    promesaDetail
    
    .then((result)=>{
      setDetail(result);
    })

    .catch((error)=>{
      seterrorDetail(true)
      console.log(error);
    });



}, []);

console.log(detail)

return (
  <div>
   <ItemDetail detalle = {detail}/>
  </div>

)

}

export default ItemDetailContainer