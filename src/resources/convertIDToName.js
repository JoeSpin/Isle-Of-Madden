function convertIDToName(teamID) {
	const teamIDToName = new Map([
		[979369984, '49ers'],
		[979369985, 'Bears'],
		[979369986, 'Bengals'],
		[979369987, 'Bills'],
		[979369988, 'Broncos'],
		[979369989, 'Browns'],
		[979369990, 'Buccaneers'],
		[979369991, 'Cardinals'],
		[979370024, 'Chargers'],
		[979370025, 'Chiefs'],
		[979370026, 'Colts'],
		[979370027, 'Cowboys'],
		[979370028, 'Dolphins'],
		[979370029, 'Eagles'],
		[979370030, 'Falcons'],
		[979370031, 'Football Team'],
		[979370033, 'Giants'],
		[979370035, 'Jaguars'],
		[979370036, 'Jets'],
		[979370037, 'Lions'],
		[979370039, 'Packers'],
		[979370040, 'Panthers'],
		[979370041, 'Patriots'],
		[979370042, 'Raiders'],
		[979370043, 'Rams'],
		[979370044, 'Ravens'],
		[979370045, 'Saints'],
		[979370046, 'Seahawks'],
		[979370047, 'Steelers'],
		[979370048, 'Texans'],
		[979370049, 'Titans'],
		[979370050, 'Vikings'],
	]);
	return teamIDToName.get(teamID);
}

function convertNameToID(teamName) { 
	let teamNameToID = new Map([
		['49ers', 979369984],
		['Bears', 979369985],
		['Bengals', 979369986],
		['Bills',979369987],
		['Broncos',979369988],
		['Browns',979369989],
		['Buccaneers',979369990],
		['Cardinals',979369991],
		['Chargers',979370024],
		['Chiefs',979370025],
		['Colts',979370026],
		['Cowboys',979370027],
		['Dolphins',979370028],
		['Eagles',979370029],
		['Falcons',979370030],
		['Football Team',979370031],
		['Washington', 979370031], 
		['Giants',979370033],
		['Jaguars',979370035],
		['Jets',979370036],
		['Lions',979370037],
		['Packers',979370039],
		['Panthers',979370040],
		['Patriots',979370041],
		['Raiders',979370042],
		['Rams',979370043],
		['Ravens',979370044],
		['Saints',979370045],
		['Seahawks',979370046],
		['Steelers',979370047],
		['Texans',979370048],
		['Titans',979370049],
		['Vikings',979370050]
	]);
	return teamNameToID.get(teamName);
}

exports.convertNameToID = convertNameToID;
exports.convertIDToName = convertIDToName;