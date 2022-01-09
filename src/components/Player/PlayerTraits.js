import React, { useEffect, useState } from 'react'; 
import { parseCoverBall, parseForcePass, parsePenalty, parsePlayBall, parseSensePressure } from '../../resources/ParseTraits';

function PlayerTraits(props) { 
    const [traits, setTraits] = useState({}); 
    const [position, setPosition] = useState("");
    useEffect(() => { 
        setTraits(props.traits);
    }, [props.traits])
    const outputTraits = []; 
    if (position === "QB") { 
        if (traits.tightSpiralTrait === 1) { 
            outputTraits.push("Tight Sprial");
        }
        if (traits.throwAwayTrait === 1) { 
            outputTraits.push("Throw Away");
        }
        if (traits.highMotorTrait === 1){ 
            outputTraits.push("High Motor");
        }
        outputTraits.push(parseForcePass(traits.forcePassTrait)); 
        outputTraits.push(parsePenalty(traits.penaltyTrait));
        outputTraits.push(parseSensePressure(traits.sensePressureTrait));

    }else if (position === "FB" || position === "HB") {
        if (traits.highMotorTrait === 1) { 
            outputTraits.push("High Motor");
        }
        if (traits.fightForYardsTrait === 1) { 
            outputTraits.push("Fights For Yards");
        }
        outputTraits.push(parseCoverBall(traits.coverBallTrait)); 
        outputTraits.push(parsePenalty(traits.penaltyTrait));
        
    }else if (position === "WR" || position === "TE") { 
        if (traits.highMotorTrait === 1) { 
            outputTraits.push("High Motor");
        }
        if (traits.fightForYardsTrait === 1){ 
            outputTraits.push("Fights For Yards");
        }
        if (traits.dropOpenPassTrait === 1) { 
            outputTraits.push("Drops Open Passes");
        }
        if (traits.feetInBoundsTrait === 1) { 
            outputTraits.push("Keeps Feet In Bounds");
        }
        if (traits.yACCatchTrait === 1) { 
            outputTraits.push("Yards After Catch");
        }
        // check if playBallTrait is aggressive catch for WRs
        outputTraits.push(parsePenalty(traits.penaltyTrait));
        outputTraits.push(parseCoverBall(traits.coverBallTrait));

    }else if (position === "LT" || position === "LG" || position === "C" || position === "RG" || position === "RT") { 
        if (traits.highMotorTrait === 1){ 
            outputTraits.push("High Motor");
        }
        outputTraits.push(parsePenalty(traits.penaltyTrait));
    }else if (position === "RE" || position === "DT" || position === "LE") { 
        if (traits.highMotorTrait === 1){  
            outputTraits.push("High Motor");
        }
        if (traits.dLBullRushTrait === 1) { 
            outputTraits.push("Bull Rush");
        }
        if (traits.dLSpinTrait === 1) {
            outputTraits.push("Spin Move");
        }
        if (traits.dLSwimTrait === 1) { 
            outputTraits.push("Swim Move");
        }
        if (traits.stripBallTrait === 1) { 
            outputTraits.push("Strip Ball");
        }
        outputTraits.push(parsePenalty(traits.penaltyTrait));
    }else if (position === "ROLB" || position === "MLB" || position === "LOLB") { 
        if (traits.highMotorTrait === 1) {
            outputTraits.push("High Motor");
        }
        if (traits.dLBullRushTrait === 1) { 
            outputTraits.push("Bull Rush");
        }
        if (traits.dLSpinTrait === 1){ 
            outputTraits.push("Spin Move");
        }
        if (traits.dLSwimTrait === 1) { 
            outputTraits.push("Swim Move");
        }
        if (traits.stripBallTrait === 1){ 
            outputTraits.push("Strip Ball");
        }
        outputTraits.push(parsePlayBall(traits.playBallTrait));
        outputTraits.push(parsePenalty(traits.penaltyTrait));
    }else if (position === "CB" || position === "FS" || position === "SS") {
        if (traits.highMotorTrait === 1) { 
            outputTraits.push("High Motor");
        }
        if (traits.stripBallTrait === 1) { 
            outputTraits.push("Strip Ball");
        }
        outputTraits.push(parsePlayBall(traits.playBallTrait));
        outputTraits.push(parsePenalty(traits.penaltyTrait));
    }



    return ( 
        <div id="TraitsArea">
            {outputTraits.map(trait => (
                <p>{trait}</p>
        ))}
        </div>
    )
}