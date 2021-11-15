import { convertTrait, convertHeight } from './ColumnAccessorFunctions';

export const defaultColumns = [{
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`;
    }
}, {
    Header: 'Position',
    accessor: 'position'
}, {
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
        return `${row.firstName} ${row.lastName}`;
    }
}, {
    Header: 'Dev Trait',
    accessor: row => { 
        return convertTrait(row.devTrait);
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
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}
]

export const hbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`;
    }
}, {
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
    Header: 'OVR',
    accessor: 'playerBestOvr'
},{
    Header: 'Awareness',
    accessor: 'awareRating'
},{
    Header: 'Speed',
    accessor: 'speedRating'
},  { 
    Header: 'STR',
    accessor: 'strengthRating'
}, { 
    Header: 'Agility', 
    accessor: 'agilityRating'
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
}
]

export const fbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`; 
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
    Header: 'Strength',
    accessor: 'strengthRating'
}, { 
    Header: 'Speed',
    accessor: 'speedRating'
}, { //16
    Header: 'Truck',
    accessor: 'truckRating'
}, { 
    Header: 'Accel',
    accessor: 'accelRating'
}, { 
    Header: 'Agility', 
    accesor: 'agilityRating'
}, { 
    Header: 'Catch',
    accessor: 'catchRating'
}
]

export const teColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`; 
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
    Header: 'OVR',
    accessor: 'playerBestOvr'
},{ 
    Header: 'Speed', 
    accessor: 'speedRating'
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
}
]

export const wrColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`; 
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
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, {
    Header: 'Speed', 
    accessor: 'speedRating'
}, { 
    Header: 'Accel',
    accessor: 'accelRating'
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
        return `${row.firstName} ${row.lastName}`; 
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
    Header: 'OVR',
    accessor: 'playerBestOvr'
}, { 
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
        return `${row.firstName} ${row.lastName}`; 
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
}

]

export const lbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`; 
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
    Header: 'Speed', 
    accessor: 'speedRating'
}, { 
    Header: 'Tackle', 
    accessor: 'tackleRating'
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
}, { 
    Header: 'Hit Power',
    accessor: 'hitPowerRating'
}
]

export const dbColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`; 
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
    Headerr: 'Hit Power',
    accessor: 'hitPowerRating'
}, { 
    Header: 'Catch',
    accessor: 'catchRating'
}, { 
    Header: 'Agility',
    accessor: 'agilityRating'
}
]

export const stColumns = [{ 
    Header: 'Name',
    accessor: row => { 
        return `${row.firstName} ${row.lastName}`; 
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
}

]