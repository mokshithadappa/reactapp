import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Edit() {
  const [single, setSingle] = useState([])
  const [value, setValue] = useState([])

  let navigate=useNavigate();

  const params = useParams()
  console.log(params.id)
  useEffect(() => {
    return (
      setSingle(Object.assign({}, ...((JSON.parse(localStorage.getItem("Employee"))).filter((e) => { return e.emp_id == params.id })))),
      setValue(JSON.parse(localStorage.getItem("Employee")))
    )
  }, [])
  console.log(single)

  const index = ((JSON.parse(localStorage.getItem("Employee"))).findIndex((e) => e.emp_id == params.id))

  console.log(index)


  const Change = (e) => {
    setSingle({...single,[e.target.name]:e.target.value})
    console.log(value)
  }
  const Edit=()=>{
    console.log(value.splice(index,1,single))
    localStorage.setItem("Employee",JSON.stringify(value))
navigate("/view")

  }
  return (
    <div>
      <h1>Edit</h1><br />

      name:<input type="text" value={single.Name} name="Name" onChange={Change} /><br /><br />
      phone:<input type="number" value={single.Phone} name="Phone" onChange={Change} /><br /><br />
      email:<input type="email" value={single.Email} name="Email" onChange={Change}/><br /><br />
      <button onClick={Edit}>edit</button>


    </div>
  )
}
