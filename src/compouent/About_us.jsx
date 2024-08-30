import React from 'react'
import Footer from './Footer'
import Bali_body from './Bali_body'
import Offered_body from './Offered_body'
const About_us = () => {
  return (
    <div>

      <div className='text-center pt-[120px]   bg-cover  h-72' style={{ backgroundImage: 'url(./image/mukesh.png)', height: "400px" }}>
        <p className='font-bold text-8xl text-white '>About Us</p>
        <p className='mt-4 text-white'>TravelBuddy The best service travel</p>

      </div>
      <div className='md:flex pt-24'>
        <div className='pl-[150px]'>
          <img src="/image/Group.png" alt="" />
        </div>
        <div className='w-[624px] pl-[200px]'>
          <p className='text-orange-800'>Who we are</p>
          <p className='text-5xl text-blue-950 mt-6'>We love to discover Indonesia</p>
          <p className='text-slate-500 mt-6'>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.
          </p>
          <p className='text-slate-500 mt-4'>
            Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.
            </p>
        </div>
      </div>
      <Bali_body/>
      <Offered_body/>
      {/* <Footer/> */}
    </div>
  )
}

export default About_us
