import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamListCards from "../../components/TeamListCards";

function TeamPage() {
  return(
  <div className="h-screen xl:h-full">
    <Header active="teams"/>
    <TeamListCards />
    <Footer />
  </div>
  )
}


export default TeamPage;
