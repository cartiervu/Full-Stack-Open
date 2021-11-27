import React, { useState } from 'react'
import DisplayContacts from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPersons = (event) => {
    event.preventDefault();
    if (!persons.filter(person => person.name === newName)) {
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    setNewName('');
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name:   
          <input 
            value={newName}
            onChange={handleNameInputChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayContacts contacts={persons}/>
    </div>
  )
}

export default App