import React from 'react'

const Date_hero = () => {
  return (
    <div className='relative'>
      <div className='abslute border-2 bg-white  md:h-[160px] md:w-[995px] md:-mt-10 md:ml-[250px]'>
        <div className=' '>
          <button className='p-4 border-b-2 border-blue-600 ml-8'>Hotel</button>
          <button className='p-4'>Ticket</button>
          <button className='p-4'>Place</button>

        </div>
        <div className='px-4 md:flex md:pt-8 pt-8 md:ml-[-4px] ml- grid grid-row-3 gap-8 '>

          <select className='border-2 border-blue-700  outline-none  text-blue-600 md:w-[160px] h-10 '>
            <option className='md:ml-3 text-blue-600 px-2   '>Choose Place</option>
          </select>

          <button className='border-blue-600 border-2 md:flex flex md:pt-2 md:ml-2 text-blue-600 px-2 md:w-[160px] h-10 outline-none pt-2'>
            <span>Check in date</span>
            <span class="icon md:ml-4 ml-[210px] ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </span>
          </button>
          <button className='border-blue-600 border-2 md:flex flex md:pt-2 md:ml-2 text-blue-600 px-2 md:w-[160px] h-10 outline-none pt-2 '>
            <span>Check out date</span>
            <span class="icon md:ml-2 ml-[200px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </span>
          </button>

          {/* <input type="date" name="C heck in Date" className='ml-6 border-2 border-blue-700  outline-none'/>
                    <input type="date" value="Check out Date" className='ml-6 border-2 border-blue-700  outline-none'/> */}
          <select className=' border-2 border-blue-700  outline-none md:ml-2 text-blue-600 md:w-[160px] h-10'>
            <option className='md:ml-8 border-2 border-blue-700 px-11 text-blue-600'>Person</option>

          </select>
          <button className='bg-orange-500 w-24 h-10 ml-14 md:ml-1 text-white md:w-[150px] mb-4'>Search</button>
        </div>

      </div>
    </div>
  )
}

export default Date_hero
