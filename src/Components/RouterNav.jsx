import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ResponsiveAppBar from './Navbar'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Programs from '../Pages/Programs'
import Events from '../Pages/Events'
import Donate from '../Pages/Donate'

const RouterNav = () => {
    return (
        <div>
            <ResponsiveAppBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact-us' element={<Contact/>}/>
                <Route path='/programs' element={<Programs/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/donate' element={<Donate/>}/>
            </Routes>
        </div>
    )
}

export default RouterNav