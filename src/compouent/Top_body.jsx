import React from 'react'

const Top_body = (props) => {
  return (
    <div className=''>
        <div className='text-center mt-16'>
            <p className='font-bold text-6xl text-blue-900'>Top Hotel & Restorants</p>
            <p className='pt-6 text-slate-500'>The Best Hotel & Restorants in Indonesia</p>
        </div>
        <div  className='flex flex-row justify-between px-10 mt-16'>
        <div>
            {
                props.data1.map((item, index) => {
                    return(
                        <div className='  'key={index}>
                            <div className=' mr-4'>
                            <img src={item.img} alt="" className='w-full h-auto rounded'/>
                            </div>
                            <div>
                            <p className=' mt-2 text-lg font-semibold'>{item.text1}</p>
                            </div>
                            <div>
                            <img src={item.img4} alt="" className=' rounded'/>
                            </div>
                            <div>
                            <p className=' mt-2 text-md text-gray-700'>{item.text2}</p>
                            </div>
                            <div>
                            <p className=' mt-2 text-sm text-orange-500'>{item.text3}</p>
                            </div>
                        </div>
                    )
            })
        }
       
        </div>
        <div>
        {
                props.data2.map((item, index) => {
                    return(
                        <div className=''>
                            <div className=' items-center mr-4'>
                            <img src={item.img} alt="" className='w-full h-auto rounded'/>
                            </div>
                            <div>
                            <p className=' mt-2 text-lg font-semibold'>{item.text1}</p>
                            </div>
                            <div className=''>
                            <img src={item.img5} alt="" className=' rounded'/>
                            </div>
                            <div>
                            <p className=' mt-2 text-md text-gray-700'>{item.text2}</p>
                            </div>
                            <div>
                            <p className=' mt-2 text-sm text-orange-500'>{item.text3}</p>
                            </div>
                        </div>
                    )
            })
        }
            </div>
            <div>
            {
                props.data3.map((item, index) => {
                    return(
                        <div >
                            <div className=' items-center mr-4 '>
                            <img src={item.img} alt="" className='w-full h-auto rounded'/>
                            </div>
                            <div>
                            <p className=' mt-2 text-lg font-semibold'>{item.text1}</p>
                            </div>
                            <div>
                            <img src={item.img6} alt="" className=' rounded'/>
                            </div>
                            <div>
                            <p className=' mt-2 text-md text-gray-700'>{item.text2}</p>
                            </div>
                            <div>
                            <p className=' mt-2 text-sm text-orange-500'>{item.text3}</p>
                            </div>
                        </div>
                    )
            })
        }
            </div>
            </div>
    </div>
  )
}

export default Top_body
