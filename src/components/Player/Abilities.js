import React, {useState, useEffect} from 'react';


export default function Abilities(props){ 
    const [ssAbilities, setSSAbilities] = useState([]); 
    const [xfAbility, setXFAbility] = useState({}); 
    const [devTrait, setDevTrait] = useState(0); 
    useEffect(() => {
        if (props.devTrait === 3){
            let temp = []; 
            for (const ability of props.abilities){
                console.log(ability.abilityTitle);
                let possibleXFAbilities = ['Pro Reads', 'Bazooka', 'Gambler', 'Truzz', 'Blitz Radar', 'Double Me', "RAC 'Em Up", 'Max Security', "YAC 'Em Up", "First One Free", "Freight Train", "Ankle Breaker", "Satellite", "Unstoppable Force", "Fearmonger", "Relentless", 'Reinforcement', "Avalanche", "Blitz","Run Stuffer", "Momentum Shift", "Shutdown", "Zone Hawk", "Bottleneck", "Hi-Lo Deadeye", "Run N Gun", "Brick Wall", "Omaha", "Mossed", "Wrecking Ball", "Grab And Smash", "Vanguard", "Selfless", "Universal Coverage"]
                if (possibleXFAbilities.includes(ability.abilityTitle)){
                    setXFAbility(ability); 
                }else{
                    temp.push(ability); 
                }
            }
            setSSAbilities(temp);
        }else{
            setSSAbilities(props.abilities); 
        } 
        setDevTrait(props.devTrait);
    }, [props.abilities])

    if (devTrait === 3){
        return (
            <>
                <h3 className='text-center w-full text-2xl text-bold'>Abilities</h3>
                <div className='w-full'>
                    <h4 className='text-center text-xl'>{xfAbility.abilityTitle}</h4>
                    <p>{xfAbility.abilityDescription}</p>
                </div>
                <div className='flex flex-row content-center justify-between'>
                    {ssAbilities.map(ability => (
                        <div className={`w-1/${ssAbilities.length}`}>
                            <h4 className='text-center text-xl mr-2 ml-1'>{ability.abilityTitle}</h4> 
                            <p className='mr-2 ml-2'>{ability.abilityDescription}</p>
                        </div>
                        
                    ))}
                </div>
            </>
            
        )
    }

    return (
        <>
            <h3 className='text-center w-full text-lg text-bold'>Abilities</h3>

            <div className='flex flex-row'>

                {ssAbilities.map(ability => (
                    <div>
                        <h4 className='text-center w-full'>{ability.abilityTitle}</h4>
                        <p>{ability.abilityDescription}</p>
                    </div>
                ))}
            </div>
        </>

    )

}