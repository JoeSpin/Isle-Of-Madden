import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PlayerSearch from "../../components/PlayerSearch";
import '../../resources/PlayerSearchTable.css';
function PlayerSearchPage() {
  return(
  <div className="flex flex-col justify-center">
    <Header active="players"/>
    <PlayerSearch />
    <Footer />
  </div>
  )
}


export default PlayerSearchPage;
