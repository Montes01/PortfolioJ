import React from 'react'

export const NavBar = ({children}) => {
  return (
    <nav className='border-x flex justify-around items-center w-2/6 h-full bg-green-600'>
        <ul className='flex justify-around w-full'>
            {children}
        </ul>
    </nav>
  )
}
