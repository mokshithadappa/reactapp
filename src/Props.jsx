import React from 'react'

export default function Props() {
    function Car(props){
        return <h2> I Have {props.brand},{props.year}</h2>
    }

    function Hero(props) {
      return <h2>I am a {props.brand }!</h2>;
    }

    function Demo(props) {
      return (
        <>
        <h1>Who is in my team</h1>
        <Hero brand={props.id}/>
        </>
      )
    }
    function Vehicle(props){
      return <h2>{props.brand}!</h2>;
    }
    function Showroom() {
      const carName = "BMW";
      return(
        <>
        <h1>Who lives in my garage?</h1>
        <Vehicle brand={ carName} />
        </>
      );
    }
    function College(props){
      return <h2>I am a {props.brand.school},{props.brand.name}</h2>
    }

    function Students(){
      const Detail = {name:"Jack",school:"Aloy"};
      return(
        <>
        <h1>who is admitted</h1>
        <College brand={Detail}/>
        </>
      );
    }
    function DisplayFruits({ item,ind }) {
      return <h1>{ind}.{item}</h1>;
    }
    function Fruits(){
      const fruits = ["apple","banana","orange","mango"];
      return (
        <div>
          <h2>I have fruits</h2>
          {/* <DisplayFruits item={fruits}/> */}
          {fruits.map((f,index)=>{return <DisplayFruits item={f} ind={index+1}/>})}
        </div>
      )
    }
  return (
    <div>
        {/* {Car("BMW")} */}
        <Car brand="BMW" year="2022"/><br />
        <Demo id="Rahul"/>
        <Showroom/>
        <Students/>
        <Fruits/>
    </div>
  )
}
