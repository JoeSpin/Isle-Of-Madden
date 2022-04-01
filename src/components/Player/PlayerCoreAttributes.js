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
        
    }, [props.player, props.position]); 




    const calcRatingColor = (rating) => {
        if (rating >= 92)
            return '#2cba00'
        else if (rating < 92 && rating >= 83)
            return '#a3ff00'
        else if (rating < 82 && rating >= 71)
            return '#fff400'
        else if (rating < 71 && rating >= 60)
            return '#ffa700'
        else
            return '#ff0000'
    }

    const containerStyle = "grid grid-cols-2 grid-rows-4 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 m-5";
    const attributeBorderStyle = "flex flex-col items-center justify-center m-1 w-32 border-2 rounded-2xl border-lightgray";
    const attributeHeaderStyle = 'text-sm text-center';
    const attributeNumberStyle = 'flex items-center justify-center w-12 h-12 m-1 text-lg font-black text-center border-4 rounded-full bg-lightgray';


    if (position === "QB") { 
        return ( 
            <div className={containerStyle}>{qbCore.map((attribute) => (
                    <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                        <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                        <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                    </div>
                ))}
                  
            </div>
        )
    }else if (position === "HB"){ 
        return ( 
            <div className={containerStyle}>{hbCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "FB"){ 
        return (
            <div className={containerStyle}>{fbCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "TE") { 
        return (
            <div className={containerStyle}>{teCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "WR"){
        return ( 
            <div className={containerStyle}>{wrCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "LT" || position === "LG" || position === "C" || position === "RG" || position === "RT"){
        return (
            <div className={containerStyle}>{olCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "LE" || position === "RE"){
        return (
            <div className={containerStyle}>{deCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "DT"){ 
        return (
            <div className={containerStyle}>{dtCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "ROLB" || position === "LOLB"){
        return (
            <div className={containerStyle}>{olbCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "MLB"){
        return (
            <div className={containerStyle}>{mlbCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "CB"){ 
        return (
            <div className={containerStyle}>{cbCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "FS" || position === "SS") {
        return (
            <div className={containerStyle}>{sCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else if (position === "K" || position === "P"){
        return (
            <div className={containerStyle}>{stCore.map((attribute) => (
                <div className={attributeBorderStyle} style={{borderColor:'gray'}}>
                    <h3 className={attributeHeaderStyle}>{attribute.Header}</h3>  
                    <p className={attributeNumberStyle} style={{borderColor:calcRatingColor(player[attribute.accessor])}}>{player[attribute.accessor]}</p>
                </div>
            ))}
              
        </div>
        )
    }else {
        return (
            <div></div>
        )
       
    }
}