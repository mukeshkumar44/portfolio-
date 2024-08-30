import React from 'react'
import Hero from './Hero'
import Date_hero from './Date_hero'
import Place_body from './Place_body'
import Bali_body from './Bali_body'
import Top_body from './Top_body'
import Rating_body from './Rating_body'
import Offered_body from './Offered_body'
import {arr2 , arr22, arr3 , arr33 , arr333} from './Helper'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Date_hero/>
      <Place_body data={arr2} data2={arr22}/>
      < Bali_body/>
      <Top_body data1={arr3} data2={arr33} data3={arr333}/>
      <Rating_body/>
      <Offered_body/>
      
    </div>
  )
}

export default Home
