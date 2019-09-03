import React from 'react'


function Course({course}) {
    return (
      <div>
        <Header course = {course.name}/>
        <Content parts = {course.parts} />
        <Total parts= {course.parts}/>
      </div>  
    )
  }

const Header = (props) => {
    return(
        <h2 style={{fontWeight: "bold"}}>{props.course}</h2>
    )
}

const Content = ({parts}) => {
    console.log("array is:", parts) 

  let rows = () => parts.map((part, i) => 
    <Part key = {i} name = {part.name} exercises = {part.exercises}/>
    )

    return(
        <div>
            {rows()}
        </div>
    )
}

const Part = (props) => {
  console.log(props)
    return(
        <p>{props.name} {props.exercises}</p>
    )
}

const Total = ({parts}) => {
  
    
   console.log("parts", parts)
  const numberOfExercises = parts.reduce((sum, part) => {
    return part.exercises + sum
  }, 0)
 
  
    return(
        <div>
            <p style={{fontWeight: "bold"}}>Total of {numberOfExercises} exercises</p>
        </div>
    )
}

export default Course
