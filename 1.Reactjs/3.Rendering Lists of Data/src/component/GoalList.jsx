import React from 'react'
import "../component/GoalList.css"

const GolList = props => {
  console.log(props.goals)

  return (
    <div className="course-goal">
        <h2>Course Goals</h2>
        <ul className='goal-list'>
{props.goals.map(goals=>{
  return <li key={goals.id}>{goals.text}</li>
})}
        </ul>
     
        </div>
  )
}

export default GolList