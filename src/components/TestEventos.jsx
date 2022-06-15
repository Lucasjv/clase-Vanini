import React from 'react'




export default function TestEventos() {

function HandelClik (e, id) {
    console.log(e)
    alert ("click en: " + id)

}



  return (
    <div onKeyDown={HandelClik}>TestEventos</div>
  )
}
