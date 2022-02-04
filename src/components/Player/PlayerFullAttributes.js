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
        <div className="flex flex-wrap w-3/6 justify-center lg:justify-between content-center"> 
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Core</h2>
                <div className="flex justify-between">
                    <p className="mr-2">Speed</p>
                    <p>{player.speedRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Strength</p>
                    <p>{player.strengthRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Agility</p>
                    <p>{player.agilityRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Acceleration</p>
                    <p>{player.accelRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Jumping</p>
                    <p>{player.jumpRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Awareness</p>
                    <p>{player.awareRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Stamina</p>
                    <p>{player.staminaRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Injury</p>
                    <p>{player.injuryRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Toughness</p>
                    <p>{player.toughRating}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-2">Change of Direction</p>
                    <p>{player.changeOfDirectionRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Passing Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Throw Power</p>
                    <p>{player.throwPowerRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Short Acc</p>
                    <p>{player.throwAccShortRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Throw Acc</p>
                    <p>{player.throwAccRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Medium Acc</p>
                    <p>{player.throwAccMedRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Throw on Run</p>
                    <p>{player.throwOnRunRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Deep Acc</p>
                    <p>{player.throwAccDeepRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Play Action</p>
                    <p>{player.playActionRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Break Sack</p>
                    <p>{player.breakSackRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Receiving Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Catching</p>
                    <p>{player.catchRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Spectacular Catch</p>
                    <p>{player.specCatchRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Catch In Traffic</p>
                    <p>{player.cITRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Short Route</p>
                    <p>{player.routeRunShortRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Medium Route</p>
                    <p>{player.routeRunMedRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Deep Route</p>
                    <p>{player.routeRunDeepRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Release</p>
                    <p>{player.releaseRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Rushing Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Break Tackle</p>
                    <p>{player.breakTackleRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Trucking</p>
                    <p>{player.truckRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Stiff Arm</p>
                    <p>{player.stiffArmRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Spin Move</p>
                    <p>{player.spinMoveRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Juke Move</p>
                    <p>{player.jukeMoveRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Carry Vision</p>
                    <p>{player.bCVRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Pass Coverage Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Man Coverage</p>
                    <p>{player.manCoverRating}</p>
                </div>
                <div className='flex justify-between' >
                    <p className="mr-2">Zone Coverage</p>
                    <p>{player.zoneCoverRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Press</p>
                    <p>{player.pressRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Tackling Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Tackle</p>
                    <p>{player.tackleRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Hit Power</p>
                    <p>{player.hitPowerRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Pursuit</p>
                    <p>{player.pursuitRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Play Recognition</p>
                    <p>{player.playRecRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Blocking Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Pass Block</p>
                    <p>{player.passBlockRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Run Block</p>
                    <p>{player.runBlockRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Pass Block Power</p>
                    <p>{player.runBlockPowerRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Pass Block Finesse</p>
                    <p>{player.passBlockFinesseRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Run Block Power</p>
                    <p>{player.runBlockPowerRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Run Block Finesse</p>
                    <p>{player.runBlockFinesseRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Lead Block</p>
                    <p>{player.leadBlockRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Impact Block</p>
                    <p>{player.impactBlockRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Pass Rush Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Power Moves</p>
                    <p>{player.powerMovesRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Finesse Moves</p>
                    <p>{player.finesseMovesRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Block Shedding</p>
                    <p>{player.blockShedRating}</p>
                </div>
            </div>
            <div className="flex flex-col bg-lightgray m-2 w-1/4 min-w-att">
                <h2 style={{backgroundColor: teamColorCodes[player.teamName]}}>Kicking Attributes</h2>
                <div className='flex justify-between'>
                    <p className="mr-2">Kick Power</p>
                    <p>{player.kickPowerRating}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="mr-2">Kick Accuracy</p>
                    <p>{player.kickAccRating}</p>
                </div>
            </div>
        </div>
    )
}