import React from 'react'

const Place_body = (props) => {
  return (
    <div className=' text-center'>
      
      <div>
        <p className='text-6xl text-blue-800 font-bold pt-16'>Top Places to visit</p>
        <p className='pt-3 text-zinc-500'>The Best Place to Stay in Indonesia</p>
      </div>
      <div className=' md:flex md:justify-between px-16 pt-16' >
      {props.data.map((item)=>{
          
          return (
           <img src={item.img} alt=""  className=' md:flex mt-7'/>
          )
      })
      }
      </div>
      <div className='md:flex md:justify-between px-16 pt-16' >
      {props.data2.map((item)=>{
          
          return (
           <img src={item.img} alt=""  className=' md:flex mt-7  '/>
          )
      })
      }
      </div>
      <div className='text-center pt-16'>
        <button className='bg-orange-600 h-12 w-36  text-zinc-100'>Discover More</button>
      </div>
    </div>
  )
}

export default Place_body

