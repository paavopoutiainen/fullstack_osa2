import React from 'react'

const Filter = ({searchWord, callback}) => 

    <div>
        Search name
        <input value={searchWord} type="text" placeholder="Search.." onChange={callback} />
    </div>


export default Filter