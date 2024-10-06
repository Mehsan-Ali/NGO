import { Box, Button, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { useState } from 'react'

const Contact = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        description: '',
    })

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormValues({
    //         ...formValues,
    //         [name]: value,
    //     })
    // }

    // console.log(formValues)


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (formValues.name === "" || formValues.description === "" || formValues.email === "" || formValues.subject === "") {
    //         alert("All Fields Are Required")
    //     }
    //     else {
    //         emailjs.sendForm('service_0x2vvym', 'template_65w2ucg', form.current, '17HgC8-UlxFnCNwqE').then(res =>
    //             alert('Email Sent Successfully')
    //         ).catch(err => console.log({ "Error": err }))
    //         setFormValues({
    //             name: "",
    //             email: "",
    //             description: "",
    //             subject: ""
    //         })
    //     }
    // }

    return (
        <div className='sm:px-20 px-5 overflow-hidden py-10'>
            <div className='flex justify-center items-center flex-col gap-3 py-20'>
                <span className='text-black font-semibold text-5xl'>Contact <span className='text-white bg-black px-2 '>Us</span>
                </span>
            </div>

            <div className='flex pb-10 justify-center gap-6 flex-wrap'>
                <div>
                    <Box
                        component="form"
                        className="flex flex-col gap-5"
                        noValidate
                        // onSubmit={handleSubmit}
                        ref={form}
                    >
                        <div className='flex justify-between gap-8'>
                            <TextField
                                label='Name'
                                name='name'
                                variant='outlined'
                                // onChange={handleChange}
                                // value={formValues.name}
                            />

                            <TextField
                                type='email'
                                label='Email'
                                name='email'
                                variant='outlined'
                                // onChange={handleChange}
                                // value={formValues.email}
                            />
                        </div>

                        <div>
                            <TextField
                                label='Subject'
                                name='subject'
                                variant='outlined'
                                fullWidth
                                // onChange={handleChange}
                                // value={formValues.subject}
                            />
                        </div>

                        <div>
                            <TextField
                                name='description'
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                // onChange={handleChange}
                                // value={formValues.description}
                            />
                        </div>
                        <Button
                            variant='contained'
                            type='submit'
                        >
                            Send Message
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Contact
