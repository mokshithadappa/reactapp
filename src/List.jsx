import React from 'react'

export default function List() {

function Car(props){
    return <li>I am a {props.brand}</li>;
}

function Garage() {
    const cars = ['Ford','Bmw','Audi'];
    return(
        <>
        <h1>who lives in my garage?</h1>
        <ol>
            {cars.map((car,index) => <Car key={index} brand={car}/>)}
        </ol>
        <h2>FINISH</h2>
        </>
    )
}
function Print(props){
    return <h2>{props.value}</h2>
}
let a = [1,2,3,4,5]
    return (
    <div>
<h1 style={{backgroundColor:"red"}}>LIST START</h1>
{a.map((b,index) => <Print key={index} value={b}/>)}

<Garage/>
    </div>
  )
}
