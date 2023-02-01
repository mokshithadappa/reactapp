import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function View() {
const[display,setDisplay]=useState([])
const[delete_item,setDelete_item]=useState([]);

const[value,setValue]=useState([]);


const onDelete= async()=>{
    await setDisplay(display.filter((e)=>{
        console.log(delete_item)
        console.log(e)


        return e.emp_id !== delete_item.emp_id
    }));
    await localStorage.setItem("Employee",JSON.stringify(display))
}

useEffect(()=>{
   setDisplay(JSON.parse(localStorage.getItem("Employee")))

},[])

  return (
    <div>
        <h1>View</h1>
        <table border="1px">
        <thead>
            <tr>
            <th>sl.no</th>
            <th>employee id</th>
            <th>employee name</th>
            <th>phone no.</th>
            <th>email</th>
            <th>view</th>
            <th>edit</th>
            <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {display==null?"No Data":
            display.map((item)=>{
                return(
                    <tr>
            <td>1</td>
            <td>{item.emp_id}</td>
            <td>{item.Name}</td>
            <td>{item.Phone}</td>
            <td>{item.Email}</td>
            <td><Link to={`/single-view/${item.emp_id}`}>View</Link></td>
            <td><Link to={`/edit/${item.emp_id}`}>Edit</Link></td>
            {/* <td><Link >Delete</Link></td> */}
            <td><Link onClick={()=>setDelete_item(item)} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</Link></td>

        </tr>
                )
            })}
        
        
        </tbody>
    </table>

<button type="button" className="btn btn-primary" >
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">delete</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        are you sure
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onDelete}>delete</button>
      </div>
    </div>
  </div>
</div>
        
    </div>
  )
}
