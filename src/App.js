import logo from './logo.svg';
import './App.css';
import Navbar from './compouent/Navbar';
import Hero from './compouent/Hero';
import Date_hero from './compouent/Date_hero';
import Place_body from './compouent/Place_body';
import Bali_body from './compouent/Bali_body';
import Top_body from './compouent/Top_body';
import Rating_body from './compouent/Rating_body';
import Offered_body from './compouent/Offered_body';
import Footer from './compouent/Footer';
function App() {
  // let arr=[{img:"/image/Logo.png"}, ]
  let arr1=["Home","About","Packages","Places","Contact"]
  let arr2=[{img:"/image/img-box-02 (1).png"},{img:"/image/img-box-02 (2).png"},]
  let arr22=[{img:"/image/img-box-02.png"},{img:"/image/img-box-place.png"}]
  let arr3=[{img:"/image/img-card-hotel-03.png",text1:"Hotel Grand Indonesia",img4:"/image/Star-rating.png",text2:"Jakarta, Indonesia", text3:"From Rp1.500.000,00"}]
   let arr33=[ {img:"/image/img-card-hotel-03 (1).png",text1:"Hotel Grand Indonesia",img5:"/image/Star-rating.png",text2:"Jakarta, Indonesia", text3:"From Rp1.500.000,00"}]
   let arr333=[ {img:"/image/img-card-hotel-03 (2).png",text1:"Hotel Grand Indonesia",img6:"/image/Star-rating.png",text2:"Jakarta, Indonesia", text3:"From Rp1.500.000,00"}
  ]
  return (
    <div>
      <Navbar data={arr1}/>
      <Hero/>
      <Date_hero/>
      <Place_body data={arr2} data2={arr22}/>
      < Bali_body/>
      <Top_body data1={arr3} data2={arr33} data3={arr333}/>
      <Rating_body/>
      <Offered_body/>
      <Footer/>
    </div>
  );
}

export default App;
