import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Standings from "./Standings";

export default function StandingsPage(){

    return (
        <>
        <Header />
        <Standings />
        <Footer />
        </>
    )
}