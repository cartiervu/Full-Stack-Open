import React, { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const DisplayAnecdote = ({ anecdote }) => {
  return (
    <div>
      {anecdote}
    </div>
  )
}

const DisplayVotes = ({ votes }) => {
    return (
      <div>
        has {votes} votes
      </div>
    )
}

const DisplayMostVotedAnecdote = ({ anecdotes, votes }) => {
  const index = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <DisplayAnecdote anecdote={anecdotes[index]} />
      <DisplayVotes votes={votes[index]} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextClick = () => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))
  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <DisplayAnecdote anecdote={anecdotes[selected]} />
      <DisplayVotes votes={votes[selected]} />
      <Button onClick={handleVoteClick} text="vote"/>
      <Button onClick={handleNextClick} text="next anecdote"/>
      <Header text="Anecdote with most votes" />
      <DisplayMostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App