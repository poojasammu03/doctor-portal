import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 text-gray-500'>
        <p >CONTACT <span className='text-gray-700 font-semi-bold '>US</span></p>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[260px]' src={assets.contact_image} alt="" />
 
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semi-bolt text-lg text-gray-500'>Our OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station Suite 350,<br /> Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555‑0132 <br />Email: demo@gmail.com</p>
          {/* <p >Careers at PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button> */}

        </div>

    </div>
    </div>
    
  )
}

export default Contact