import { Link } from 'react-router-dom';


export const passingCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{       
    Header: 'Completions',
    accessor: 'passComp'
}, {
    Header: 'Yards',
    accessor: 'passYds'
}, {
    Header: 'Touchdowns',
    accessor: 'passTDs'
}]

export const rushingCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Attempts',
    accessor: 'rushAtt'
}, {
    Header: 'Yards',
    accessor: 'rushYds'
}, {
    Header: 'Touchdowns',
    accessor: 'rushTDs'
}]

export const receivingCols = [{
    Header: 'Name', 
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Catches',
    accessor: 'recCatches'
}, {
    Header: 'Yards',
    accessor: 'recYds'
}, {
    Header: 'Toucdowns',
    accessor: 'recTDs'
}];

export const tackleCols = [{
    Header: 'Name', 
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Tackles',
    accessor: 'defTotalTackles'
}, {
    Header: 'Forced Fumbles',
    accessor: 'defForcedFum'
}, {
    Header: 'Sacks',
    accessor: 'defSacks'
}]

export const intCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Interceptions',
    accessor: 'defInts'
}, {
    Header: 'Deflections',
    accessor: 'defDeflections'
}, {
    Header: 'Touchdowns',
    accessor: 'defTDs'
}]

export const ffCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Forced Fumbles',
    accessor: 'defForcedFum'
}, {
    Header: 'Tackles',
    accessor: 'defTotalTackles'
}, {
    Header: 'Fumble Recoveries',
    accessor: 'defFumRec'
}]

export const fgCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'FG Made',
    accessor: 'fgMade'
}, {
    Header: 'FG Att',
    accessor: 'fgAtt'
}, {
    Header: 'XP Made',
    accessor: 'xpMade'
}];