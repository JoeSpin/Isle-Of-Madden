import { Link } from 'react-router-dom'; 

export const standingsColumns = [{
    Header: 'Team', 
    accessor: row => {
        return (
            <div>
                <h4>{row.place}. <Link to={`/team/${row.teamId}`}>{row.teamName}</Link> </h4>
            </div>
        )
    }
},{
    Header: 'Wins',
    accessor: 'totalWins'
},{
    Header: 'Losses',
    accessor: 'totalLosses'
},{
    Header: 'Ties',
    accessor: 'totalTies'
},{
    Header: 'Win Pct',
    accessor: row => {
        if (row.totalLosses != 0){
            return `${((row.totalWins / (row.totalTies + row.totalLosses + row.totalWins)) * 100 ).toFixed(2)}`
        }else {
            return "100";
        }
    }
}, {
    Header: 'Pts Scored',
    accessor: 'ptsFor'
},{
    Header: 'Pts Against',
    accessor: 'ptsAgainst'
},{
    Header: 'Pt Diff',
    accessor: row => {
        return `${row.ptsFor - row.ptsAgainst}`
    }
}, {
    Header: 'Home Rec',
    accessor: row => {
        return `${row.homeWins}-${row.homeLosses}-${row.homeTies}`
    }
},{
    Header: 'Road Rec',
    accessor: row => { 
        return `${row.awayWins}-${row.awayLosses}-${row.awayTies}`
    }
},{
    Header: 'Div Rec',
    accessor: row => {
        return `${row.divWins}-${row.divLosses}-${row.divTies}`
    }
}, {
    Header: 'Conf Rec',
    accessor: row => {
        return `${row.confWins}-${row.confLosses}-${row.confTies}`
    }
},{
    Header: 'Win-Loss Streak',
    accessor: row => {
        if (row.winLossStreak > 24){
            return `-${(255 - row.winLossStreak) + 1}`
        }else { 
            return `${row.winLossStreak}`
        }
    }
}]