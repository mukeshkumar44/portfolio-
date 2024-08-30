import React from 'react'
import Top_body from './Top_body'
import { arr3 , arr33 , arr333} from './Helper'
import Bali_body from './Bali_body'
import Offered_body from './Offered_body'
const Packages = () => {
  return (
    <div>
        <div className='text-center pt-[120px]   bg-cover  h-72' style={{ backgroundImage: 'url(./image/mukesh.png)', height: "400px" }}>
            <p className='font-bold text-8xl text-white '>Packages</p>
            <p className='mt-6 text-white'>TravelBuddy The best service travel</p>
        </div>
        <Top_body data1={arr3} data2={arr33} data3={arr333}/>
        <Bali_body/>
        <Offered_body/>
      
    </div>
  )
}

export default Packages
