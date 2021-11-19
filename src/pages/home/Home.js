import React from "react";
import '../../App.css'
import hv from "../../img/home-video.mp4"
import iv from "../../img/home-main.jpg"
import HeaderFixed from "../../components/Header/HeaderFixed";
import FooterFixed from "../../components/Footer/FooterFixed";

function Home() {
  return(
  <>
   <div className="relative w-screen overflow-x-hidden md:overflow-y-auto bg-gray">
    <HeaderFixed />
    <div>
    <div className="absolute z-10 w-screen text-white top-32 md:top-64">
        <h1 className="pt-10 text-2xl font-black text-center text-white md:text-4xl lg:text-5xl">WELCOME TO ISLE OF MADDEN</h1>
        <h2 className="text-center text-white sm:text-base md:text-lg lg:text-xl">A PC MADDEN FRANCHISE</h2>
    </div>
    <img src={`${iv}`} alt="home background image" className="relative z-0 block object-cover object-center h-screen min-w-full md:hidden filter brightness-50"/>
    <video autoPlay loop muted className="relative z-0 hidden object-cover object-center h-screen min-w-full w-max md:block lg:object-bottom filter brightness-50">
          <source src={`${hv}`} type="video/mp4" />
          Your browser does not support the video tag. Please use a different Browser. 
        </video>
        </div>
    <FooterFixed />
    </div>
  </>
  )
}


export default Home;