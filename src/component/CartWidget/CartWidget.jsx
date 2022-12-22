import React from 'react'
import carro from '../../images/carritoNew.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = (props) => {

  const {count} = props;




  return (
    <div  className='d-flex'>
       <Link to={`/carrito/detail`}> <img className='tamanio' src= {carro} alt="carrito" /> </Link>        
         <h5 className='color'>{count}</h5>   
    </div>
  )

}

export default CartWidget