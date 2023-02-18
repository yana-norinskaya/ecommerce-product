import { FC } from 'react';

export const InfoProduct: FC = () => {
    return (
        <>
            <h2 className='text-orange-950 font-bold text-ms'>SNEAKER COMPANY</h2>
            <h1 className='font-bold mt-3 mb-3 text-5xl'>Fall Limited Edition Sneakers</h1>
            <p className='text-ms text-gray-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everything the weather
                can offer.</p>
            <div className='flex mt-3 items-center'>
                <p className='font-bold text-2xl mr-3'>$125.00</p>
                <p className='font-bold text-ms w-1/7 bg-orange-100 text-orange-950 p-1 rounded-lg'>50%</p>
            </div>
            <p className='font-bold text-ms line-through text-gray-400'>$250.00</p>
        </>
    )
}