import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  let arr1 = ["Home", "About", "Packages", "Places", "Contact"];

  return (
    <div>
      <div className='md: flex  items-center h-28 justify-between px-6'>
        <div>
          <img src="/image/Logo.png" alt="" className='h-12 w-30  ' />

        </div>
        <div className='align-center flex '>
        {arr1.map((item)=>{
          
          return (
           <Link to={`${item}`} className='md:flex hidden p-2 items-center text-slate-500'>{item}</Link>
          )
        })}
        </div>
        <div>
          <button className='bg-orange-600 w-32 h-10 text-white hover:bg-slate-800 hover:text-yellow-500 font-bold hidden md:block '>Book Now</button>
        </div>
        <div className='md:hidden'>
        <a className='text-5xl' href="#">&#8801;</a>
      </div>
      </div>
     
      
    </div>
  )
}

export default Navbar
