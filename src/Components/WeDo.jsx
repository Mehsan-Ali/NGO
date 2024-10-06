import React from 'react'
import Volunteer from '../assets/Volunter.jpg'
import DoneIcon from '@mui/icons-material/Done';

const WeDo = () => {
    return (
        <div className='flex lg:flex-nowrap flex-wrap justify-between items-center px-10 py-20 gap-10'>
            <div className='max-w-[40rem]'>
                <img src={Volunteer} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-gray-500 text-base sm:text-lg font-semibold uppercase'>What We do</p>
                <div className=''>
                    <h1 className='text-3xl sm:text-4xl font-semibold'>We do it for all people.</h1>
                    <p className='text-lg sm:text-2xl'>Thirteen programs of the charitable foundation include the main areas of assistance.</p>
                    <ul className='text-2xl flex flex-col gap-5 py-10'>
                        <li><DoneIcon sx={{ color: 'skyblue' }} /> Medicine help</li>
                        <li><DoneIcon sx={{ color: 'skyblue' }} /> We build and create</li>
                        <li><DoneIcon sx={{ color: 'skyblue' }} /> Water delivery</li>
                        <li><DoneIcon sx={{ color: 'skyblue' }} /> We care about</li>
                        <li><DoneIcon sx={{ color: 'skyblue' }} /> Education help</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WeDo