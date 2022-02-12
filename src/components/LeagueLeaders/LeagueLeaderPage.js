import React from "react";
import Header from "../Header/Header";
import LeagueLeaders from "./LeagueLeadersHub";
import Footer from "../Footer/Footer";

export default function LeagueLeaderPage() {
    return (
        <div>
            <Header active='leagueleaders'/>
            <LeagueLeaders />
            <Footer />
        </div>
    )
}