import React from 'react'
import Spinner from '../component/Spinner/Spinner'

const Layout = ({children}) => {
  return (
    <>
        <Spinner />
        {children}     
    </>
  )
}

export default Layout