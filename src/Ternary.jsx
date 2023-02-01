import React from 'react'

export default function Ternary(props) {

const a=5;
{a<10? alert("a is smaller than 10") : alert("a is larger than 10")}

const msg= "HELO";
 let am =1;



  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>{props.id}</h1>
        {msg=="HELLO"?
        <h2 style={{color:"red"}}>HELLO WORLD</h2>
       :
        <h2 style={{color:"blue"}}>HELLO WORLD</h2>

    }<br/>
    {am ? <h1>true</h1>:<h1>false</h1>}
    </div>
  )
}
