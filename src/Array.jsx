import React from 'react'

export default function Array() {

const fruits=["Apple ","Mango ","Banana ","Orange "]

function List (value,i){
    return <h1>{i}, {value}</h1>
}



  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>ARRAY START</h1>

        {
        fruits.map((item,index)=>{return <h1>{index}{item}</h1>})
        }

     {
        fruits.map((item,index)=>{return List(item,index)})
        }
    </div>
  )
}
