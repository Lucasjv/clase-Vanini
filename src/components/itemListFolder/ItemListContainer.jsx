import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import './ItemListContainerStyle.css'

const ItemListContainer = ({ greetings }) => {


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState([]);
  
  useEffect(() => {
    const misTazas = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {modelo: "Simpsons", personaje: "Homero", id: 4, tipo: "taza", img: "https://d22fxaf9t8d39k.cloudfront.net/6fd9d6aee53494abb449f57191f1d0cc14edff10f2c9f223c8463e2edc6d5fdc4786.png"},
          {modelo: "Simpsons", personaje: "Marge", id: 5, tipo: "taza", img: "https://http2.mlstatic.com/D_NQ_NP_859919-MLA47448863934_092021-O.jpg"},
          {modelo: "Simpsons", personaje: "Maggie", id: 3, tipo: "taza", img:"https://d22fxaf9t8d39k.cloudfront.net/88119dd0dc9adadb5ed3d5fb05bafa14aa02f15846161760b6bed1c6d87025cd4786.jpeg"},
          {modelo: "Simpsons", personaje: "Lisa", id: 2, tipo: "taza", img: "https://d22fxaf9t8d39k.cloudfront.net/609d3e859aec1b8dde6d7f595ab1674d3f16ff62ca8f4e9d025f1fa280dbbd3c18705.jpeg"},
          {modelo: "Simpsons", personaje: "Bart", id: 1, tipo: "taza", img:"https://d22fxaf9t8d39k.cloudfront.net/36a12b42f48049e0e9ee30fb56e1c58ac54436058f192f72e1ee1c3e4d49af234786.jpeg"},
        ]);
        rej('No existe el producto');
      }, 2000);
    });
  
  misTazas
      .then((result) => {
        setProducto(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  console.log(producto)

  return (
  <div>
    <ItemList producto = {producto}/>
  </div>

  )
}

export default ItemListContainer


