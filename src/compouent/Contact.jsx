import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='text-center pt-[120px]   bg-cover  h-72' style={{ backgroundImage: 'url(./image/mukesh.png)', height: "400px" }}>
        <p className='font-bold text-8xl text-white '>Contact</p>
        <p className='mt-4 text-white'>Critics and recomendation for us</p>
      </div>
      <div className='pt-20 ml-[85px]'>
        <img src="/image/Rectangle.png" alt="" />

      </div>
      <div className='flex'>
        <div className='ml-[85px]'>
          <p className='mt-20 text-2xl text-blue-950 font-semibold'>Get in touch</p>
          <textarea name="Enter message" placeholder="Enter message" id="" className='border-2 border-slate-400 outline-none w-[745px] h-[200px] mt-3 pt-3 pl-3 '></textarea>
          <div>
            <input type="text" name="" placeholder='Enter your name' id="" className='border-2 border-slate-400 outline-none w-[350px] h-[60px] mt-10  pl-2' />
            <input type="text" name="" placeholder='Enter your email' id="" className='border-2 border-slate-400 outline-none ml-10 w-[353px] h-[60px] mt-10  pl-3' />
          </div>
          <div>
            <input type="text" placeholder='Enter your subject' className='border-2 border-slate-400 outline-none w-[745px] h-[60px] mt-10  pl-3' />

          </div>
          <button className='bg-orange-600 mt-10 h-12 w-56 text-white '>SEND MESSAGE</button>
        </div>

        <div className=' ml-10 mt-[130px]'>
          <img src="/image/Home.png" alt=""  className=' pt-'/>
          <p className='ml-16 mt-[-45px]'>Semarang, Jawa Tengah</p>
          <p className='ml-16 text-slate-500'>Indonesia</p>
          <img src="/image/iPhone.png" alt=""  className=' pt-3'/>
          <p className='ml-16 mt-[-45px]'>(024) 123981240</p>
          <p className='ml-16 text-slate-500'>Mon to Fri 9am to 6pm</p>
          <img src="/image/Mail.png" alt="" className=' pt-3'/>
          <p className='ml-16 mt-[-45px]'>TravelBuddy@gmail.com</p>
          <p className='ml-16 text-slate-500'>Send us your query anytime!</p>
        </div>
        <div>
          
        </div>
      </div>


    </div>
  )
}

export default Contact
