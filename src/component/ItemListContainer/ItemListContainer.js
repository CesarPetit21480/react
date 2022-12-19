import React from 'react'
import { useParams } from 'react-router';
import Card from '../Card/Card';


const ItemListContainer = (props) => {

const {bienvenida,nombre,descripcion} = props;
const { categoria } = useParams();

console.log('cat',categoria);


  return (
    <div>      
        <h1>{bienvenida}</h1>
        <h2>{nombre}</h2>
        <h2>{descripcion}</h2>
        <Card  cate={categoria}/>
    </div>
  )
}

export default ItemListContainer