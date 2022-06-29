import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore } from 'firebase/firestore';





const ItemDetailContainer = () => {

const [loading, setLoading] = useState(true);
  const [errorDetail, seterrorDetail] = useState(false);
  const [detail, setDetail] = useState({});
const {id} = useParams();



  useEffect(() => {

const db = getFirestore();
const productRef = doc(db, 'Productos', id);

getDoc(productRef).then((snapshot) => {

  setDetail({...snapshot.data(), id: snapshot.id});
  


})

.catch((errorDetail)=>
{seterrorDetail(errorDetail)})

.finally(()=>{
  setLoading(false)
})
}, [id]);


console.log(detail)
console.log(id)

return (
  
  <div>
  { <ItemDetail detalles = {detail}/>}
  </div>

)

}

export default ItemDetailContainer