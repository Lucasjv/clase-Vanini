import React from 'react'
import Item from './Item'

const ItemList = ({producto}) => {
  return (

    <div >
        {producto.map(prod => <Item key={prod.id} prod={prod}/>)}
       
    </div>
  )
}

export default ItemList