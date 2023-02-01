import React from 'react'
import {name,address,phone,Variables} from './Export'
import Display from './Export'

export default function Import(props) {
  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>{props.id}</h1>
        Import {name}<br/>
        {address}<br/>
        {phone}<br/>
        {Variables()}<br/>
        {Display()}
        </div>
  )
}
