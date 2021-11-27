const Contact = ({ name }) => {
    return (
        <div>
        {name}
        </div>
    )
}
  
const DisplayContacts = ({ contacts }) => {
    return (
    <div>
        {contacts.map(contact => <Contact key={contact.name} name={contact.name}/>)}
    </div>
    )
}

export default DisplayContacts