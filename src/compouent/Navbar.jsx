
import React, { useState } from 'react'

import { Link } from 'react-router-dom';
const Navbar = () => {
  // let arr1 = ["Home", "About", "Packages", "Places", "Contact"];
  const [count, setCount] = useState();
  const arr1 = ["Home", "About", "Packages", "Places", "Contact"];

  const btn = () => {
    setCount(!count);
  };


  return (
    <div>
      <div className='md: flex  items-center h-28 justify-between px-6'>
        <div>
          <img src="/image/Logo.png" alt="" className='h-12 w-30  ' />

        </div>
        <div className='align-center flex '>
          {arr1.map((item) => {

            return (
              <Link to={`/${item}`} className='md:flex hidden p-2 items-center text-slate-500'>{item}</Link>
            )
          })}
        </div>
        <div>
          <button onClick={btn} className='bg-orange-600 w-32 h-10 text-white hover:bg-slate-800 hover:text-yellow-500 font-bold hidden md:block '>Book Now</button>
        </div>
        <div className='md:hidden'>
          <a onClick={btn} className='text-5xl' href="#">&#8801;</a>
          

        </div>

      </div>
      {count && (
        <div className='md:hidden flex flex-col items-center bg-gray-200'>
          {arr1.map((item) => (
            <Link
              key={item}to={`/${item}`}className='p-2 text-slate-500'onClick={btn} >{item}
            </Link>
          ))}
          <button
            className='bg-orange-600 w-32 h-10 text-white hover:bg-slate-800 hover:text-yellow-500 font-bold'onClick={btn}>Book Now
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
