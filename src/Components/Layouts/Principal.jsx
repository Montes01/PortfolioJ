import { Header } from "../Header"
import { Left } from "../Left"
import Computer from "../../../public/Images/Computer.svg"
import { Right } from "../Right"
import { ProductProvider } from "../Helper/ProductContext"
import { Routes, Route } from 'react-router-dom'

const imgCenter = (<img src={Computer} className="absolute w-[35%]  left-[52.6%] bottom-0" alt="" />)

export const Principal = () => {
    return (
        <div className="h-screen flex flex-col justify-between">
            <Header />
            <main className="relative flex w-screen justify-between pl-12 h-[90%] bg-gray-600">
                <ProductProvider>
                    <Left />
                    <Right />
                </ProductProvider>
                <Routes>
                    <Route path="/" element={imgCenter} ></Route>
                </Routes>
            </main>

        </div>
    )
}
