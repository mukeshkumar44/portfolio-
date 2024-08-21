import React from 'react'
import './Hero.css'
// import image from '/compouent/banner_bg 1.png'
const Hero = () => {
  return (
    <div className= "mukesh border-4 text-center h-722  w-100 ">
        
           <div className='justify-center'>
                <p className='font-bold text-6xl pt-44 text-white '>Travel Buddy</p>
                <p className='text-xl pt-6'>Let’s start your journey with us, your dream will come true</p>
                <button className='bg-red-500 mt-10 w-40 h-14 font-bold text-white '>Discover Now</button>
             {/* <img src="/image/banner_bg 1.png" alt="" className=''/> */}
             </div>
      
    </div>
  )
}

export default Hero
