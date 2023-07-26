import React from 'react'
import { useState } from 'react';

function Students() {
  const [data]=useState([
    {
      Name:"usman",
      Age:24,
      Course:"fullStack",
      Batch:"EA23",
      Change:"Edit"
    },
    {
      Name:"usman",
      Age:24,
      Course:"fullStack",
      Batch:"EA23",
      Change:"Edit"
    },
    {
      Name:"usman",
      Age:24,
      Course:"fullStack",
      Batch:"EA23",
      Change:"Edit"
    },
    {
      Name:"usman",
      Age:24,
      Course:"fullStack",
      Batch:"EA23",
      Change:"Edit"
    }
  ])
  return (
    <>
      <h1 id="heading">Students Data</h1>
      <button id="btn">Add Student Details</button>
      <table id="table">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        {data.map((item,index)=>{
          return(
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td>{item.Change}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default Students