import React from 'react'
import Footer from './Footer'
import Bali_body from './Bali_body'
import Offered_body from './Offered_body'
const About_us = () => {
  return (
    <div>

      <div className='text-center pt-[120px]   bg-cover  h-72' style={{ backgroundImage: 'url(./image/mukesh.png)', height: "400px" }}>
        <p className='font-bold text-7xl md:text-8xl text-white '>About Us</p>
        <p className='mt-4 text-white'>TravelBuddy The best service travel</p>

      </div>
      <div className='md:flex md:pt-24 pt-12'>
        <div className='md:pl-[150px]'>
          <img src="/image/Group.png" alt="" className='w-[300px] mx-12 md:w-auto' />
        </div>
        <div className='md:w-[624px] md:pl-[200px]'>
          <p className='text-orange-800 mt-5 ml-6 md:-ml-8'>Who we are</p>
          <p className='text-5xl text-blue-950 mt-6 ml-6 md:-ml-6'>We love to discover Indonesia</p>
          <p className='text-slate-500 mx-6 md:-mx-6 mt-6'>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.
          </p>
          <p className='text-slate-500  mx-6 md:-mx-6 mt-4'>
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
