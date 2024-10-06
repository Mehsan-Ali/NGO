import React from 'react'
import MainLanding from '../assets/Landing2.jpg'
import ResponsiveAppBar from './Navbar'
import { NavLink } from 'react-router-dom'


const LandingPage = () => {
    return (
        <div>
            <div>
                <img src={MainLanding} alt="" className='' />
            </div>
            <div className='absolute top-14 sm:top-[30%] left-5 sm:left-24 text-white'>
                <div className=''>
                    <h1 className='font-extrabold sm:text-8xl text-2xl max-w-[20rem] sm:max-w-[50rem]'>Give a helping hand to those who need it!</h1>
                    <p className='text-base sm:text-3xl font-semibold max-w-[20rem] sm:max-w-[40rem] pt-5'>When a child gets access to good food, it can change just about everything.</p>
                </div>
                <NavLink to={'/about'}>
                    <button className='px-5 sm:px-16 py-2 sm:py-5 bg-[#fede67] font-semibold text-base sm:text-xl text-gray-700 my-5 rounded-3xl'>
                        About Us
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingPage
