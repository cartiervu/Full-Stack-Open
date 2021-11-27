import React, { useState } from 'react'
import DisplayContacts from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()

  const addPersons = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newName} is already added in the phonebook`)
    }
    setNewName('');
    setNewNumber('');
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>name: <input value={newName}onChange={handleNameInputChange} /></div>
        <div>number: <input value={newNumber}onChange={handleNumberInputChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <DisplayContacts contacts={persons}/>
    </div>
  )
}

export default App