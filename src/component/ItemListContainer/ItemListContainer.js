import React from 'react'

const ItemListContainer = (props) => {

const {bienvenida,nombre} = props;

  return (
    <div>
        <h1>{bienvenida}</h1>
        <h2>{nombre}</h2>
    </div>
  )
}

export default ItemListContainer