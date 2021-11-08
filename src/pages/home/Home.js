import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../../App.css'

function Home() {
  return(
  <>
   <div className="h-screen w-screen overflow-hidden">
    <Header />
    
      <div className="bg-main bg-cover bg-no-repeat bg-top w-screen h-2/3 relative">
        <div className="bg-black bg-opacity-75 w-screen h-full absolute top-0 left-0">
          <h1 className="text-white text-5xl text-center pt-10 font-black">WELCOME TO ISLE OF MADDEN</h1>
          <h2 className="text-white text-center text-xl">A PC MADDEN FRANCHISE</h2>
          <div></div>
        </div>
      </div>
    <Footer />
    </div>
  </>
  )
}


export default Home;
