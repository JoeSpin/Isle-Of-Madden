import axios from 'axios';
import React, {useState, useEffect} from 'react'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PlayerCard from '../../components/Player/PlayerCard';
import PlayerCoreAttributes from '../../components/Player/PlayerCoreAttributes';
import { useParams } from 'react-router';

export default function PlayerPage() { 

    return ( 
        <div className="dark: bg-gray flex flex-col justify-between">
            <Header />
            <PlayerCard/>
            <Footer />
        </div>
    )
}