import { convertTrait, convertHeight } from './ColumnAccessorFunctions';
import { Link } from 'react-router-dom';

export const defaultColumns = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
}, {
    Header: 'Position',
    accessor: 'position'
}, {
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'Ovr',
    accessor: 'playerBestOvr'
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}, { 
    Header: 'Awr',
    accessor: 'awareRating'
}
]

export const qbColumns = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
}, {
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
}, {
    Header: 'Ovr',
    accessor: 'playerBestOvr'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'AWR', 
    accessor: 'awareRating'
},{ 
    Header: 'THP',
    accessor: 'throwPowerRating'
},{ 
    Header: 'TAC',
    accessor: 'throwAccRating'
}, { 
    Header: 'TOR',
    accessor: 'throwOnRunRating'
}, { 
    Header: 'SAC', 
    accessor: 'throwAccShortRating'
}, { 
    Header: 'MAC', 
    accessor: 'throwAccMedRating'
}, { 
    Header: 'DAC', 
    accessor: 'throwAccDeepRating'
},{
    Header: 'PA Rating',
    accessor: 'playActionRating'
}, {
    Header: 'Break Sack',
    accessor: 'breakSackRating'
},{
    Header: 'Under Pressure',
    accessor: 'throwUnderPressureRating'
},{ 
    Header: 'Speed',
    accessor: 'speedRating'
}
]

export const hbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
}, {
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'OVR',
    accessor: 'playerBestOvr'
},{
    Header: 'Awareness',
    accessor: 'awareRating'
},{
    Header: 'Speed',
    accessor: 'speedRating'
},{ 
    Header: 'Agility', 
    accessor: 'agilityRating'
},{
    Header: 'Accel',
    accessor: 'accelRating'
},
{ 
    Header: 'STR',
    accessor: 'strengthRating'
}, {
    Header: 'Break TKL', 
    accessor: 'breakTackleRating'
}, { 
    Header: 'TRK',
    accessor: 'truckRating'
}, { 
    Header: 'Juke', 
    accessor: 'jukeMoveRating'
}, { 
    Header: 'COD', 
    accessor: 'changeOfDirectionRating'
}, { 
    Header: 'SPN',
    accessor: 'spinMoveRating'
}, { 
    Header: 'STF', 
    accessor: 'stiffArmRating'
}, { 
    Header: 'CAR',
    accessor: 'carryRating'
}, { 
    Header: 'BCV', 
    accessor: 'bCVRating'
}
]

export const fbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'OVR',
    accessor: 'playerBestOvr'
},{
    Header: 'Carry', 
    accessor: 'carryRating'
}, { 
    Header: 'Impact Blk',
    accessor: 'impactBlockRating'
}, { 
    Header: 'Lead Blk',
    accessor: 'leadBlockRating'
}, { 
    Header: 'Run Blk',
    accessor: 'runBlockRating'
}, {
    Header: 'Pass Blk', 
    accessor: 'passBlockRating'
},
{ 
    Header: 'Strength',
    accessor: 'strengthRating'
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}, { //16
    Header: 'Truck',
    accessor: 'truckRating'
}, {
    Header: 'Stiff Arm',
    accessor: 'stiffArmRating'
},{
    Header: 'Break TKL',
    accessor: 'breakTackleRating'
},{ 
    Header: 'Accel',
    accessor: 'accelRating'
}, { 
    Header: 'Agility', 
    accessor: 'agilityRating'
}, { 
    Header: 'Catch',
    accessor: 'catchRating'
}
]

export const teColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'OVR',
    accessor: 'playerBestOvr'
},{ 
    Header: 'Speed', 
    accessor: 'speedRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
},{ 
    Header: 'Catch', 
    accessor: 'catchRating'
}, {
    Header: 'CIT',
    accessor: 'cITRating'
}, { 
    Header: 'SPC', 
    accessor: 'specCatchRating'
}, { 
    Header: 'Short Route', 
    accessor: 'routeRunShortRating'
}, { 
    Header: 'Med Route',
    accessor: 'routeRunMedRating'
}, { 
    Header: 'Deep Route', 
    accessor: 'routeRunDeepRating'
}, {
    Header: 'Jump',
    accessor: 'jumpRating'  
},{ 
    Header: 'Run Blk', 
    accessor: 'runBlockRating'
}, { 
    Header: 'Impact Blk',
    accessor: 'impactBlockRating'
}, {
    Header: 'Pass Blk',
    accessor: 'passBlockRating'
},{
    Header: 'Lead Blk',
    accessor: 'leadBlockRating'
},{ 
    Header: 'AWR',
    accessor: 'awareRating'
}, {
    Header: 'Break TKL',
    accessor: 'breakTackleRating'
}
]

export const wrColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, {
    Header: 'Speed', 
    accessor: 'speedRating'
}, { 
    Header: 'Accel',
    accessor: 'accelRating'
}, {
    Header: 'Agility',
    accessor: 'agilityRating'
},{
    Header: 'Short Route',
    accessor: 'routeRunShortRating'
}, { 
    Header: 'Med Route', 
    accessor: 'routeRunMedRating'
}, { 
    Header: 'Deep Route', 
    accessor: 'routeRunDeepRating'
}, { 
    Header: 'Catch', 
    accessor: 'catchRating'
}, { 
    Header: 'CIT', 
    accessor: 'cITRating'
}, { 
    Header: 'SPC', 
    accessor: 'specCatchRating'
}, { 
    Header: 'Jump',
    accessor: 'jumpRating'
}, { 
    Header: 'Release',
    accessor: 'releaseRating'
}
]

export const olColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Position',
    accessor: 'position'
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, 
{ 
    Header: 'Strength', 
    accessor: 'strengthRating'
}, { 
    Header: 'Run Blk',
    accessor: 'runBlockRating'
}, { 
    Header: 'Run Blk Pwr',
    accessor: 'runBlockPowerRating'
}, {
    Header: 'Run Blk Fin', 
    accessor: 'runBlockFinesseRating'
}, { 
    Header: 'Pass Blk',
    accessor: 'passBlockRating'
}, { 
    Header: 'Pass Blk Pwr',
    accessor: 'passBlockPowerRating'
}, { 
    Header: 'Pass Blk Fin', 
    accessor: 'passBlockFinesseRating'
}, { 
    Header: 'Lead Blk',
    accessor: 'leadBlockRating'
}, { 
    Header: 'Impact Blk', 
    accessor: 'impactBlockRating'
}, { 
    Header: 'Awareness',
    accessor: 'awareRating'
}
]

export const dlColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Position',
    accessor: 'position'
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, { 
    Header: 'Blockshed', 
    accessor: 'blockShedRating'
}, { 
    Header: 'Power Move',
    accessor: 'powerMovesRating'
}, { 
    Header: 'Finesse Move',
    accessor: 'finesseMovesRating'
}, { 
    Header: 'Play Rec', 
    accessor: 'playRecRating'
}, { 
    Header: 'Pursuit', 
    accessor: 'pursuitRating'
}, { 
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
}, { 
    Header: 'Strength', 
    accessor: 'strengthRating'
}, { 
    Header: 'Tackle',
    accessor: 'tackleRating'
}, { 
    Header: 'Awareness',
    accessor: 'awareRating'
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
}

]

export const deColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, { 
    Header: 'Blockshed', 
    accessor: 'blockShedRating'
}, { 
    Header: 'Power Move',
    accessor: 'powerMovesRating'
}, { 
    Header: 'Finesse Move',
    accessor: 'finesseMovesRating'
}, { 
    Header: 'Play Rec', 
    accessor: 'playRecRating'
}, { 
    Header: 'Pursuit', 
    accessor: 'pursuitRating'
}, { 
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
}, { 
    Header: 'Strength', 
    accessor: 'strengthRating'
}, { 
    Header: 'Tackle',
    accessor: 'tackleRating'
}, { 
    Header: 'Awareness',
    accessor: 'awareRating'
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
}, {
    Header: 'Agility',
    accessor: 'agilityRating'
}

]

export const olbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, { 
    Header: 'Speed', 
    accessor: 'speedRating'
}, { 
    Header: 'Tackle', 
    accessor: 'tackleRating'
}, {
    Header: 'Strength', 
    accessor: 'strengthRating'
},{ 
    Header: 'Power Move', 
    accessor: 'powerMovesRating'
}, { 
    Header: 'Finesse Move', 
    accessor: 'finesseMovesRating'
}, { 
    Header: 'Play Rec', 
    accessor: 'playRecRating'
}, { 
    Header: 'Zone Coverage', 
    accessor: 'zoneCoverRating'
}, { 
    Header: 'Man Coverage',
    accessor: 'manCoverRating'
}, { 
    Header: 'Pursuit',
    accessor: 'pursuitRating'
}, { 
    Header: 'Agility',
    accessor: 'agilityRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
},{ 
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
}, {
    Header: 'Blockshed',
    accessor: 'blockShedRating'
}, {
    Header: 'AWR', 
    accessor: 'awareRating'
}
]

export const mlbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, { 
    Header: 'Speed', 
    accessor: 'speedRating'
}, { 
    Header: 'Tackle', 
    accessor: 'tackleRating'
}, { 
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
},{
    Header: 'Strength', 
    accessor: 'strengthRating'
}, { 
    Header: 'Power Move', 
    accessor: 'powerMovesRating'
}, { 
    Header: 'Finesse Move', 
    accessor: 'finesseMovesRating'
}, { 
    Header: 'Play Rec', 
    accessor: 'playRecRating'
}, { 
    Header: 'Zone Coverage', 
    accessor: 'zoneCoverRating'
}, { 
    Header: 'Man Coverage',
    accessor: 'manCoverRating'
}, { 
    Header: 'Pursuit',
    accessor: 'pursuitRating'
}, { 
    Header: 'Agility',
    accessor: 'agilityRating'
},  {
    Header: 'Accel', 
    accessor: 'accelRating'
},{
    Header: 'Blockshed', 
    accessor: 'blockShedRating'
}, {
    Header: 'AWR', 
    accessor: 'awareRating'
}
]
export const lbColumns = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Position',
    accessor: 'position'
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
},{
    Header: 'Speed',
    accessor: 'speedRating'
}, {
    Header: 'Tackle',
    accessor: 'tackleRating'
},{
    Header: 'Power Moves', 
    accessor: 'powerMovesRating'
}, {
    Header: 'Finesse Moves',
    accessor: 'finesseMovesRating'
}, {
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
}, {
    Header: 'Play Rec',
    accessor: 'playRecRating'
}, {
    Header: 'Zone Cover',
    accessor: 'zoneCoverRating'
}, {
    Header: 'Man Cover',
    accessor: 'manCoverRating'
}, {
    Header: 'Pursuit',
    accessor: 'pursuitRating'
}, {
    Header: 'Agility',
    accessor: 'agilityRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
}, {
    Header: 'Block Shed',
    accessor: 'blockShedRating'
}, {
    Header: 'Awareness',
    accessor: 'awareRating'
}, {
    Header: 'Strength',
    accessor: 'strengthRating'
}]
export const cbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, {
    Header: 'Speed',
    accessor: 'speedRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
}, {
    Header: 'Zone Coverage',
    accessor: 'zoneCoverRating'
}, { 
    Header: 'Man Coverage', 
    accessor: 'manCoverRating'
}, { 
    Header: 'Play Rec', 
    accessor: 'playRecRating'
}, { 
    Header: 'Awareness', 
    accessor: 'awareRating'
}, { 
    Header: 'Press',
    accessor: 'pressRating'
}, { 
    Header: 'Jumping',
    accessor: 'jumpRating'
}, { 
    Header: 'Catch',
    accessor: 'catchRating'
}, { 
    Header: 'Agility',
    accessor: 'agilityRating'
}, {
    Header: 'Tackle',
    accessor: 'tackleRating'
}
]


export const sColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, {
    Header: 'Speed',
    accessor: 'speedRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
}, {
    Header: 'Zone Coverage',
    accessor: 'zoneCoverRating'
}, { 
    Header: 'Man Coverage', 
    accessor: 'manCoverRating'
}, { 
    Header: 'Play Rec', 
    accessor: 'playRecRating'
}, { 
    Header: 'Awareness', 
    accessor: 'awareRating'
}, { 
    Header: 'Pursuit',
    accessor: 'pursuitRating'
}, {
    Header: 'Tackle',
    accessor: 'tackleRating'
},{ 
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
}, { 
    Header: 'Catch',
    accessor: 'catchRating'
}, { 
    Header: 'Agility',
    accessor: 'agilityRating'
}, {
    Header: 'Blockshed',
    accessor: 'blockShedRating'
}
]
export const dbColumns = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Position',
    accessor: 'position'
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
},{
    Header: 'Speed',
    accessor: 'speedRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
}, {
    Header: 'Zone Cover',
    accessor: 'zoneCoverRating'
}, {
    Header: 'Man Cover',
    accessor: 'manCoverRating'
}, {
    Header: 'Play Rec',
    accessor: 'playRecRating'
}, { 
    Header: 'Awareness',
    accessor: 'awareRating' 
}, {
    Header: 'Press',
    accessor: 'pressRating'
}, {
    Header: 'Pursuit', 
    accessor: 'pursuitRating'
}, {
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
}, {
    Header: 'Tackle',
    accessor: 'tackleRating'
}, {
    Header: 'Agility',
    accessor: 'agilityRating'
}, {
    Header: 'Jump',
    accessor: 'jumpRating'
}, {
    Header: 'Block Shed',
    accessor: 'blockShedRating'
}
]

export const stColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link> 
    }
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Team',
    accessor: row => { 
        return `${row.teamName}`;
    }   
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
},{
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, {
    Header: 'Position',
    accessor: 'position'
},{ 
    Header: 'Kick Power', 
    accessor: 'kickPowerRating' 
},{
    Header: 'Kick Acc',
    accessor: 'kickAccRating'
}, { 
    Header: 'Awareness',
    accessor: 'awareRating'
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}, {
    Header: 'Accel',
    accessor: 'accelRating'
}, { 
    Header: 'Agility',
    accessor: 'agilityRating'
}, { 
    Header: 'Strength', 
    accessor: 'strengthRating'
}, { 
    Header: 'Throw Power', 
    accessor: 'throwPowerRating'
}, { 
    Header: 'Short Acc', 
    accessor: 'throwAccShortRating'
}

]


export const TeamRosterColumns = [{
    Header: 'Name',
    accessor: row => { 
        return <Link to={`/player/${row.playerId}`} className="underline hover:text-purple">{`${row.firstName} ${row.lastName}`}</Link>
    }
}, {
    Header: 'Position',
    accessor: 'position'
},{
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
    }
},{
    Header: 'Age',
    accessor: 'age'
},{
    Header: 'Height',
    accessor: row => {
        return convertHeight(row.height); 
    }
}, { 
    Header: 'Weight',
    accessor: 'weight'
}, {
    Header: 'Ovr',
    accessor: 'playerBestOvr'
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}, { 
    Header: 'Awr',
    accessor: 'awareRating'
}
]
