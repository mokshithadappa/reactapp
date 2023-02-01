import React ,{useState,useEffect}from 'react'

export default function Useeffect() {
    const [name,setName]= useState("rahul")

    const Change = () => {
        setName("mokshith")
      }
      useEffect(()=> {alert("hello")},[name])
const [time,setTime]=useState(0);

useEffect(()=>{setTimeout(()=>{setTime(time+1)},1000)})
const [second,setSecond]=useState(0);
const [minute,setMinute]=useState(0);
const [hour,setHour]=useState(0);
useEffect(()=>{
  if(hour==24){
    setHour(0)
    setMinute(0)
    setSecond(0)
  }
  if(minute==60){
    setHour(hour+1)
    setMinute(0)
  }
  if(second==60){
    setMinute(minute+1)
    setSecond(0)
  }
  setTimeout(()=>{
    setSecond(second+1)
  },1000)
})



  return (
    <div>
        <h1>useeffect</h1><br />
        {name}<br/>
        <button onClick={Change}>touch</button><br />
        <h1>Time:{time}</h1>
        <h1>hours:{hour} # min:{minute} # seconds:{second}</h1>
    </div>
  )
}
