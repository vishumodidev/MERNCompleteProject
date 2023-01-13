import GolList from "./component/GoalList";

function App() {

  const CourseGoal= [
    {id:1, text:"finish the course with deep dive"},
    {id:2, text:"learn all about the main "},
    {id:3, text:"Complete the course content within.Described time."},
  ]
  return (
    <div className="course-goal">
      <h2>Welcome JS Code</h2>
  <GolList goals={CourseGoal}/>
    </div>
  );
}

export default App;
