import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
function NavBar() {
    return (
        <>
         <div className="links flex items-center justify-between bg-gray-500 w-full h-14 gap-4 text-white p-9 text-xl">
                <Link to={'/'} className='text-4xl font-bold font-sans mb-3'>goodChoice</Link>
                <div className='flex gap-4'>
                <Link to={'/'}>Shop</Link>
                <Link to={'/cart'}><ShoppingCart size={32} /></Link>
                </div>
                
        </div>
        </>
    )
}

export default NavBar