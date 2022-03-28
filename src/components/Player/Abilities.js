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
            <div className='flex flex-col items-center justify-center m-5 lg:w-3/4'>
                <h3 className='w-full text-3xl font-black text-center'>Abilities</h3>
                <div className='p-2 m-2 border-2 md:w-2/3 border-lightgray rounded-xl'>
                    <h4 className='m-2 text-xl font-bold text-center'>{xfAbility.abilityTitle}</h4>
                    <p className='text-center'>{xfAbility.abilityDescription}</p>
                </div>
                <div className='flex flex-col flex-wrap items-center justify-center w-full lg:flex-row'>
                    {ssAbilities.map(ability => (
                        <div className={`border-lightgray border-2 rounded-xl m-2 p-2 md:w-2/3 lg:w-1/4 lg:min-h-52`}>
                            <h4 className='m-2 text-xl font-bold text-center'>{ability.abilityTitle}</h4> 
                            <p className='mx-2 text-center'>{ability.abilityDescription}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
            
        )
    }

    return (
        <div className='flex flex-col items-center justify-center m-5 lg:w-3/4'>
            <h3 className='w-full text-3xl font-black text-center'>Abilities</h3>

            <div className='flex flex-col flex-wrap items-center justify-center w-full lg:flex-row'>

                {ssAbilities.map(ability => (
                    <div className={`border-lightgray border-2 rounded-xl m-2 p-2 md:w-2/3 lg:w-1/4 lg:min-h-52`}>
                        <h4 className='m-2 text-xl font-bold text-center'>{ability.abilityTitle}</h4>
                        <p className='mx-2 text-center'>{ability.abilityDescription}</p>
                    </div>
                ))}
            </div>
        </div>

    )

}