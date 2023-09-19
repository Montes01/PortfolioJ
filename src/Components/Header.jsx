import React from 'react'
import { NavBar } from './NavBar'
import {NavLink} from 'react-router-dom'
export const Header = () => {
  return (
    <header className='h-[10%] items-center flex pl-12 w-screen justify-between  bg-gray-600 text-white'>
        <h1 className='font-serif'>Juan Esteban</h1>
        <NavBar>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/"}>About</NavLink></li>
            <li><NavLink to={"/Shop"}>Shop</NavLink></li>
        </NavBar>
    </header>
  )
}
