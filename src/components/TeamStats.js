import React, {useState, useEffect} from 'react'; 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Label, ResponsiveContainer } from 'recharts';
import '../resources/team_stats.css'

export default function TeamStats(props) {
    const [data, setData] = useState([]); 
    const [stroke, setStroke] = useState();
    useEffect(() => { 
        const arr = []
        let locStroke = +props.teamColor;
        setData(props.weeklyStats);       
        console.log(`Type of stroke ${typeof locStroke}`);
        let locStrokeHex = locStroke.toString(16);
        setStroke(locStrokeHex);
        console.log(locStroke);
        console.log(locStrokeHex);
    })


    return (
        <div id="teamStatsDiv">
            <div>
                <h2>Offensive Yards Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart  data={data}> 
                        <Line type="monotone" dataKey="offTotalYds" stroke={props.teamColor} />
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3"/> 
                        <XAxis dataKey="weekIndex" />
                        <YAxis />
                        <Tooltip />

                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div> 
                <h2>Offensive Pass Yards Per Game </h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data}>
                    <Line type="monotone" dataKey="offPassYds" stroke={props.teamColor} />
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3"/> 
                        <XAxis dataKey="weekIndex" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h2>Offensive Rush Yards Per Game </h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data}>
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3"/> 
                        <Line type="monotone" dataKey="offRushYds" stroke={props.teamColor} />
                        <XAxis dataKey="weekIndex" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h2>Turnovers Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data}>
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3"/> 
                        <Line type="monotone" dataKey="tOGiveaways" stroke={props.teamColor} />
                        <XAxis dataKey="weekIndex" />
                        <YAxis/>
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h2>Defensive Total Yards Allowed Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data}> 
                        <Line type="monotone" dataKey="defTotalYds" stroke={props.teamColor} /> 
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3"/> 
                        <XAxis dataKey="weekIndex" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h2>Defensive Pass Yards Allowed Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data} >
                        <Line type="monotone" dataKey="defPassYds" stroke={props.teamColor} />
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3" /> 
                        <XAxis dataKey="weekIndex" />
                        <YAxis  />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h2>Defensive Rush Yards Allowed Per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data}> 
                        <Line type="monotone" dataKey="defRushYds" stroke={props.teamColor} /> 
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3"/> 
                        <XAxis dataKey="weekIndex" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h2>Takeaways per Game</h2>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={data}> 
                        <Line type="monotone" dataKey="tOTakeaways" stroke={props.teamColor} /> 
                        <CartesianGrid stroke="#A9A9A9" strokeDasharray="3 3"/> 
                        <XAxis dataKey="weekIndex" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
