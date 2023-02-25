/*
import React from 'react'


const Student = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    </div>
  )

}

export default Student
*/



import React from 'react'


const Student = ({name,age}) => {
  return (
    <div>
    <h1>{name}</h1>
    <h1>{age}</h1>
    </div>
  )

}

export default Student