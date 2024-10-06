import React from 'react'
import PoorChild from '../assets/Poor5.jpg'

const Tender = () => {
    return (
        <div className='flex lg:flex-nowrap flex-wrap justify-between items-center p-10 gap-10'>
            <div>
                <span className='text-gray-500 text-base sm:text-lg font-semibold uppercase'>About Us</span>
                <div className='flex flex-col gap-5'>
                    <p className='text-3xl sm:text-4xl font-semibold'>We are tender heart charity foundation.</p>
                    <p className='text-lg sm:text-2xl'>The charitable foundation is created by people who know from their own experience about life’s difficulties. We want to return faith in good and give hope to those in need.</p>
                </div>
            </div>
            <div className='max-w-[40rem]'>
                <img src={PoorChild} alt="" className='border-[1.5rem] border-[#67bdb0] rounded-tl-[10rem] rounded-br-[10rem]' />
            </div>
        </div>
    )
}

export default Tender