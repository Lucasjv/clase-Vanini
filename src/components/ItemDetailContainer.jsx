import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'




let productosMock = [
  {modelo: "Simpsons", personaje: "Homero", id: 1, tipo: "taza", img: "https://d22fxaf9t8d39k.cloudfront.net/6fd9d6aee53494abb449f57191f1d0cc14edff10f2c9f223c8463e2edc6d5fdc4786.png" },
  {modelo: "Simpsons", personaje: "Marge", id: 2, tipo: "taza", img: "https://http2.mlstatic.com/D_NQ_NP_859919-MLA47448863934_092021-O.jpg"},
  {modelo: "Simpsons", personaje: "Maggie", id: 3, tipo: "taza", img:"https://asturpins.com/tienda/wp-content/uploads/2021/06/4/2463-TAZA-MAGGIE-SIMPSON.jpg"},
  {modelo: "Simpsons", personaje: "Lisa", id: 4, tipo: "taza", img: "https://d22fxaf9t8d39k.cloudfront.net/609d3e859aec1b8dde6d7f595ab1674d3f16ff62ca8f4e9d025f1fa280dbbd3c18705.jpeg"},   
  {modelo: "Simpsons", personaje: "Moe", id: 6, tipo: "taza", img:"https://http2.mlstatic.com/D_NQ_NP_712587-MLA47890918030_102021-O.webp"},
  {modelo: "Simpsons", personaje: "Apu", id: 5, tipo: "taza", img:"https://http2.mlstatic.com/D_NQ_NP_2X_630215-MLA46936159987_072021-F.webp"},
  {modelo: "Simpsons", personaje: "Bart", id: 7, tipo: "remera", img:"https://http2.mlstatic.com/D_NQ_NP_2X_740425-MLA49948492070_052022-F.webp"},
  { modelo: "Simpsons", personaje: "Barney Gomez", id: 20, tipo: "remera", precio: "$1500",
  img: "https://http2.mlstatic.com/D_NQ_NP_743866-MLA47327728756_092021-W.jpg"},
  {modelo: "Simpsons", personaje: "Duff", id: 8, tipo: "gorra", img:"https://http2.mlstatic.com/D_NQ_NP_2X_637353-MLA48294361209_112021-F.webp"},
  {modelo: "Simpsons", personaje: "Peces del infierno", id: 9, tipo: "gorra", img:"https://http2.mlstatic.com/D_NQ_NP_2X_952967-MLA31613060578_072019-F.webp"},

];

const ItemDetailContainer = () => {


  const [errorDetail, seterrorDetail] = useState(false)
  const [detail, setDetail] = useState([])
const {id} = useParams()



  useEffect(() => {

    const promesaDetail = new Promise((res, rej)=> {

      setTimeout(() => {


        res(
          { modelo: "Simpsons", personaje: "Barney Gomez", id: 20, tipo: "Remera", precio: "$1500", descripcion: "Remera de algodón con escote redondo lisa, levemente ajustada en la cintura. Calce regular. 100% Algodón.",
        img: "https://http2.mlstatic.com/D_NQ_NP_743866-MLA47327728756_092021-W.jpg"})

        if (id == 20){
          setDetail ({ modelo: "Simpsons", personaje: "Barney Gomez", id: 20, tipo: "Remera", precio: "$1500"})
        }
        
        if (id == 7){
          setDetail ({modelo: "Simpsons", personaje: "Bart", id: 7, tipo: "remera", img:"https://http2.mlstatic.com/D_NQ_NP_2X_740425-MLA49948492070_052022-F.webp"})
        }


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



}, [id]);

console.log(detail)

return (
  <div>
   <ItemDetail detalle = {detail}/>
  </div>

)

}

export default ItemDetailContainer