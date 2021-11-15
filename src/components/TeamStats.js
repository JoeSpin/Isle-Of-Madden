import React, {useState, useEffect} from 'react'; 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
        <div>
            <h2>TeamStats Placeholder</h2>
            <LineChart width={400} height={400} data={data}> 
                <Line type="monotone" dataKey="offTotalYds" stroke={`#${stroke}`} />
                <CartesianGrid stroke="#ccc" /> 
                <XAxis dataKey="weekIndex"/> 
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}
