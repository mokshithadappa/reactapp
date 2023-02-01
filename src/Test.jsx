import React,{useState,useEffect, createContext, useContext} from 'react'

export default function Test(props) {
    class Fruits{
        constructor(item){
            this.brand=item;
        }
Color(){
    return " I Have  " + this.brand
}    }
    const myfruit = new Fruits("banana")

class Home{
    constructor(name){
        this.brand= name;
    }
    Present(){
        return 'i live in a ' + this.brand
    }
}

class Add extends Home {
    constructor(name,add){
        super(name)
        this.place=add;
    }
    Show(){
        return this.Present() + " near " + this.place
    }
}
const myhome = new Add ("apartment","nanthur") 


const Hello = () => alert("india")

const Test = a => {
    alert("my name is " +a)
}


const Addd = (a,b) =>{
     alert( a + b)
}

const Mul = (c,d) =>{
    alert("product="+ (c * d))
}

const cars=["BMW","Mercedes","Swift"]

function List(value,i){
    return <h1>{i+1}. {value}</h1>
}

































































class Books{
    constructor(method){
   this.brand = method;
    }
    Notes() {
        return "I have " + this.brand + " notes"
    }
}

const mybook = new Books ("Javascript")


const Name= (a) => {alert(a)}


const Add12 = (b,c) => alert(c + b)

const mokshith = {
    age: 22,
    address: "mangalore",
    complexion: "brown" 
}

const manvith ={
    city : "adyar",
    age: 21,
    father: "jagannath"
}
const ag= false;

const namesCombined = {...mokshith,...manvith}

function Mlr(props){
    return <h1>{props.brand.name},{props.brand.age}</h1>
}
function Blr(){
    const City={name:"mokshith" , age:21};
    return(
        <>
        <h2>WELCOME ONBOARD</h2>
        <Mlr brand={City}/>
        </>
    );
}
function Garage({item,ind}){
    return <h1>{ind}.{item}</h1>
}
function Repair(){
    const Vahan=["BMW","BENZ","MARUTHI"];
    const size=(Vahan.length)
    return(
        <>
        <p> I have  {size}  cars</p>
       {Vahan.map((f,index)=>{return <Garage item={f} ind={index+1}/>})}
       
        </>
    )
}
function Bike(props){
return(
<>
<h1>i have {props.id}</h1>
</>
)
}

// const School =[
//     {
//         name:"Anvith",
//         roll no:1,
//         place:"gulbarga"
//     },{
//         name:"vikram",
//         roll no:2,
//         place:"kulai"
//     },{
//         name:"manvith",
//         roll no:3,
//         place:"adyar"
//     },{
//         name:"chandan",
//         roll no:4,
//         place:"urwa"
//     },{
//         name:"adithya",
//         roll no:5,
//         place:"manipal"
//     },{
//         name:"swaraj",
//         roll no:6,
//         place:"chennai"
//     },{
//         name:"mokshith",
//         roll no:7,
//         place:"mangalore"
//     },
// ]
const[carname,setCarname]=useState("bmw");
const Change =   ()=>{setCarname("tesla")}

const[color1,setColor1]=useState("red");
const[plus,setPlus]=useState(0);
const Add1 = ()=>{setPlus(plus+1)};
const[vehicle1,setVehicle1]=useState({
    name:"maruthi",
    model:800,
    year:2000,
    place:"mangalore"
})
const Suz = ()=>{
    setVehicle1(()=>{return {...vehicle1,place:"bangalore",model:"alto"}})
}
const[bike1,setBike1]=useState("rx100");
const Sd = ()=>{
    setBike1("rx135")
}
useEffect(()=>{alert("hello")},[bike1])

const UserContext= createContext();

function Function1(){
    const[address,setAddress]=useState("mangalore");
    return(
        <>
        <h1>Function1</h1>
        <UserContext.Provider value={{address}}>
            <Function2/>
            </UserContext.Provider>
            </>
    )
}

function Function2(){
    const value=useContext(UserContext)
    return(
        <>
        <h1>Function2,{'hello' + value.address}</h1>
        </>
    )
}




  return (
    <div>
        <h1 style={{backgroundColor:"red"}}> {props.id} </h1> <br/>

        {myfruit.Color()}<br/>
        {myhome.Show()}<br/>
        <button onClick={Hello}>test</button>

        <button onClick={()=>{alert("function")}}>arrow function in line</button>
        <button onClick={()=>Test("karthik")}>String</button>
        <button onClick={()=>Addd(10 , 20)}>addition</button>
        <button onClick={()=>Mul(10,5)}>prod</button>

      {
        cars.map((item,index)=>{return List(item , index)})
      }<br/>
      {mybook.Notes()}<br/>
      <button onClick={ () =>{Name("mokshith")}}>press</button><br/>
      <button onClick={()=>{Add12(10,20)}}>addition</button><br/>
      {console.log(namesCombined)}
      {ag==0?<h1 style={{backgroundColor:"red",color:"aquamarine"}}>FALSE</h1>:<h1 style={{backgroundColor:"green"}}>TRUE</h1>}<br/>
      <Blr/>
      <Repair/>

        <Bike id="ktm"/> <br/>
        {carname}<br/>
        <button onClick={Change}>car</button>
     {color1?<h1 style={{color:color1}}>my fav color is {color1}</h1>: <h2>false</h2>}
        <button onClick={()=>setColor1("green")}>klik</button><br /><br />
        {plus}<br/>
        <button onClick={Add1}>incrment</button><br />
        <h1>it is a {vehicle1.name} {vehicle1.model} from {vehicle1.place}</h1>
        <button onClick={Suz}>800</button><br />
        {bike1}<br/>
        <button onClick={Sd}>Bike</button><br />
        <Function1/>
        </div>
  )
}
