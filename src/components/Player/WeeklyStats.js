import axios from "axios";
import react, {useEffect, useState} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PlayerPerGameStats } from './PlayerPerGameStats';


export default function WeeklyStats(props){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
       setData(props.weeklystats);
    }, [props.weeklystats])


    if (props.position === "QB") { 
        return (
            <div className="flex flex-wrap w-3/6 content-center">
                <div className="w-full">
                    <PlayerPerGameStats games={data} position={data.position} />
                </div>
                 <div className="w-3/6">
                    <h2>Pass Yards Per Game</h2> 
                        <ResponsiveContainer width="90%" height={400}>
                            <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1"/>
                            <Line type="monotone" dataKey="passYds" stroke={props.teamcolor} strokeWidth={4}/> 
                            <XAxis tickLine={false} dataKey="weekIndex" />
                            <YAxis />
                            <Tooltip /> 
                            </LineChart>
                        </ResponsiveContainer>
                 </div>
                <div className="w-3/6">
                    <h2>TDs Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" />
                            <Line type="monotone" dataKey="passTDs" stroke={props.teamcolor} strokeWidth={4} /> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-3/6">
                    <h2>Passer Rating Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="passerRating" stroke={props.teamcolor} strokeWidth={4} /> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div>
                <PlayerPerGameStats position={props.position} games={data} />
                </div>
            </div>
        )
    }else if (props.position === "HB" ||  props.position === "FB"){
        return (
            <div className="flex flex-wrap w-3/6 content-center">
                <div className="w-full">
                    <PlayerPerGameStats games={data} position={data.position} />
                </div>
            <div className="w-3/6">
               <h2>Pass Yards Per Game</h2> 
                   <ResponsiveContainer width="90%" height={500}>
                       <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                       <CartesianGrid strokeDasharray="1"/>
                       <Line type="monotone" dataKey="rushYds" stroke={props.teamcolor} strokeWidth={4}/> 
                       <XAxis tickLine={true} dataKey="weekIndex" />
                       <YAxis />
                       <Tooltip /> 
                       </LineChart>
                   </ResponsiveContainer>
            </div>
           <div className="w-3/6">
               <h2>TDs Per Game</h2>
               <ResponsiveContainer width="90%" height={400}>
                   <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                       <CartesianGrid strokeDasharray="1" />
                       <Line type="monotone" dataKey="rushTDs" stroke={props.teamcolor} strokeWidth={4} /> 
                       <XAxis tickLine={false} dataKey="weekIndex" /> 
                       <YAxis />
                       <Tooltip />
                   </LineChart>
               </ResponsiveContainer>
           </div>
           <div className="w-3/6">
               <h2>Passer Rating Per Game</h2>
               <ResponsiveContainer width="90%" height={400}>
                   <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                       <CartesianGrid strokeDasharray="1" /> 
                       <Line type="monotone" dataKey="rushLongest" stroke={props.teamcolor} strokeWidth={4} /> 
                       <XAxis tickLine={false} dataKey="weekIndex" /> 
                       <YAxis />
                       <Tooltip />
                   </LineChart>
               </ResponsiveContainer>
           </div>
       </div>
        )
    }else if (props.position === "TE" || props.position === "WR"){
        return (
        <div className="flex flex-wrap w-3/6 content-center">
            <div className="w-full">
                    <PlayerPerGameStats games={data} position={data.position} />
            </div>
            <div className="w-3/6">
                <h2>Receiving Yards Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                        <CartesianGrid strokeDasharray="1" /> 
                        <Line type="monotone" dataKey="recYds" stroke={props.teamcolor} strokeWidth={4} /> 
                        <XAxis tickLine={false} dataKey="weekIndex" /> 
                        <YAxis />
                        <Tooltip /> 
                    </LineChart>
                </ResponsiveContainer> 
            </div>
            <div className="w-3/6">
                <h2>Receiving TDs Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                        <CartesianGrid strokeDasharray="1" /> 
                        <Line type="monotone" dataKey="recTDs" stroke={props.teamcolor} strokeWidth={4} /> 
                        <XAxis tickLine={false} dataKey="weekIndex" /> 
                        <YAxis />
                        <Tooltip /> 
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="w-3/6">
                <h2>Catches Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                        <CartesianGrid strokeDasharray="1" /> 
                        <Line type="monotone" dataKey="recCatches" stroke={props.teamcolor} strokeWidth={4} /> 
                        <XAxis tickLine={false} dataKey="weekIndex" /> 
                        <YAxis />
                        <Tooltip /> 
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="w-3/6">
                <h2>Longest Reception Per Game </h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                        <CartesianGrid strokeDasharray="1" /> 
                        <Line type="monotone" dataKey="recLongest" stroke={props.teamcolor} strokeWidth={4} /> 
                        <XAxis tickLine={false} dataKey="weekIndex" /> 
                        <YAxis />
                        <Tooltip /> 
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
        )
    }else if (props.position === "LE" || props.position === "RE" || props.position === "DT"){
        return (
            <div className="flex flex-wrap w-3/6 content-center">
                <div className="w-full">
                    <PlayerPerGameStats games={data} position={data.position} />
                </div>
                <div className="w-3/6">
                    <h2>Tackles Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="defTotalTackles" stroke={props.teamcolor} strokeWidth={4} /> 
                            <XAxis tickLine={false} dataKey="weekIndex" />
                            <YAxis />
                            <Tooltip /> 
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-3/6">
                    <h2>Sacks Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="defSacks" stroke={props.teamcolor} strokeWidth={4} /> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip /> 
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }else if (props.position === "ROLB" || props.position === "MLB" || props.position === "LOLB"){
        return (
        <div className="flex flex-wrap w-3/6 content-center">
            <div className="w-full">
                <PlayerPerGameStats games={data} position={data.position} />
            </div>
            <div className="w-3/6">
                <h2>Tackles Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                        <CartesianGrid strokeDasharray="1" />
                        <Line type="monotone" dataKey="defTotalTackles" stroke={props.teamcolor} strokeWidth={4} /> 
                        <XAxis tickLine={false} dataKey="weekIndex" /> 
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="w-3/6">
                <h2>Sacks Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                        <CartesianGrid strokeDasharray="1" /> 
                        <Line type="monotone" dataKey="defSacks" stroke={props.teamcolor} strokeWidth={4} /> 
                        <XAxis tickLine={false} dataKey="weekIndex" /> 
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="w-3/6">
                <h2>Interceptions Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                        <CartesianGrid strokeDasharray="1" /> 
                        <Line type="monotone" dataKey="defInts" stroke={props.teamcolor} strokeWidth={4} /> 
                        <XAxis tickLine={false} dataKey="weekIndex" /> 
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
        )
    }else if (props.position === "CB" || props.position === "FS" || props.position === "SS"){
        return (
            <div className="flex flex-wrap w-3/6 content-center">
                <div className="w-full">
                    <PlayerPerGameStats games={data} position={data.position} />
                </div>
                <div className="w-3/6">
                    <h2>Pass Deflections Per Game</h2>
                    <ResponsiveContainer width="90%" height={400} >
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="defDeflections" stroke={props.teamcolor} strokeWidth={4} /> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-3/6">
                    <h2>Passes Allowed Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="defCatchAllowed"  stroke={props.teamcolor} strokeWidth={4}/> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip />    
                        </LineChart>    
                    </ResponsiveContainer> 
                </div>
                <div className="w-3/6">
                    <h2>Interceptions Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="defInts" stroke={props.teamcolor} strokeWidth={4}/> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip />
                        </LineChart>    
                    </ResponsiveContainer> 
                </div>
            </div>
        )
    }else if (props.position === "K"){
        return (
            <div className="flex flex-wrap w-3/6 content-center">
                <div className="w-full">
                    <PlayerPerGameStats games={data} position={data.position} />
                </div>
                <div className="w-3/6">
                    <h2>FGs Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="fGMade" stroke={props.teamcolor} strokeWidth={4} /> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip /> 
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-3/6">
                    <h2>Longest FG Per Game</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <LineChart data={data} margin={{top:0,right:0,left:0,bottom:50}}>
                            <CartesianGrid strokeDasharray="1" /> 
                            <Line type="monotone" dataKey="fGLongest" stroke={props.teamcolor} strokeWidth={4} /> 
                            <XAxis tickLine={false} dataKey="weekIndex" /> 
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }else {
        return (
            <div> 
                <p>There are no stats to show for this position</p>
            </div>
        )
    }
}