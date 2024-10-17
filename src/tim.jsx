import { useState } from "react"

export default function Team(){

    const [team,setTeam]=useState(11)


    const add = () =>{
        const newAdd=team+1;
        setTeam(newAdd)
    }

    
    const adds = () =>{
       
        setTeam( team-1)
    }


    const teamStyle={
        border:"2px solid purple",
        margin:'15px',
        padding:'15px',
        borderRadius:'15px',

    }

    return (
        <div style={teamStyle}>
            <h3>players:{team}</h3>
            <button onClick={add}>add</button>
            <button onClick={adds}>maine</button>
        </div>
    )
}