
import { Routes, Route } from 'react-router-dom'
import { Shop } from './Shop'
export const Left = () => {


    return (
        <main className='border border-r-0 w-2/6 flex-grow flex justify-center flex-col gap-10 items-center bg-gray-900'>
            <Routes>

                <Route path='/' element={<>
                    <h2 className='text-white text-3xl font-bold'>
                        <span className='text-blue-500'>H</span>ola
                    </h2>
                    <h2 className='text-white text-3xl font-bold max-w-[20ch] font-mono'>Soy un desarrollador front end que hara que tu web sea mucho mejor de lo que ya es, contactame ahora</h2>
                </>
            }>
                </Route>
                <Route path='/Shop' Component={Shop}></Route>



            </Routes>


        </main>
    )
}
