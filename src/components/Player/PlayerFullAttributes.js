import react, {useEffect, useState} from "react";
import teamColorCodes from '../../resources/teamColorCodes.json'

export default function PlayerFullAttributes(props){ 
    const [player, setPlayer] = useState(); 
    const [loading, setLoading] = useState(true);

    const getData = () => { 
        setPlayer(props.playerprop);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [props.playerprop])

    if (loading) {
        return <div className="py-16 text-5xl font-extrabold text-center App dark:bg-gray dark:text-white">Loading...</div>;
      }

    return ( 
        <div className="flex flex-wrap w-3/6 justify-between content-center"> 
            <div className="flex flex-col">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>CORE</h2>
                <div className="flex justify-between">
                    <p>Speed</p>
                    <p>{player.speedRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Strength</p>
                    <p>{player.strengthRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Agility</p>
                    <p>{player.agilityRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Acceleration</p>
                    <p>{player.accelRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Jumping</p>
                    <p>{player.jumpRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Awareness</p>
                    <p>{player.awareRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Stamina</p>
                    <p>{player.staminaRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Injury</p>
                    <p>{player.injuryRating}</p>
                </div>
                <div className="flex justify-between">
                    <p>Toughness</p>
                    <p>{player.toughRating}</p>
                </div>
                <div className="flex justify-between">
                    <p style={{marginRight: '10px'}}>Change of Direction</p>
                    <p>{player.changeOfDirectionRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Passing Attributes</h2>
                <div>
                    <p>Throw Power</p>
                    <p>{player.throwPowerRating}</p>
                </div>
                <div>
                    <p>Short Acc</p>
                    <p>{player.throwAccShortRating}</p>
                </div>
                <div>
                    <p>Throw Acc</p>
                    <p>{player.throwAccRating}</p>
                </div>
                <div>
                    <p>Medium Acc</p>
                    <p>{player.throwAccMedRating}</p>
                </div>
                <div>
                    <p>Throw on Run</p>
                    <p>{player.throwOnRunRating}</p>
                </div>
                <div>
                    <p>Deep Acc</p>
                    <p>{player.throwAccDeepRating}</p>
                </div>
                <div>
                    <p>Play Action</p>
                    <p>{player.playActionRating}</p>
                </div>
                <div>
                    <p>Break Sack</p>
                    <p>{player.breakSackRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Receiving Attributes</h2>
                <div>
                    <p>Catching</p>
                    <p>{player.catchRating}</p>
                </div>
                <div>
                    <p>Spectacular Catch</p>
                    <p>{player.specCatchRating}</p>
                </div>
                <div>
                    <p>Catch In Traffic</p>
                    <p>{player.cITRating}</p>
                </div>
                <div>
                    <p>Short Route</p>
                    <p>{player.routeRunShortRating}</p>
                </div>
                <div>
                    <p>Medium Route</p>
                    <p>{player.routeRunMedRating}</p>
                </div>
                <div>
                    <p>Deep Route</p>
                    <p>{player.routeRunDeepRating}</p>
                </div>
                <div>
                    <p>Release</p>
                    <p>{player.releaseRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Rushing Attributes</h2>
                <div>
                    <p>Break Tackle</p>
                    <p>{player.breakTackleRating}</p>
                </div>
                <div>
                    <p>Trucking</p>
                    <p>{player.truckRating}</p>
                </div>
                <div>
                    <p>Stiff Arm</p>
                    <p>{player.stiffArmRating}</p>
                </div>
                <div>
                    <p>Spin Move</p>
                    <p>{player.spinMoveRating}</p>
                </div>
                <div>
                    <p>Juke Move</p>
                    <p>{player.jukeMoveRating}</p>
                </div>
                <div>
                    <p>Carry Vision</p>
                    <p>{player.bCVRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Pass Coverage Attributes</h2>
                <div>
                    <p>Man Coverage</p>
                    <p>{player.manCoverRating}</p>
                </div>
                <div>
                    <p>Zone Coverage</p>
                    <p>{player.zoneCoverRating}</p>
                </div>
                <div>
                    <p>Press</p>
                    <p>{player.pressRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Tackling Attributes</h2>
                <div>
                    <p>Tackle</p>
                    <p>{player.tackleRating}</p>
                </div>
                <div>
                    <p>Hit Power</p>
                    <p>{player.hitPowerRating}</p>
                </div>
                <div>
                    <p>Pursuit</p>
                    <p>{player.pursuitRating}</p>
                </div>
                <div>
                    <p>Play Recognition</p>
                    <p>{player.playRecRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Blocking Attributes</h2>
                <div>
                    <p>Pass Block</p>
                    <p>{player.passBlockRating}</p>
                </div>
                <div>
                    <p>Run Block</p>
                    <p>{player.runBlockRating}</p>
                </div>
                <div>
                    <p>Pass Block Power</p>
                    <p>{player.runBlockPowerRating}</p>
                </div>
                <div>
                    <p>Pass Block Finesse</p>
                    <p>{player.passBlockFinesseRating}</p>
                </div>
                <div>
                    <p>Run Block Power</p>
                    <p>{player.runBlockPowerRating}</p>
                </div>
                <div>
                    <p>Run Block Finesse</p>
                    <p>{player.runBlockFinesseRating}</p>
                </div>
                <div>
                    <p>Lead Block</p>
                    <p>{player.leadBlockRating}</p>
                </div>
                <div>
                    <p>Impact Block</p>
                    <p>{player.impactBlockRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Pass Rush Attributes</h2>
                <div>
                    <p>Power Moves</p>
                    <p>{player.powerMovesRating}</p>
                </div>
                <div>
                    <p>Finesse Moves</p>
                    <p>{player.finesseMovesRating}</p>
                </div>
                <div>
                    <p>Block Shedding</p>
                    <p>{player.blockShedRating}</p>
                </div>
            </div>
            <div>
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Kicking Attributes</h2>
                <div>
                    <p>Kick Power</p>
                    <p>{player.kickPowerRating}</p>
                </div>
                <div>
                    <p>Kick Accuracy</p>
                    <p>{player.kickAccRating}</p>
                </div>
            </div>
        </div>
    )
}