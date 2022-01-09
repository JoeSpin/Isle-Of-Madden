import React, { useEffect, useState } from 'react'; 
import { qbCore, hbCore, fbCore, teCore, olCore, wrCore, deCore, dtCore, olbCore, mlbCore, cbCore, sCore, stCore} from './CoreAttributes';

export default function PlayerCoreAttributes(props) { 
    const [player, setPlayer] = useState({}); 
    const [position, setPosition] = useState("");
    useEffect(() => { 
        setPlayer(props.player)
        setPosition(props.position);
        
    }, []); 


    if (position === "QB") { 
        return ( 
            <div className="flex flex-wrap w-3/6 justify-center content-center">{qbCore.map((attribute) => (
                    <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                        <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                        <p className='text-center text-base'>{player[attribute.accessor]}</p>
                    </div>
                ))}
                  
            </div>
        )
    }else if (position === "HB"){ 
        return ( 
            <div className="flex flex-wrap w-3/6 justify-center content-center">{hbCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "FB"){ 
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{fbCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "TE") { 
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{teCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "WR"){
        return ( 
            <div className="flex flex-wrap w-3/6 justify-center content-center">{wrCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "LT" || position === "LG" || position === "C" || position === "RG" || position === "RT"){
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{olCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "LE" || position === "RE"){
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{deCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "DT"){ 
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{dtCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "ROLB" || position === "LOLB"){
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{olbCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "MLB"){
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{mlbCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "CB"){ 
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{cbCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "FS" || position === "SS") {
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{sCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "K" || position === "P"){
        return (
            <div className="flex flex-wrap w-3/6 justify-center content-center">{stCore.map((attribute) => (
                <div className="border-2 border-gray-400 w-40" style={{borderColor:'gray'}}>
                    <h3 className='text-lg text-center'>{attribute.Header}</h3>  
                    <p className='text-center text-base'>{player[attribute.accessor]}</p>
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