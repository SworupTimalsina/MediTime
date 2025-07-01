import React from 'react'
import { assets} from '../assets/assets'

const AboutUs = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-medium'> US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]'src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to MediTime Your Companion in Smarter Healthcare Access At MediTime, we recognize the everyday challenges individuals across Nepal face in accessing timely and reliable healthcare. From the shortage of medical professionals to the difficulties posed by geography and outdated manual systems, getting the right care at the right time can be frustrating and inefficient.</p>
          <p>MediTime is built to change that. With the growing use of smartphones and internet connectivity across the country, we offer a user-friendly, mobile-first platform that simplifies the process of finding doctors, checking availability, and booking appointments all in just a few taps.</p>
          <b className='text-gray-800'>Our Commitment </b>
          <p>MediTime is dedicated to leveraging technology to transform the way people interact with healthcare services. We are continuously evolving to meet the needs of our users, ensuring an organized, accessible, and efficient system that empowers patients and providers alike.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20m'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer'>
  <b>Efficiency:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer'>
 <b>Convenience:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer'>
 <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
