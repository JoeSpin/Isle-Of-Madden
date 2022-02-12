import { Link } from 'react-router-dom';


export const passingCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{       
    Header: 'Comp',
    accessor: 'passComp'
}, {
    Header: 'Yds',
    accessor: 'passYds'
}, {
    Header: 'TDs',
    accessor: 'passTDs'
}]

export const rushingCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Att',
    accessor: 'rushAtt'
}, {
    Header: 'Yds',
    accessor: 'rushYds'
}, {
    Header: 'TDs',
    accessor: 'rushTDs'
}]

export const receivingCols = [{
    Header: 'Name', 
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Rec',
    accessor: 'recCatches'
}, {
    Header: 'Yds',
    accessor: 'recYds'
}, {
    Header: 'TDs',
    accessor: 'recTDs'
}];

export const tackleCols = [{
    Header: 'Name', 
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'Tkl',
    accessor: 'defTotalTackles'
}, {
    Header: 'FF',
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
    Header: 'INTs',
    accessor: 'defInts'
}, {
    Header: 'Def',
    accessor: 'defDeflections'
}, {
    Header: 'TDs',
    accessor: 'defTDs'
}]

export const ffCols = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.fullName}`}</Link>
    }
},{
    Header: 'FF',
    accessor: 'defForcedFum'
}, {
    Header: 'Tkl',
    accessor: 'defTotalTackles'
}, {
    Header: 'FR',
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