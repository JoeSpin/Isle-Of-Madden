import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function CoachCard(props) {
    const [isLoading, setLoading] = useState(true);
    const [coach, setCoach] = useState();
    const { tn } = useParams();

    useEffect(() => {
      console.log(props);
      setCoach(props.coach);
      }, [props.coach]);

    return (
        <div className="w-full text-center">
            <h3>Coach: {coach}</h3>
        </div>
    )
}
