import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item';
import ItemList from '../ItemList';
import './ItemListContainerStyle.css'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


const ItemListContainer = ({ greetings }) => {




  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState([]);
  const {id} = useParams();
  

  useEffect(() => {

    const db = getFirestore();

    const productCollection = collection(db, 'Productos');
   


    if (id) {

      const q = query(productCollection, where('category', '==', id))

      getDocs(q).then(snapchot =>
        {
  setProducto(snapchot.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        })
  
        .catch((error)=>{
          setError(error);
        })
  
        .finally(()=>{
  setLoading(false)
        });
    }


    else {

      getDocs(productCollection).then(snapchot =>
        {
  setProducto(snapchot.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        })
  
        .catch((error)=>{
          setError(error);
        })
  
        .finally(()=>{
  setLoading(false)
        });
    }

  

  }, [id]);
    
console.log(producto)


  return (
  <div>
    <ItemList producto = {producto}/>
  </div>

  )
}

export default ItemListContainer


