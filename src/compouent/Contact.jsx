import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='text-center pt-[120px]   bg-cover  h-72' style={{ backgroundImage: 'url(./image/mukesh.png)', height: "400px" }}>
        <p className='font-bold text-8xl text-white '>Contact</p>
        <p className='mt-4 text-white'>Critics and recomendation for us</p>
      </div>
      <div className='md:pt-20 mt-10 mx-5 md:ml-[85px]'>
        <img src="/image/Rectangle.png" alt="" />

      </div>
      <div className='md:flex'>
        <div className='md:ml-[85px]'>
          <p className='md:mt-20 mt-10 text-2xl text-blue-950 font-semibold ml-8 md:-ml-0'>Get in touch</p>
          <textarea name="Enter message" placeholder="Enter message" id="" className='border-2 border-slate-400 outline-none w-[330px] h-[110px] md:w-[745px] md:h-[200px] mt-3 pt-3 pl-3 mx-8  md:-mx-0'></textarea>
          <div>
            <input type="text" name="" placeholder='Enter your name' id="" className='border-2 border-slate-400 outline-none w-[330px] md:w-[350px] h-[60px] mt-10  pl-2 mx-8 md:-mx-0' />
            <input type="text" name="" placeholder='Enter your email' id="" className='border-2 border-slate-400 outline-none w-[330px] md:ml-10 md:w-[353px] h-[60px] mt-10 mx-8 md:-mx-0  pl-3' />
          </div>
          <div>
            <input type="text" placeholder='Enter your subject' className='border-2 border-slate-400 outline-none md:w-[745px] h-[60px] mt-10 w-[330px] mx-8 md:-mx-0 pl-3' />

          </div>
          <button className='bg-orange-600 mt-10 h-12 w-56 text-white ml-8 md:-ml-0'>SEND MESSAGE</button>
        </div>

        <div className=' ml-8 md:ml-10 md:mt-[130px] mt-10'>
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
