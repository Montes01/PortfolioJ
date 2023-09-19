import { useState } from "react";
import { createContext } from "react";
const productContext =  createContext([]);


export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    return (
        <productContext.Provider value={{
            products,
            setProducts
        }}>
            {children}
        </productContext.Provider>
    )
}





export default productContext;