import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeamCard from "./components/TeamCard";
import CoachCard from "./components/CoachCard";
import './App.css'

function App() {
  return(
  <>
    <Header />
    <TeamCard />
    <CoachCard />
    <Footer />
  </>
  )
}


export default App;
