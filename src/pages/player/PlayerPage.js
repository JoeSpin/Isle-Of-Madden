
import React from 'react'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PlayerCard from '../../components/Player/PlayerCard';


export default function PlayerPage() { 

    return ( 
        <div className="">
            <Header active="players" />
            <PlayerCard/>
            <Footer />
        </div>
    )
}