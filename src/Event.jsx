import React from 'react'

export default function Event() {
    const Shoot = (e) => {
        alert("Great Shot!");
        console.log(e)
    }
    const Shoot2 = (e) => {
        alert (e);
    }
  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>EVENT START</h1>
        <button onMouseOver={Shoot}>PRESS</button>
        <input type="text" onChange={Shoot} />
        <button onClick={()=>Shoot2("nice kick")}>Take a Shot</button>
    </div>
  )
}
