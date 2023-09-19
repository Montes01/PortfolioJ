import React from 'react'
import productContext from './Helper/ProductContext'
import { useContext } from 'react'


const getAllProducts = async () => {
    const list = await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())

    return list
}

export const Comprar = () => {
    const {setProducts} = useContext(productContext)
    const handleClick = async () => {
        setProducts(await getAllProducts())
    }


  return (
    <section className='grid place-content-center h-full'>
        <h2 className='text-white font-bold text-clip text-3xl'>Bienvenido a mi tienda</h2>
        <button onClick={handleClick} className='bg-white text-black font-bold py-2 px-4 rounded-md mt-4'>ver Productos</button>
    </section>
  )
}
