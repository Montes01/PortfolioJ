import React from 'react'
import { Product } from './Helper/Product'

import productContext from './Helper/ProductContext'
import { useContext } from 'react'
import { useState } from 'react'


export const Shop = () => {
    const {products} = useContext(productContext)
    const [description, setDescription] = useState("")
    return (
        <>
            <section className='p-5 w-5/6 gap-2 h-3/6 bg-gray-600 rounded-xl flex flex-wrap overflow-y-scroll justify-around'>
                {products.map(product => <Product src={product.image} desc={product.description} title={product.title} setDescription={setDescription}/>)}
            </section>
            <section className='p-5 w-5/6 h-1/6 bg-gray-600 rounded-xl overflow-y-scroll text-white'>
                <p>{description}</p>
            </section>
        </>
    )
}
