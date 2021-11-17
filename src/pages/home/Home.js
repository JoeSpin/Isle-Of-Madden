import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../../App.css'
import hv from "../../img/home-video.mp4"

function Home() {
  return(
  <>
   <div className="relative w-screen h-screen md:overflow-y-auto">
    <Header />
    <div>
    <div className="absolute z-10 w-screen text-white top-32 md:top-64">
        <h1 className="pt-10 text-2xl font-black text-center text-white md:text-4xl lg:text-5xl">WELCOME TO ISLE OF MADDEN</h1>
        <h2 className="text-center text-white sm:text-base md:text-lg lg:text-xl">A PC MADDEN FRANCHISE</h2>
    </div>
    <video autoPlay loop muted className="relative z-0 object-cover object-center min-w-full h-3/4screen lg:object-bottom filter brightness-50">
          <source src={`${hv}`} type="video/mp4" />
          Your browser does not support the video tag. Please use a different Browser. 
        </video>
        </div>
    <Footer />
    </div>
  </>
  )
}


export default Home;
/*
relative w-screen bg-top bg-no-repeat bg-cover bg-main h-2/3

<div className="absolute top-0 left-0 w-screen h-full bg-black bg-opacity-75">
          <h1 className="pt-64 text-2xl font-black text-center text-white md:pt-10 md:text-4xl lg:text-5xl">WELCOME TO ISLE OF MADDEN</h1>
          <h2 className="text-center text-white sm:text-base md:text-lg lg:text-xl">A PC MADDEN FRANCHISE</h2>
          <div></div>
        </div>
        */