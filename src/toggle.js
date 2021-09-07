import React, { useState } from 'react'

function Toggle() {

    const [name, setName] = useState()
    

    return (
        <div>
        {name ? "Agwa" : "Uche"}
            <button onClick = {setName}  >  name </button>
        </div>
    )
}

export default Toggle
