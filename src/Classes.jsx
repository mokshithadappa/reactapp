import React from 'react'

export default function classes(props) {

class Car {
    constructor(name){
        this.brand = name;
    }
}

const mycar = new Car("BMW")

class Bike{
    constructor(name){
        this.brand = name;
    }
    Present(){
        return "I Have" + this.brand + "Bike"
    }
    Old() {
        return this.Present() + " // this is second method"
    }
}

const mybike = new Bike("NINJA")


class College{
    constructor(name){
        this.brand=name;
    }
    Present() {
        return 'I am Studying in ' + this.brand
    }
}

class Model extends College {
    constructor(name,mod) {
        super(name);
        this.model = mod;
    }
    Show() {
        return this.Present() + ' , it is at ' + this.model
    }
}
const mycollege = new Model ("Sahyadri","Adyar");


  return (
    <div>
     <h1 style={{backgroundColor:"red"}}>{props.id}</h1>
        
        {mybike.Old()}<br/>
        {mycar.brand}<br/>
        {mycollege.Show()}
    </div>
  )
}

