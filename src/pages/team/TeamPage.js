import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamCard from "../../components/TeamCard";
import CoachCard from "../../components/CoachCard";

function TeamPage() {
  return(
  <>
    <Header />
    <TeamCard />
    <CoachCard />
    <Footer />
  </>
  )
}


export default TeamPage;
