import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import AddForm from "./components/AddForm"
import Contacts from "./components/Contacts"
import personService from "./services/persons"
import Notification from "./components/Notification"



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [person, setPerson] = useState({name:"", number:""})
  const [searchWord, setWord] = useState("")
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    
    personService
        .getAll()
        .then(personsData => setPersons(personsData))

  },[])

  function addContact(e){
    e.preventDefault()
    
    if(!persons.some(x => x.name === person.name)){
      personService
        .create(person)
        .then(addedPerson => setPersons(persons.concat(addedPerson)))
        
      setMessage(`Added ${person.name}`)  
      setTimeout(() => 
        setMessage(null), 5000
      )
      
    } else {
      const personToBeChanged = persons.find(p => p.name === person.name)
      const result = window.confirm(
        `${person.name} is already added to phonebook, replace the old number with a new one?`
      );
      if(result){
        personService
          .update(person, personToBeChanged.id)
          .then(response => {
            setPersons(persons.filter(p => p.name !== response.name).concat(response))
            setMessage("Number changed")
            setTimeout(() => {
            setMessage(null)
          }, 5000)
          })
          
          .catch(error => {
            
            setErrorMessage(`Information of ${person.name} has already been removed from the server`)
            setPersons(persons.filter(p => person.name !== p.name))
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          }
            
          )
          
          
      }
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
      <Notification message={message} errorMessage={errorMessage}/>
      <Filter searchWord = {searchWord} callback = {searchWordChanged}/>
     
      
      <h2>Add new contact</h2>

      <AddForm person={person} changeCallback ={contactInputChanged} addCallback={addContact}/>
      
      <h2>Numbers</h2>

      <Contacts persons ={persons} searchWord={searchWord} setPersons ={setPersons} setMessage={setMessage}/>
      
      
    </div>
  )

}



export default App