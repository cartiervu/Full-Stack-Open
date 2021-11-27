const Contact = ({ contact }) => {
    return (
        <div>{contact.name} {contact.number}</div>
    )
}
  
const DisplayContacts = ({ contacts }) => {
    return (
    <div>
        {contacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
    </div>
    )
}

export default DisplayContacts