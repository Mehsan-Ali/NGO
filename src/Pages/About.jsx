import React from 'react'

const About = () => {
    return (
        <div className='mx-5 sm:mx-20 py-16'>
            <h1 className='text-4xl sm:text-5xl font-extrabold pb-20 text-center'>
                About Us - <span className='bg-black text-white px-2'> KINFOLK </span>
            </h1>
            <div className='grid gap-2'>
                <p className='text-2xl font-semibold'>
                    Empowering the Homeless, Inspiring Hope
                </p>
                <p>
                    At our NGO, we are dedicated to transforming the lives of homeless children and marginalized individuals living in poverty. Our mission is to provide immediate relief, long-term support, and sustainable solutions that uplift the most vulnerable members of society.                </p>
            </div>
            <div className='grid gap-2 py-5'>
                <span className='text-2xl font-semibold'>
                    A Future for Every Child and Person in Need
                </span>
                <p>
                    As a dedicated optics store, we understand the significance of sunglasses beyond being a mere accessories. Sunglasses are essential for safeguarding your eyes from harmful UV rays while enhancing your look. That's why we are committed to offering a thoughtfully curated collection that not only elevates your style but also provides optimal eye protection.
                </p>
            </div>

            <div className='grid gap-2 py-5'>
                <span className='text-2xl font-semibold'>
                    Transforming Lives: Hope for Homeless Children and Vulnerable Communities
                </span>
                <p>
                    We focus on offering safe shelter, nutritious meals, healthcare, and educational opportunities to children and families who lack access to basic needs. In addition, we work with people experiencing homelessness and poverty to offer skill development programs, mental health support, and pathways to self-sufficiency.
                </p>
            </div>

            <div className='grid gap-2 py-5'>
                <span className='text-2xl font-semibold'>
                    Breaking the Cycle of Homelessness and Poverty
                </span>
                <p>
                    Through collaboration with local communities, volunteers, and partner organizations, we aim to create a world where every child and individual, regardless of their circumstances, can thrive with dignity and hope.
                </p>
            </div>
        </div>
    )
}

export default About
