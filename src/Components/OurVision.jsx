import React from 'react'
import { NavLink } from 'react-router-dom'

const OurVision = () => {
    return (
        <div className='flex justify-between md:flex-nowrap flex-wrap gap-x-5 px-10 py-20'>
            <div className='p-16 flex max-w-[40rem] flex-col gap-4 border-b-4 bg-[#fafafa] border-[#67bdb0]'>
                <h1 className='text-4xl font-semibold'>Our Vision</h1>
                <p className='text-2xl text-gray-700'>The welfare of the children is in our hands. Let’s help together!</p>
                <div className='text-start pt-5 text-lg font-semibold'>
                    <NavLink to={'/about'}>
                        <button className='border-b-2 border-black'>About Us</button>
                    </NavLink>
                </div>
            </div>
            <div className='p-16 flex flex-col max-w-[40rem] gap-4 border-b-4 bg-[#fafafa] border-[#f5dd84]'>
                <h1 className='text-4xl font-semibold'>Our Mission</h1>
                <p className='text-2xl text-gray-700'>We help everyone from the homeless to the dependent, from the convicted to the deceived</p>
                <div className='text-start pt-5 text-lg font-semibold'>
                    <NavLink to={'/contact-us'}>
                        <button className='border-b-2 border-black'>Contact Us</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default OurVision