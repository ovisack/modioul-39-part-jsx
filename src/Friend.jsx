 
 import { useEffect, useState } from 'react'
import './Friend.css'
import './friends.jsx'
 
 export default function Friends(){

const [friend,setFriend] =useState([])


useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))
},[])
    return(
        <div className='box'>
            <h3>Friend:{friend.length}</h3>
            {
                Friends.map(friend=><Friends friend={friend}> </Friends>)
            }
        </div>
    )

}