
import React from 'react'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PlayerCard from '../../components/Player/PlayerCard';


export default function PlayerPage() { 

    return ( 
        <div className="dark: bg-gray flex flex-col justify-between">
            <Header active="players" />
            <PlayerCard/>
            <Footer />
        </div>
    )
}