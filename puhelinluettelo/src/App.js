import React, { useState } from 'react'
import Filter from "./components/Filter"
import AddForm from "./components/AddForm"
import Contacts from "./components/Contacts"

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [person, setPerson] = useState({name:"", number:""})
  const [searchWord, setWord] = useState("")

  function addContact(e){
    e.preventDefault()
    
    if(!persons.some(x => x.name === person.name)){
      setPersons(persons.concat(person))
    } else {
      alert(`${person.name} is already added to phonebook`)
    }
    setPerson({name:"", number:""})
  }

  function contactInputChanged(e){
    setPerson({...person, [e.target.name]: e.target.value})
  }

  function searchWordChanged(e){
    setWord(e.target.value)
  }

  


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchWord = {searchWord} callback = {searchWordChanged}/>
     
      
      <h2>Add new contact</h2>

      <AddForm person={person} changeCallback ={contactInputChanged} addCallback={addContact}/>
      
      <h2>Numbers</h2>

      <Contacts persons ={persons} searchWord={searchWord}/>
      
      
    </div>
  )

}



export default App