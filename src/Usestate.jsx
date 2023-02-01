import React,{useState} from 'react'

export default function Usestate() {
  const [name, setName]=useState("Rahul")
  const Change = () => {
    setName("mokshith")
  }
  const [age,setAge] = useState(21)
  const Change1 = ()=> setAge(22)
  const [color,setColor]=useState("red")

  const [car,setCar] = useState({
    brand : "Mercedes Benz",
    model : "GLC",
    year : 2000 ,
    color : "white"
  })

  const Changecolor=()=>{
    setCar(()=>{return{...car,color:"green"}})
  } 

  const[bike,setBike]=useState({
    brand :"honda",
    model :"activa",
    year : 2016

  })
  const Changemodel=()=>{
    setBike(()=>{return{...bike,model:"dio"}})
  }

  const [email,setEmail]=useState("")
  const[name1,setName1]=useState("")
  const[address,setAddress]=useState("")
  const[phone,setPhone]=useState("")

  
  return (
    <div>
        <h1>usestate component</h1><br />
        {name}<br/><br />
        <button onClick={Change}>Change</button><br />
        {age} <br /><br />
        <button onClick={Change1}>Change1</button><br /><br />
        <h2>my favourite color is {color}</h2><br />
        <button onClick={()=> setColor("Blue")}>BLUE</button><br />
        <button onClick={()=> setColor("Yellow")}>Yellow</button><br />
        <button onClick={()=> setColor("Green")}>Green</button><br />
        <button onClick={()=> setColor("Aqua")}>Aqua</button><br />
        <p>it is a {car.color} {car.model} from {car.year}</p><br /><br />
        <button onClick={Changecolor}>Colorcar</button><br />
        Email: <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
        Name: <input type="text" onChange={(x)=>setName1(x.target.value)}/><br/>
        address: <input type="text" onChange={(y)=>setAddress(y.target.value)}/><br/>
        phone: <input type="number" onChange={(z)=>setPhone(z.target.value)}/><br/>
        email :{email}<br/>
        name:{name1}<br/>
        address:{address}<br/>
        phone:{phone}<br/>
        <h1>i have a {bike.brand} {bike.model} from {bike.year}</h1>
        <button onClick={Changemodel}>bike</button>
  




    </div>
  )
}
