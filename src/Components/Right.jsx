import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Comprar } from './Comprar'
export const Right = () => {
  return (
    <aside className='border border-t-transparent w-2/6 bg-green-600'>
        <Routes>
            <Route path='/' element={null}/>
            <Route path='/Shop' Component={Comprar}/>
        </Routes>

    </aside>
  )
}
