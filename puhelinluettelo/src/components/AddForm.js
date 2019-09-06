import React from 'react'

const AddForm = (props) =>
    <form onSubmit={props.addCallback}>
        <div>
            name: 
            <input value={props.person.name} onChange={props.changeCallback} name="name" />
        </div>
        <div>number:
            <input value ={props.person.number} onChange={props.changeCallback} name="number"/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>

export default AddForm