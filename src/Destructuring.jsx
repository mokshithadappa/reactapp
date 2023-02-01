import React from 'react'

export default function Destructuring(props) {
const cars =['mustang', 'f-150', 'bmw', 'benz'];

const car11 = cars[0];
const car22 = cars[1];
const car33 = cars[2];

const [c1,c2,c3] = cars

const a =[5+5,10+10,20+20];


const [q,w,r] =a;

var message;
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang' ,
    type: 'car',
    year: 2021,
    color: 'red'
}

function myVehicle({type, color, brand, model}) {
    message = 'My' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.' ;
}
myVehicle(vehicleOne);


 const vehicleOne1 = {
    brand: 'Ford',
    model: 'Mustang' ,
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston' ,
        state: 'Texas' ,
        country: 'USA'
    }
}

var message2;

function myVehicle1({ model,registration: {state}}) {
    message2 = 'MY ' + model + ' is registered in' + state + '.';
}

myVehicle1(vehicleOne1)





  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>{props.id}</h1>
        
        {car11}<br/>
        {car22}<br/>
        {car33}<br/>
        {q}<br/>
        {w}<br/>
        {r}<br/>

        {console.log(vehicleOne)}
        {message}<br/>
        {message2}


    </div>
  )
}
