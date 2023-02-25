
import React from 'react'
import Comp from "./Comp";

const Student = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <Comp name = {props.name}/>
    </div>
  )

}

export default Student