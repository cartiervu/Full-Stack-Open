const Header = ({ text }) => {
    return (
      <h3>{text}</h3>
    )
  }

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((prev, curr) => prev + curr.exercises, 0);
  return (
    <b>total of {total} exercises</b>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course