import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { useParams } from "react-router";

export default function GameStats() {
    const [homeData, setHomeData] = useState({}); 
    const [awayData, setAwayData] = useState({}); 
    const [isLoading, setIsLoading] = useState(true);
    const { gameId }  = useParams();


    useEffect(() => {
        axios.get(`http://isle-of-madden-test.herokuapp.com/api/gamestats/${gameId}`).then(response => { 
            generateHomeData(response.data); 
            generateAwayData(response.data);
            setIsLoading(false);
        })
    })

    const generateHomeData = (data) => { 
        let result = {
            defense: [], 
            passing: [],
            rushing: [], 
            receiving: [], 
            score: data.game[0].homeScore, 
            teamName: data.game[0].homeTeam
        }; 
        let homeId = data.game[0].homeTeamId;
        for (const defData of data['defenseNotables']){ 
            if (defData.teamId == homeId) { 
                result.defense.push(defData);
            }
        } 
        for (const passData of data['passing']) { 
            if (passData.teamId == homeId) { 
                result.passing.push(passData);
            }
        } 
        for (const recData of data['receiving']) { 
            if (recData.teamId == homeId) { 
                result.receiving.push(recData);
            }
        }
        for (const rushData of data['rushing']) { 
            if (rushData.teamId == homeId) { 
                result.rushing.push(rushData);
            }
        }
        setHomeData(result);
    }

    const generateAwayData = (data) => { 
        let result = {
            defense: [], 
            passing: [],
            rushing: [], 
            receiving: [], 
            score: data.game[0].awayScore, 
            teamName: data.game[0].awayTeam
        }; 
        let awayId = data.game[0].awayTeamId; 
        for (const defData of data['defenseNotables']) { 
            if (defData.teamId == awayId) { 
                result.defense.push(defData);
            }
        }
        for (const passData of data['passing']) { 
            if (passData.teamId == awayId) { 
                result.passing.push(passData); 
            }
        }
        for (const recData of data['receiving']) { 
            if (recData.teamId == awayId) { 
                result.receiving.push(recData);
            }
        }
        for (const rushData of data['rushing']) { 
            if (rushData.teamId == awayId) { 
                result.rushing.push(rushData);
            }
        }
        setAwayData(result);
    }

    const displayName = (name) => { 
        return <h2 className="my-5">{name}</h2>
    }

    const displayPassingInfo = (passingInfo) => { 
        if (passingInfo) { 
            passingInfo.map(player => { 
                if (player.passInts == 0 && player.passTDs == 0) { 
                    return <p>{`${player.fullName}: ${player.passComp}/${player.passAtt}, ${player.passYds} YDs`}</p>
                }else if (player.passInts > 0 && player.passTDs == 0){ 
                    return <p>{`${player.fullName}: ${player.passComp}/${player.passAtt}, ${player.passYds} YDs, ${player.passInts} Int`}</p>
                }else if (player.passInts == 0 && player.passTds > 0){
                    return <p>{`${player.fullName}: ${player.passComp}/${player.passAtt}, ${player.passYds} YDs`}</p>                    
                }else { 
                    return <p>{`${player.fullName}: ${player.passComp}/${player.passAtt}, ${player.passYds} YDs, ${player.passTDs} TD, ${player.passInts} Int `}</p>
                }
            })
        }
    }
    
    const displayReceivingInfo = (receivingInfo) => { 
        if (receivingInfo) { 
            receivingInfo.map(player => { 
                if (player.recTDs == 0) { 
                    return <p>{`${player.fullName}: ${player.recCatches} Catches, Longest: ${player.recLongest}`}</p>
                }else { 
                    return <p>{`${player.fullName}: ${player.recCatches} Catches, ${player.recTDs} TD, Longest: ${player.recLongest}`}</p>
                }
            })
        }
    }
    
    const displayRushingInfo = (rushingInfo) => { 
        if (rushingInfo) { 
            rushingInfo.map(player => {
                if (player.rushTDs == 0 && player.rushFum == 0) { 
                    return <p>{`${player.fullName}: ${player.rushAtt} Att, ${player.rushYds} Yds, Longest: ${player.rushLongest}`}</p>
                }else if (player.rushTDs > 0 && player.rushFum == 0){ 
                    return <p>{`${player.fullName}: ${player.rushAtt} Att, ${player.rushYds} Yds, ${player.rushTDs} TD, Longest: ${player.rushLongest}`}</p>
                }else if (player.rushTDs == 0 && player.rushFum > 0){ 
                    return <p>{`${player.fullName}: ${player.rushAtt} Att, ${player.rushYds} Yds, ${player.rushFum} Fum, Longest: ${player.rushLongest}`}</p>
                }
                else { 
                    return <p>{`${player.fullName}: ${player.rushAtt} Att, ${player.rushYds} Yds, ${player.rushTDs} TD, ${player.rushFum} Fum, Longest: ${player.rushLongest}`}</p>
                }
            }) 
        }
    }

    const displayScore = (score) => { 
        return <h3>{score}</h3>
    }


    if (isLoading) {
        return <div className="text-3xl font-extrabold text-center App">Loading...</div>;
    }



    return ( 
        
        <div>
            <div> 
                <div>{displayName(homeData['teamName'])}</div>
                <div>{displayPassingInfo(homeData['passing'])}</div>
                <div>{displayReceivingInfo(homeData['receiving'])}</div>
                <div>{displayRushingInfo(homeData['rushing'])}</div>
                
            </div>
            <div> 
                {`${homeData['score']} VS ${awayData['score']}`}
            </div>
            <div>
                {displayName(awayData['teamName'])}
                {displayPassingInfo(awayData['passing'])}
                {displayReceivingInfo(awayData['receiving'])}
                {displayRushingInfo(awayData['rushing'])}
            </div>
        </div>

)}