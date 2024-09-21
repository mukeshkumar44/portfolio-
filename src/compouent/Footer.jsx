import React from 'react'

const Footer = () => {
    return (
        <div className='bg-blue-900 mt-12'>
            <div className=' md:flex justify-between md:mx-20 pt-12 mb-9'>
                <div className='w-[350px] mx-6 md:-mx-0'>
                    <img src="/image/Logo (1) 1.png" alt="" />
                </div>
                <div className=' mx-14 md:-mx-0' >
                    <p className='text-2xl font-bold text-white mt-8 md:mt-4 '>DISCOVER DESTINATION</p>
                    <p className='text-white'>Bali</p>
                    <p className='text-white'>Karimun Jawa</p>
                    <p className='text-white'>Jepara</p>
                    <p className='text-white'>Lombok</p>
                    <p className='text-white'>Yogyakarta</p>
                    <p className='text-white'>Flores</p>
                </div>
                <div className=' mx-14 md:-mx-0'>
                    <p className='text-2xl font-bold text-white mt-8 md:mt-4'>CONTACT US</p>
                    <p className='text-white'>24 Shipley St.Arvada, CO 80003</p>
                    <p className='text-white'>09378493810</p>
                    <p className='text-white'>TravelBuddy@gmail.com</p>
                    <div>
                        <p className='pt-12 text-red-500'>Social Media</p>
                        <img src="/image/Icon Footer.png" alt="" />


                    </div>
                </div>
            </div>
            <div className='text-center bg-blue-950 h-12 text-2xl text-white pt-1'>
                <p>@Copyright 2022 TravelBuddy</p>
            </div>

        </div>
    )
}

export default Footer
