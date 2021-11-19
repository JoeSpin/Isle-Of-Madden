import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function CoachCard() {
    const [isLoading, setLoading] = useState(true);
    const [team, setCoachData] = useState();
    const { tn } = useParams();

    useEffect(() => {
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/coach/${tn}`).then(response => {
          setCoachData(response.data[0]);
          setLoading(false);
        });
      }, []);
      if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return (
        <div className="w-full text-center">
            <h3>Coach: {team.coachName}</h3>
        </div>
    )
}
