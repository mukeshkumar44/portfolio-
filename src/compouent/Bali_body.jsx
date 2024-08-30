import React from 'react'
import './Bali_body.css'
const Bali_body = () => {
  return (
    <div className='verma  pt-32 mt-20 '>
      <div className='md:w-[550px] w-[270px] bg-slate-50 md:ml-[750px] md:pt-4 md:px-6 ml-[55px] px-3'>

        <p className='text-red-500 pt-3'>Upcoming Event</p>
        <p className='font-bold text-cyan-600 text-2xl pt-4'>Bali - Indonesia</p>
        <p className='pt-4 text-slate-500'>Waters make fish every without firmament saw had. Morning
          air subdue. Our, air very one. Whales grass is fish whales
          winged.</p>
        <p className='pt-4'>date : 12 Aug 2020</p>
        <p className='pt-4'>cost : Start from Rp3000.000,00</p>
        <p className='pt-4'>organizer : TravelBuddy</p>
        <div className='md:flex '>
          <p className='pt-4'>Rating : </p>
          <img src="/image/Star-rating.png" alt="" className='pt-3 ml-3' />

        </div>
        <button className='bg-orange-600 h-12 w-44 mb-4 mt-4 text-white'>Plan Detail</button>
      </div>

      <div className='md:flex justify-between md:px-12 md:mt-[-200px] ml-[100px] pt-10' >
        <button className='w-16 h-16  rounded-full bg-slate-300 justify-between' ><img src="/image/Vector 3 (1).png" alt="" className='text-orange-500 ml-5' /></button>

        <button className='w-16 h-16  rounded-full bg-slate-300 justify-between ml-10' ><img src="/image/Vector 3.png" alt="" className='text-orange-500 ml-7 ' /></button>
      </div>

    </div>
  )
}

export default Bali_body
