import React from 'react'
import Card from '../Card/Card';


const ItemListContainer = (props) => {

const {bienvenida,nombre,descripcion} = props;


  return (
    <div>      
        <h1>{bienvenida}</h1>
        <h2>{nombre}</h2>
        <h2>{descripcion}</h2>
        <Card/>
    </div>
  )
}

export default ItemListContainer