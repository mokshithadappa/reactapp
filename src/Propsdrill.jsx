import React, { useState } from 'react'

export default function Propsdrill() {

function Function1() {
    const [user,setUser] = useState("Rahul");
    return (
        <>
        <h1>Function1</h1>
        <Function2 user={user}/>
        </>
    );
}

function Function2({user}) {
    return(
        <>
        <h1>Function 2</h1>
        <Function3 user={user}/></>
    );
}

function Function3({user}) {
    return(
        <>
        <h1>Function 3</h1>
        <Function4 user={user}/></>
    );
}

function Function4({user}) {
    return(
        <>
        <h1>Function 4</h1>
        <Function5 user={user}/></>
    );
}

function Function5({user}){
    return (
        <>
        <h1>Function 5,{'Hello' + user}</h1></>
    );
}







  return (
    <div><Function1/></div>
  )
}
