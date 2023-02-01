import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleView() {

  const [single,setSingle]=useState([])

  const params = useParams()
  console.log(params.id)
  useEffect(()=>{
setSingle((JSON.parse(localStorage.getItem("Employee"))).filter((e)=>{return e.emp_id==params.id}))
  },[])
console.log(single);
  return (
    <div>
      <center>
      <div className="card" style={{width: "18rem"}}>
  <img src="https://th.bing.com/th/id/OIP.7zgDD73FknRWr4uWJHbB8wHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Employee Id : {single[0]?.emp_id}</h5>
    <h5 className="card-title">Name:{single[0]?.Name}</h5>
    <h5 className="card-title">Phone:{single[0]?.Phone}</h5>
    <h5 className="card-title">Email:{single[0]?.Email}</h5>
  </div>
</div>
</center>
    </div>
  )
}
