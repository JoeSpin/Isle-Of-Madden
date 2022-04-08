import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamCard from "../../components/TeamCard";

function TeamPage() {
  return(
  <div className="flex flex-col justify-center">
    <Header active="teams" />
    <TeamCard />
    <Footer />
  </div>
  )
}


export default TeamPage;
