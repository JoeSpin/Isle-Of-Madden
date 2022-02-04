import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamCard from "../../components/TeamCard";

function TeamPage() {
  return(
  <>
    <Header active="teams" />
    <TeamCard />
    <Footer />
  </>
  )
}


export default TeamPage;
