import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-950 mt-12'>
        <div className=' md:flex justify-between mx-20 pt-14'>
            <div>
                <img src="/image/Logo (1) 1.png" alt="" />
            </div>
            <div>
                <p className='text-2xl font-bold text-white'>DISCOVER DESTINATION</p>
                <p className='text-white'>Bali</p>
                <p className='text-white'>Karimun Jawa</p>
                <p className='text-white'>Jepara</p>
                <p className='text-white'>Lombok</p>
                <p className='text-white'>Yogyakarta</p>
                <p className='text-white'>Flores</p>
            </div>
            <div>
                <p className='text-2xl font-bold text-white'>CONTACT US</p>
                <p className='text-white'>24 Shipley St.Arvada, CO 80003</p>
                <p className='text-white'>09378493810</p>
                <p className='text-white'>TravelBuddy@gmail.com</p>
                 <div>
                <p className='pt-12 text-red-500'>Social Media</p>
                <img src="/image/Icon Footer.png" alt="" />
                
                
                </div>
            </div>
        </div>
        <div className='text-center bg-amber-900 h-12 text-2xl text-white pt-1'>
            <p>@Copyright 2022 TravelBuddy</p>
        </div>
      
    </div>
  )
}

export default Footer
