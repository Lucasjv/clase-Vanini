import React from 'react'
import './ItemListContainerStyle.css'

function ItemListContainer({ greetings }) {
  return (
    <div className='Greetings'>
    <h1 className='MyH1'>{greetings}</h1>
    </div>

  )
}

export default ItemListContainer