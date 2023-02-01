import React from 'react'

export default function Variable(props) {

let name ="rahul"
var age =30
const address = "mangalore"

const element = <h1>this is element</h1>


  return (
    <div>
      <h1 style={{backgroundColor:"green"}}>{props.id}</h1>

<p>"My  name is {name} and i am {age} years old, and i am from {address}"</p>

<p>{`Name = ${name}`}</p>
<p>{"Name = " +name}</p><br />

{element}

<a href="link.html">link</a>


    </div>
  )
}
