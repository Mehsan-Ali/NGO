import React from 'react'
// import Sociallogos from './Sociallogos'
import { NavLink } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Footer = () => {
    return (
        <div>
            <div className='py-20 bg-black'>
                <div className='flex sm:justify-around justify-start flex-wrap sm:mx-0 mx-10 gap-10'>

                    <div className='text-white max-w-[30rem]'>
                        <div className='flex items-center gap-3 py-5'>
                            {/* <Avatar src={Logo} style={{ height: '4rem', width: 'auto' }} /> */}
                            <h1 className='font-extrabold text-3xl py-2'>KIN<span className='text-slate-500 uppercase'>FOLK</span></h1>
                        </div>
                        <p className='text-[#a7a7a7]'>
                            Get ready to revolutionize your online presence with Awrex Ltd.! Say goodbye to digital chaos and hello to web wonders. Let’s elevate your digital game together, because settling for average is a thing of the past! Are you prepared to leave your competitors in awe?
                        </p>
                        <div className='my-5'>
                            {/* <Sociallogos /> */}
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 text-white'>
                        <h1 className='font-extrabold text-xl py-4'>Our Services</h1>
                        <ul className='flex flex-col gap-5 text-[#a7a7a7]'>
                            <NavLink to={'/about'} className='flex justify-start gap-2 items-center hover:text-white  hover:transition hover:ease-in hover:duration-300 hover:delay-150'>
                                <ArrowForwardIosIcon style={{ color: '#44bea1', fontSize: '15px' }} />
                                <li>Who We Are</li>
                            </NavLink>
                            <NavLink to={'/programs'} className='flex justify-start gap-2 items-center hover:text-white hover:transition hover:ease-in hover:duration-300 hover:delay-150 '>
                                <ArrowForwardIosIcon style={{ color: '#44bea1', fontSize: '15px' }} />
                                <li>Our Programs</li>
                            </NavLink>
                            <NavLink to={'/events'} className='flex justify-start gap-2 items-center hover:text-white hover:transition hover:ease-in hover:duration-300 hover:delay-150 '>
                                <ArrowForwardIosIcon style={{ color: '#44bea1', fontSize: '15px' }} />
                                <li>Events</li>
                            </NavLink>
                            <NavLink to={'/contact-us'} className='flex justify-start gap-2 items-center hover:text-white hover:transition hover:ease-in hover:duration-300 hover:delay-150 '>
                                <ArrowForwardIosIcon style={{ color: '#44bea1', fontSize: '15px' }} />
                                <li>Contact Us</li>
                            </NavLink>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3 text-white'>
                        <h1 className='font-extrabold text-xl py-4'>Contact Info</h1>
                        <ul className='flex flex-col gap-5 text-[#a7a7a7]'>
                            <NavLink>
                                <li>Feel Free to Contact Us</li>
                            </NavLink>
                            <NavLink className='flex justify-start items-center gap-3'>
                                <LocationOnIcon sx={{ color: '#44bea1' }} />
                                <li>Location</li>
                            </NavLink>
                            <NavLink className='flex justify-start items-center gap-3'>
                                <SendIcon sx={{ color: '#44bea1' }} />
                                <li>email@abcd.com</li>
                            </NavLink>
                            <NavLink className='flex justify-start items-center gap-3'>
                                <PhoneInTalkIcon sx={{ color: '#44bea1' }} />
                                <li>Phone number</li>
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-[#a7a7a7] bgFooterBack text-center py-5 sm:py-10 bg-black'>
                <span>© Kinfolk 2024. All Rights Reserved</span>
            </div>
        </div>

    )
}

export default Footer
