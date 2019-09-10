import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import AddForm from "./components/AddForm"
import Contacts from "./components/Contacts"
import axios from "axios"


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [person, setPerson] = useState({name:"", number:""})
  const [searchWord, setWord] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => 
        setPersons(response.data))
  },[])

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