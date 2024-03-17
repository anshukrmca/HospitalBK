import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div><Navbar /></div>
            <div className='mt-20 absolute w-full z-[-1] layoutDiv'>{children}</div>
           
        </>
    )
}

export default Layout