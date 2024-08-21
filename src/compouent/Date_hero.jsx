import React from 'react'

const Date_hero = () => {
  return (
    <div className='relative'>
       <div className='abslute border-2 bg-white  h-[130px] w-[772px] -mt-10 md:ml-[300px]'>
            <div className=' '>
                <button className='p-4'>Hotel</button>
                <button className='p-4'>Ticket</button>
                <button className='p-4'>Place</button>
                                     
            </div>
            <div className='px-10 '>
               
                    <select className='border-2 border-blue-700  outline-none'>
                        <option className='ml-3  '>Choose Place</option>
                    </select>
                    <input type="date" name="Check in Date" className='ml-6 border-2 border-blue-700  outline-none'/>
                    <input type="date" value="Check out Date" className='ml-6 border-2 border-blue-700  outline-none'/>
                    <select className=' border-2 border-blue-700  outline-none ml-6'>
                        <option className='ml-8 border-2 border-blue-700  outline-none'>Person</option>
                        
                    </select>
                    <button className='bg-red-600 w-24 h-10 ml-6'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Date_hero
