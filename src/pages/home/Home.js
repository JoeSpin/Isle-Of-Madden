import axios from 'axios';
import React, {useState, useEffect} from 'react'; 
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeSchedule from '../../components/LeagueSchedule/HomeSchedule';

function Home() { 
    
  return(
   <div className="relative w-screen overflow-x-hidden md:overflow-y-auto bg-gray">
    <Header active="home" />
    <HomeSchedule />
    <Footer />
    </div>
  )
}


export default Home;