import React from 'react'
import "./style.css"

const Statistics = () => {
    return (
        <div className='bg-ground px-10'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lg sm:text-2xl uppercase text-white pt-10'>Some Statistic</p>
                <h1 className='max-w-[45rem] text-center py-2 text-4xl sm:text-5xl font-extrabold text-white'>
                    Some statistics that we want to show our viewers.
                </h1>
            </div>
            <div className='flex flex-wrap gap-10 text-center py-20 text-white justify-around items-center'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-7xl font-semibold'>200+</h1>
                    <p className='text-2xl font-semibold'>Closed projects</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-7xl font-semibold'>47bil</h1>
                    <p className='text-2xl font-semibold'>Dollars we collected</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-7xl font-semibold'>180k</h1>
                    <p className='text-2xl font-semibold'>People we helped</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics