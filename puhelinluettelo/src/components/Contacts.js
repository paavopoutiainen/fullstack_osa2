import React from 'react'
import Contact from "./Contact"
import personService from "../services/persons"



const Contacts = ({persons, searchWord, setPersons}) =>{


  const deletePerson = id => {
    console.log(`the person of id ${id} was clicked`)
    const result = window.confirm(`Delete ${persons.find(n => n.id === id).name}`);
    if(result){
      console.log("got here")
      personService
        .deletePerson(id)
        .then(setPersons(persons.filter(n => n.id !== id)))
    }
  }  


const rowsArray = persons.map(person => {
  if(person.name.toLowerCase().includes(searchWord.toLowerCase())){
    return <Contact 
      key = {person.name} 
      name = {person.name} 
      number = {person.number}
      deletePerson = {() => deletePerson(person.id)}
    />
  }
  return ""
  
}
)
return(
    <table>
        <tbody>
            {rowsArray}
        </tbody>
    </table>
)
}

export default Contacts


///////////////////////////////