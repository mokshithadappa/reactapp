import React from 'react'
import Destructuring from './Destructuring';

export default function Spreadoperator(props) {

const numbersOne = [1,2,3,4];
const numbersTwo = [5,6,7];

// Destructuring

const numbers = [1,2,3,4,5,6];
const [one,two, ...rest] = numbers;



const numbersCombined = [...numbersOne,...numbersTwo];


const myVehicle ={
    brand: 'Ford' ,
    model: 'Mustang' ,
    color: "red"
}
const updateMyVehicle = {
    type: 'car' ,
    year: 2021,
    color: 'yellow'
}

const VehicleCombined = {...myVehicle,...updateMyVehicle,state:"Karnataka"};


  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>{props.id}</h1>

        {numbersCombined}<br/>

        {one}<br/>

        {two}<br/>
        {rest}<br/>
        {console.log(VehicleCombined)}
    </div>
  )
}
