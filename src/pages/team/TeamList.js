import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamListCards from "../../components/TeamListCards";

function TeamPage() {
  return(
  <>
    <Header active="teams"/>
    <TeamListCards />
    <Footer />
  </>
  )
}


export default TeamPage;
