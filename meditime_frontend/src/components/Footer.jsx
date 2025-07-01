import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -------Left Section-------- */}
            <div>
    <img className='mb-5 w-40' src={assets.logo} alt=''/>
    <p className='w-full md:w-2/3 text-gray-600 leading-6'>MediTime is about getting the right care at the right time.With the growing use of smartphones and internet connectivity across the country, we offer a user-friendly, mobile-first platform that simplifies the process of finding doctors, checking availability, and booking appointments all in just a few taps. </p>
            </div>
            {/* -------Center Section -------- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* -------Right Section-------- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul>
                    <li>+977 9849918515</li>
                    <li>sworupwork@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* --------Copyright Text----------*/}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright © 2024 MediTime - All Right Reserved.</p>

        </div>
    </div>
    
  )
}

export default Footer