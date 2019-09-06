import React from 'react'
import Contact from "./Contact"



const Contacts = ({persons, searchWord}) =>{

const rowsArray = persons.map(person => {
  if(person.name.toLowerCase().includes(searchWord.toLowerCase())){
    return <Contact 
      key = {person.name} 
      name = {person.name} 
      number = {person.number}
    />
  }
  
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