import axios from 'axios';
import React, {useState } from 'react'; 
import Footer from '../../components/Footer/Footer';
import HeaderFixed from '../../components/Header/HeaderFixed';
import Header from '../../components/Header/Header';
import LeagueSchedule from '../../components/LeagueSchedule/LeagueSchedule';

function LeagueSchedulePage() { 
    const [weekIndex, setWeekIndex] = useState(1); 
    const [seasonIndex, setSeasonIndex] = useState(0); 



    return ( 
        <div>
            <Header active="schedule" />
            <LeagueSchedule seasonIndex={seasonIndex} weekIndex={weekIndex} />
            <Footer />
        </div>
    )
}

export default LeagueSchedulePage;