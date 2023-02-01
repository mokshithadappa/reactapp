import React from 'react'

export default function Arrow(props) {

function Click(){
  alert(" hello ")
}


const Hello = () =>{
  alert("this is arrow function")
}




  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>{props.id} </h1> <br/>

        <button onClick={Click}>simple</button>
        <button onClick={Hello}>arrow</button>

      
      </div>
  )
}
