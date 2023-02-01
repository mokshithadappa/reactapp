import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';


export default function Insert() {
    const[name,setName]=useState("");
    const[phone,setPhone]=useState(0);
    const[mail,setMail]=useState("");

    let navigate = useNavigate();

let initvalue;
if(localStorage.getItem("Employee" ) === null){
  initvalue=[]
}
else{
  initvalue = JSON.parse(localStorage.getItem("Employee"))
}

    const[value,setValue]=useState(initvalue);
   const Submit=async ()=>{
    let emp_id=101;
    if (value.length===0){
      emp_id=101;
    }
    else{
      emp_id = value[value.length - 1].emp_id+1
    }
    
    const details ={
      emp_id:emp_id,
      Name:name,
      Phone:phone,
      Email:mail
    }
setValue([...value,details])
     await localStorage.setItem("Employee",JSON.stringify(value))
    
navigate("/view")
   }

   useEffect(() =>{
    localStorage.setItem("Employee",JSON.stringify(value))

   },[value])

  return (
    <div>
        <h1>INSERT</h1><br />
       
       name:<input type="text"  onChange={(e)=>{setName(e.target.value)}}/><br/><br />
       phone:<input type="number"  onChange={(y)=>{setPhone(y.target.value)}}/><br/><br />
       email:<input type="email"  onChange={(z)=>{setMail(z.target.value)}}/><br/><br />

       <button onClick={Submit}>submit</button><br />
    </div>
  )
}
