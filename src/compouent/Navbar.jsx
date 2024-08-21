import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <div className='md: flex  items-center h-28 justify-between px-6'>
        <div>
          <img src="/image/Logo.png" alt="" className='h-12 w-30  ' />

        </div>
        <div className='align-center flex '>
        {props.data.map((item)=>{
          
          return (
           <button className='md:flex hidden p-2 items-center text-slate-500'>{item}</button>
          )
        })}
        </div>
        <div>
          <button className='bg-orange-600 w-32 h-10 hover:bg-slate-800 hover:text-yellow-500 font-bold '>Book Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
