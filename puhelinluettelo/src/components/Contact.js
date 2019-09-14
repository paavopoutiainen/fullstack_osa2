import React from 'react'
    
    const Contact = ({name, number, deletePerson}) => 
        <tr>
            <td >{name}</td>
            <td>{number}</td>
            <td><button onClick = {deletePerson}>delete</button></td>
        </tr>

export default Contact
