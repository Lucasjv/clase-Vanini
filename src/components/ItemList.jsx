import React from 'react'
import Item from './Item'

const ItemList = ({producto}) => {
  return (

    <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {producto.map(prod => <Item key={prod.id} prod={prod}/>)}
       
    </div>
  )
}

export default ItemList

