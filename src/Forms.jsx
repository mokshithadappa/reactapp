import React from 'react'

export default function Forms() {
    function MyForm() {
return (
    <form method='POST' encType='multipart/form-data'>
        <label>Enter your name:
            <input type="text" />
        </label>
        <input type="submit" value="submit" />
    </form>
)

    }
  return (
    <div>
        <h1 style={{backgroundColor:"red"}}>FORM START</h1>
        {<MyForm/>}</div>
  )
}
