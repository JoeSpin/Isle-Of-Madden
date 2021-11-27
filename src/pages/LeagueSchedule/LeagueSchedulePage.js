import axios from 'axios';
import React, {useState, useEffect} from 'react'; 
import Footer from '../../components/Footer/Footer';
import HeaderFixed from '../../components/Header/HeaderFixed';
import Header from '../../components/Header/HeaderFixed';
import LeagueSchedule from '../../components/LeagueSchedule/LeagueSchedule';

function LeagueSchedulePage() { 
    const [weekIndex, setWeekIndex] = useState(1); 
    const [seasonIndex, setSeasonIndex] = useState(0); 

    useEffect(() => { 
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/currentweek/${seasonIndex}`).then(response => { 
            setWeekIndex(response.data.currentWeek);   
        }, [])
    })

    return ( 
        <div>
            <Header />

            <LeagueSchedule seasonIndex={seasonIndex} weekIndex={weekIndex} />
            <Footer />
        </div>
    )
}

export default LeagueSchedulePage;