import React from 'react'

const Offered_body = () => {
  return (
    <div>
        <div>
            <div className=' text-center md:pt-12 pt-14'>
                <p className='font-bold text-6xl text-blue-800'>We offered best services</p>
                <p className='text-xl pt-4 text-slate-500'>The Best Service</p>
            </div>
            <div className='md:flex pt-12 justify-between px-12'>
            <div>
                <img src="/image/img-card-tsp-03.png" alt="" />
                <p className='text-xl pt-3'>Transportation</p> 
                <p className='text-slate-400'>All transportation cost we bear</p>
            </div>
            <div>
                <img src="/image/img-card-tsp-03 (1).png" alt="" />
                <p className='text-xl pt-3'>Guidence</p>
                <p className='text-slate-400'>We offer the best guidence for you</p>
            </div>
            <div>
                <img src="/image/img-card-tsp-03 (2).png" alt="" />
                <p className='text-xl pt-3'>Accommodation</p>
                <p className='text-slate-400'>Luxarious and comfortable</p>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Offered_body
