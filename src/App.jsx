import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './tim'

import Friend from './Friend'

function App() {
 function onClack() {
  alert("button clack");
  
 }

 const onClacks=()=>{
  alert('ami npm run dev');
 }

 const add= (num) =>{
  alert(num+5);

 }


  return (
    <> 
  <Friend></Friend>
    <Team></Team>
  <Counter></Counter>
 
    
      <button onClick={onClack}>Clack mr</button>
      <button onClick={onClacks}> amke clack koro</button>
      <button onClick={()=>{alert("ami ar pari na ")}}>onClack</button>
    

        <button onClick={()=>add(5)}>addMani</button>
          <h3>React Core concepts 3</h3>
    </>
  )

}

export default App







// const [count, setCount] = useState(0)
