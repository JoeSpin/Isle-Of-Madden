function convertIDToName(teamID) {
	const teamIDToName = new Map([
		[980680704, '49ers'],
		[980680705, 'Bears'],
		[980680706, 'Bengals'],
		[980680707, 'Bills'],
		[980680708, 'Broncos'],
		[980680709, 'Browns'],
		[980680710, 'Buccaneers'],
		[980680711, 'Cardinals'],
		[980680744, 'Chargers'],
		[980680745, 'Chiefs'],
		[980680746, 'Colts'],
		[980680747, 'Cowboys'],
		[980680748, 'Dolphins'],
		[980680749, 'Eagles'],
		[980680750, 'Falcons'],
		[980680751, 'Football Team'],
		[980680753, 'Giants'],
		[980680755, 'Jaguars'],
		[980680756, 'Jets'],
		[980680757, 'Lions'],
		[980680759, 'Packers'],
		[980680760, 'Panthers'],
		[980680761, 'Patriots'],
		[980680762, 'Raiders'],
		[980680763, 'Rams'],
		[980680764, 'Ravens'],
		[980680765, 'Saints'],
		[980680766, 'Seahawks'],
		[980680767, 'Steelers'],
		[980680768, 'Texans'],
		[980680769, 'Titans'],
		[980680770, 'Vikings'],
	]);
	return teamIDToName.get(teamID);
}

function convertNameToID(teamName) { 
	let teamNameToID = new Map([
		['49ers', 980680704],
		['Bears', 980680705],
		['Bengals', 980680706],
		['Bills',980680707],
		['Broncos',980680708],
		['Browns',980680709],
		['Buccaneers',980680710],
		['Cardinals',980680711],
		['Chargers',980680744],
		['Chiefs',980680745],
		['Colts',980680746],
		['Cowboys',980680747],
		['Dolphins',980680748],
		['Eagles',980680749],
		['Falcons',980680750],
		['Football Team',980680751],
		['Washington', 980680751], 
		['Giants',980680753],
		['Jaguars',980680755],
		['Jets',980680756],
		['Lions',980680757],
		['Packers',980680759],
		['Panthers',980680760],
		['Patriots',980680761],
		['Raiders',980680762],
		['Rams',980680763],
		['Ravens',980680764],
		['Saints',980680765],
		['Seahawks',980680766],
		['Steelers',980680767],
		['Texans',980680768],
		['Titans',980680769],
		['Vikings',980680770]
	]);
	return teamNameToID.get(teamName);
}

exports.convertNameToID = convertNameToID;
exports.convertIDToName = convertIDToName;