import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GameStats from "../components/GameStats";

function GameStatsPage() { 
    return ( 
        <>
        <Header /> 
        <GameStats /> 
        <Footer />
        </>
    )
}

export default GameStatsPage;