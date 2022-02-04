import React, { useEffect, useState } from 'react'; 
import { qbCore, hbCore, fbCore, teCore, olCore, wrCore, deCore, dtCore, olbCore, mlbCore, cbCore, sCore, stCore} from './CoreAttributes';

/*
stageone:'#008450',
      stagetwo:'#789e28',
      stagethree:'#b3aa14',
      stagefour:'#efb700',
      stagefive:'#e19005',
      stagesix:'#d46a0a',
      stageseven:'#c33c0f',
      stageeight:'#b81d13',
*/

export default function PlayerCoreAttributes(props) { 
    const [player, setPlayer] = useState({}); 
    const [position, setPosition] = useState("");
    useEffect(() => { 
        setPlayer(props.player)
        setPosition(props.position);
        
    }, []); 
const calcRatingColor = (rating) => {
        if (rating >= 95)
            return '#008450'
        else if (rating < 95 && rating >= 90)
            return '#789e28'
        else if (rating < 90 && rating >= 85)
            return '#b3aa14'
        else if (rating < 85 && rating >= 80)
            return '#efb700'
        else if (rating < 80 && rating >= 75)
            return '#e19005'
        else if (rating < 75 && rating >= 70)
            return '#d46a0a'
        else if (rating < 70 && rating >= 60)
            return '#c33c0f'
        else
            return '#b81d13'
}

    if (position === "QB") { 
        return ( 
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{qbCore.map((attribute) => (
                    <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                        <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                        <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                    </div>
                ))}
                  
            </div>
        )
    }else if (position === "HB"){ 
        return ( 
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{hbCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "FB"){ 
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{fbCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "TE") { 
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{teCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "WR"){
        return ( 
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{wrCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "LT" || position === "LG" || position === "C" || position === "RG" || position === "RT"){
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{olCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "LE" || position === "RE"){
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{deCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "DT"){ 
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{dtCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "ROLB" || position === "LOLB"){
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{olbCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "MLB"){
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{mlbCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "CB"){ 
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{cbCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "FS" || position === "SS") {
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{sCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "K" || position === "P"){
        return (
            <div className="flex flex-wrap content-center justify-center w-full lg:w-7/12">{stCore.map((attribute) => (
                <div className="flex flex-col items-center justify-center w-40 m-1 border-2 rounded-2xl border-lightgray" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='flex items-center justify-center w-16 h-16 m-2 text-3xl font-black text-center border-4 rounded-full bg-lightgray' style={{backgroundColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }
    return (
        <div>
            <h1>oops</h1>
        </div>
    )
}