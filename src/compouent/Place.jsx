import React from 'react'

const Place = () => {
    return (
        <div>
            <div className='text-center pt-[120px]   bg-cover  h-72' style={{ backgroundImage: 'url(./image/mukesh.png)', height: "400px" }}>
                <p className='font-bold text-8xl text-white '>Places</p>
                <p className='mt-4 text-white'>The best places for you
                </p>
            </div>
            <div>
                <div className='text-center pt-8'>
                    <p className='text-4xl text-blue-800'>Places</p>
                    <p className='text-slate-500'>The Best Place to Stay in Indonesia</p>
                </div>
                <div >
                    <div className='md:flex md:ml-[90px] pt-14 w-[300px] md:w-auto mx-12'>
                        <img src="/image/img-box-02.png" alt="" className='' />
                        <img src="/image/img-box-02 (1).png" alt="" className='md:ml-10 mt-10 md:-mt-0' />
                    </div>
                    <div className='md:flex md:ml-[90px] pt-10 w-[300px] md:w-auto mx-12'>
                        <img src="/image/img-box-02 (2).png" alt="" />
                        <img src="/image/img-box-place.png" alt="" className='md:ml-10 mt-10 md:-mt-0' />
                    </div>
                    <div className='md:flex md:ml-[90px] pt-10 w-[300px] md:w-auto mx-12'>
                        <img src="/image/img-box-02 (2).png" alt="" />
                        <img src="/image/img-box-place.png" alt="" className='md:ml-10 mt-10 md:-mt-0' />
                    </div>
                    <div className='md:flex md:ml-[90px] pt-10 w-[300px] md:w-auto mx-12'>
                        <img src="/image/img-box-02 (2).png" alt="" />
                        <img src="/image/img-box-place.png" alt="" className='md:ml-10 mt-10 md:-mt-0' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Place
