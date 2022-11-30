import React from 'react'
import carro from '../../images/carritoNew.png'
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='d-flex'>
         <img className='tamanio' src= {carro} alt="carrito" /> 
         <h5 className='color'>3</h5>
         
          
    </div>
  )

}

export default CartWidget