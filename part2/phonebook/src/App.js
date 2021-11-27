import React, { useState } from 'react'
import DisplayContacts from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [filter, setFilter] = useState(null);

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

  const handleFilterInputChange = (event) => {
    setFilter(event.target.value);
  }

  const getFilteredPeople = () => {
    return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const personsToShow = (filter == null) ? persons : getFilteredPeople()

  return (
    <div>
      <h2>Phonebook</h2>
        <div>filter shown with <input value={filter} onChange={handleFilterInputChange}/></div>
      <h2>add a new</h2>
      <form onSubmit={addPersons}>
        <div>name: <input value={newName} onChange={handleNameInputChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberInputChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <DisplayContacts contacts={personsToShow}/>
    </div>
  )
}

export default App